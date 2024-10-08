import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./context/CartContext";


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
        {children}
      </body>
    </html>
    </CartProvider>
  );
}
