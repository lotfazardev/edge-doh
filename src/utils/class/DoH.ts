export default class DoH {
  private endpoint: string;

  constructor(endpoint: string = '/dns-query') {
    this.endpoint = endpoint;
  }

  private createDNSQuery(domain: string): Buffer {
    const header = Buffer.alloc(12);
    header.writeUInt16BE(0x1234, 0);
    header.writeUInt16BE(0x0100, 2);
    header.writeUInt16BE(1, 4);
    header.writeUInt16BE(0, 6);
    header.writeUInt16BE(0, 8);
    header.writeUInt16BE(0, 10);

    const questionParts = domain.split('.');
    const question = Buffer.concat([
      ...questionParts.map((part) => {
        const label = Buffer.from(part);
        return Buffer.concat([Buffer.from([label.length]), label]);
      }),
      Buffer.from([0]),
    ]);

    const typeAndClass = Buffer.alloc(4);
    typeAndClass.writeUInt16BE(1, 0);
    typeAndClass.writeUInt16BE(1, 2);

    return Buffer.concat([header, question, typeAndClass]);
  }

  public async resolve(domain: string, timeout = 4000): Promise<Buffer> {
    const query = this.createDNSQuery(domain);

    const abortController = new AbortController();

    if (timeout) {
      setTimeout(() => abortController.abort(), timeout);
    }

    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/dns-message',
      },
      body: query,
      signal: abortController.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    return Buffer.from(await response.arrayBuffer());
  }

  public parseResponse(response: Buffer): string[] {
    const answers: string[] = [];
    const answerCount = response.readUInt16BE(6);
    let offset = 12;

    while (response[offset] !== 0) offset++;
    offset += 5;

    for (let i = 0; i < answerCount; i++) {
      offset += 10;
      const dataLength = response.readUInt16BE(offset);
      offset += 2;

      if (dataLength === 4) {
        const ip = [
          response[offset],
          response[offset + 1],
          response[offset + 2],
          response[offset + 3],
        ].join('.');
        answers.push(ip);
      }
      offset += dataLength;
    }

    return answers;
  }
}
