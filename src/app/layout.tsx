import './globals.css';

export const runtime = 'edge';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
