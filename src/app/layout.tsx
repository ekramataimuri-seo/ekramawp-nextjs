import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 1. USE INTER FONT
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import SmoothScroll from "@/components/SmoothScroll"; 

// 2. CONFIGURE INTER FONT (Prevents White Flashes)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ekrama Front-End Development",
  description: "Web Pixels That Drive Revenue",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Font Awesome is fine here, but consider using a React library for icons later */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      
      {/* 3. APPLY INTER CLASSNAME TO BODY */}
      <body className={`antialiased text-white ${inter.className}`}>
        {/* WRAP CONTENT */}
        <SmoothScroll>
          <Navbar />
          <main>
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}