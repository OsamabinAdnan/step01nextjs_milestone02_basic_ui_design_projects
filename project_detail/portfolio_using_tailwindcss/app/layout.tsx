import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { inter } from "./ui/font";
import { montserrat } from "./ui/font";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Portfolio | OsamabinAdnan",
  description: "OsamabinAdnan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${montserrat.className} antialiased `}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
