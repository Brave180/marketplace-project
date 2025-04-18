import Head from 'next/head';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Hyperlocal Marketplace</title>
        <meta name="description" content="Connecting you with Black-owned businesses near you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="bg-white text-gray-900 font-sans">{children}</body>
    </html>
  );
}
