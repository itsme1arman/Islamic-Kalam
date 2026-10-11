import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Islamic Kalam",
  description:
    "Naat, Manqabat, Hamd aur Islamic biographies."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer className="footer">
          Islamic Kalam · Adab, Ishq aur Roohaniyat
        </footer>
      </body>
    </html>
  );
}
