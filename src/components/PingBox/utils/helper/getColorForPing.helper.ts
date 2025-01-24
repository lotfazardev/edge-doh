export default function getColorForPing(ping: number): string {
  const normalizedPing = Math.min(Math.max((ping - 1) / (500 - 1), 0), 1);
  const red = Math.round(255 * normalizedPing);
  const green = Math.round(255 * (1 - normalizedPing));
  const toHex = (value: number) => value.toString(16).padStart(2, '0');
  return `#${toHex(red)}${toHex(green)}${toHex(0)}`;
}
