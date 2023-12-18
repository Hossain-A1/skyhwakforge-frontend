import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Navber";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/provider/ReduxProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] ,weight:["100",'200','300','400','500','600','700','800','900']});

export const metadata: Metadata = {
  title: "SkyHawkForce | Home",
  description: "SkyHawkForce a E-commerce Drone store.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, "bg-dark text-light")}>
        <ReduxProvider>
          <Toaster />
          <Navber />
          {children}
          <Footer/>
        </ReduxProvider>
      </body>
    </html>
  );
}
