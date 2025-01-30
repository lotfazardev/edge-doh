# Edge DoH

Edge DoH is a **DNS over HTTPS (DoH) forwarder** built with **Next.js**, designed to be deployed on **edge functions**. It supports platforms like **Vercel, Netlify**, and any other provider that supports edge functions.

## Features

- Lightweight and fast DoH forwarder.
- Deployable on multiple edge platforms.
- Customizable DoH origins.

## Default DoH Origins

Edge DoH resolves queries using the following default providers:

```typescript
export const dohOrigins: string[] = [
  'dns.google',
  'cloudflare-dns.com',
  'dns.quad9.net',
  'dns.adguard.com',
  'doh.opendns.com',
];
```

Users can customize these settings in `src/setting.ts`.

## Deployment

You can deploy Edge DoH to any edge function provider. Here are some common platforms:

### Deploy on Vercel

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Deploy using Vercel:
   ```sh
   vercel --prod
   ```

### Deploy on Netlify

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Deploy using Netlify CLI:
   ```sh
   netlify deploy --prod
   ```

## Setup on Chrome

To use Edge DoH with **Google Chrome**, follow these steps:

1. Open **Chrome Settings**.
2. Navigate to **Privacy and security > Security**.
3. Scroll down to the **Use secure DNS** section.
4. Enable the toggle for **Use secure DNS**.
5. Select **Custom** and enter the Edge DoH URL.
6. Save the settings and restart Chrome if necessary.

## More Docs

More documentation coming soon! 🚀

## Support

If you like this project, give it a ⭐ on GitHub!

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request to improve Edge DoH.
