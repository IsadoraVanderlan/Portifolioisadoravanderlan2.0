'use client'
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="./app/favicon.ico" type="image/x-icon"></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
