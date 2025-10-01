import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1rem",
            borderBottom: "1px solid #ccc",
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/blog2">Blog2</Link>
          <a href="/contact">Contact</a>
        </nav>
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}
