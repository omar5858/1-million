import "./globals.css";

export const metadata = {
  title: "1 MILLION",
  description:
    "1 MILLION is a modern gaming platform combining entertainment, challenge, and excitement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
