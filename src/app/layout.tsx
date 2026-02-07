import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google"; // 1. USE NEXT FONT
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import SmoothScroll from "@/components/SmoothScroll"; 

// 2. CONFIGURE FONT (Prevents White Flashes)
const roboto = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
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
    <html lang="en" className={`${roboto.variable}`}>
      <head>
        {/* Font Awesome is fine here, but consider using a React library for icons later */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      
      <body className="antialiased bg-[#0E1623] text-white">
        {/* 3. WRAP CONTENT - If SmoothScroll is the issue, try commenting this out temporarily */}
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

