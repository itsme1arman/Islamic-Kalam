import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Islamic Kalam | Naat, Salam, Manqabat & Hamd",
  description:
    "Read Islamic Kalam in Roman Urdu, Urdu and Hindi, including Naat, Salam, Manqabat, Hamd and Islamic biographies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}

        <footer>
          <p>Islamic Kalam</p>
          <p>Naat • Salam • Manqabat • Hamd</p>
        </footer>
      </body>
    </html>
  );
}
