export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>===Root Layout===</header>
        {children}
        <footer>===Root Layout===</footer>
      </body>
    </html>
  );
}
