import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import Navbar from "../../src/components/layout/Navbar"
const inter = Inter({ subsets: ["latin"] });
import { ibmPlexSans } from "../components/font"
import Footer from "../components/layout/Footer"
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" >
      <body className={`${ibmPlexSans.className} font-semibold`} >
      <Navbar/>
         {children}
       <Footer/>
      </body>
    </html>
  );
}
