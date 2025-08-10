import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import Header from "@/components/header/Header";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



export const metadata: Metadata = {
  title: "Tom Engélibert",
  description: "Portfolio de Tom Engélibert, développeur web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased relative`}>
      <Header/>
        {children}

      </body>
    </html>
  );
}
