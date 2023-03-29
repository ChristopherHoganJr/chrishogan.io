import "./globals.css";

export const metadata = {
  title: "chrishogan.io",
  description: "portfolio of chris hogan",
};

// components
import Header from "./components/header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative h-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
