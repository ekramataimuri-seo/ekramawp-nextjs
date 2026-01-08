import { draftMode } from "next/headers";
import { Inter } from "next/font/google";

import "@/app/globals.css";

// CHANGE 1: Import the new Navbar we just created
import Navbar from "@/components/Navbar"; 
import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en">
      {/* CHANGE 2: Add the <head> section with FontAwesome for the icons */}
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>

      <body className={inter.className}>
        {isEnabled && <PreviewNotice />}
        
        {/* CHANGE 3: Swap <Navigation /> with your new <Navbar /> */}
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}
