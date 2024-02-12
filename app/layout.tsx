import "@fontsource/roboto/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/300.css";
import "../css/global.css";
import Script from "next/script";

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
        <Script
          src="https://kit.fontawesome.com/d0e0071c1c.js"
          crossOrigin="anonymous"
        ></Script>
        <title>BeTheLi9ht Foundation</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
