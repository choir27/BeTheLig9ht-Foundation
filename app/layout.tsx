export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Oswald:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>BeTheLi9ht Foundation</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
