import type { Metadata } from "next";
import { CartProvider } from "../../context/CartContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


export const metadata: Metadata = {
  title: "Golf Store",
  description: "Store page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
    </CartProvider>
  );
}
