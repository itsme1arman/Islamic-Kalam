import type { Metadata } from "next";
import "./globals.css";
import "./home.css";
import "../components/css/header.css";
import "../components/css/footer.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Islamic Kalam | Naat, Manqabat & Islamic Biography",
  description:
    "Explore Naat Sharif, Manqabat and Islamic biographies in Roman Urdu, Urdu and Hindi on Islamic Kalam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
