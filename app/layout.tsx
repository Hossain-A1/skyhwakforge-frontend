import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Navber";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/provider/ReduxProvider";
import Footer from "@/components/Footer";

const baiJamjuree = Bai_Jamjuree ({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});
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
      <body className={cn(baiJamjuree.className, "bg-dark text-light")}>
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
