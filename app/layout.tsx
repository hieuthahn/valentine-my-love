import type { Metadata } from "next";
import { Comic_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const comic_neue = Comic_Neue({ subsets: ["latin"], weight: ['400', '300', '700'] })

export const metadata: Metadata = {
  title: "Happy Valentine Day",
  description: "Created by hieuthahn",
  icons: '/favicon.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comic_neue.className}>{children}</body>
    </html>
  );
}
