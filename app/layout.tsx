import "./globals.css";

export const metadata = {
  title: "chrishogan.io",
  description: "portfolio of chris hogan",
};

// components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-[var(--color-black)]'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
