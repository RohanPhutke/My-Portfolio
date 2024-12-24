import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import localFont from 'next/font/local';
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const raleway = localFont({
  src: "./fonts/Raleway.woff2",
  variable : "--font-raleway",
  weight : "100 900",
});


export const metadata: Metadata = {
  title: "Rohan Phutke | Software Engineer",
  description: "A portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased text-white/80`}
      >
        <Header />
        <StairTransition/>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
