import "./global.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html suppressHydrationWarning>
    <head>
      <script
        async
        crossOrigin="anonymous"
        src="https://kit.fontawesome.com/9287326ea5.js"
      />
      <link href="/favicon.ico" rel="icon" sizes="any" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
