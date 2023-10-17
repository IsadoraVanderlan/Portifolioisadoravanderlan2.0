import './globals.css';

export const metadata = {
  title: 'Portifolio Isadora Vanderlan 2.0',
  description: 'Portifolio de apresentação',
};

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

        <link rel="icon" href="./img/favicon.ico" type="image/x-icon"></link>

        <link
          rel="stylesheet"
          href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
