import "./globals.css";
import { Geologica } from "next/font/google";
import NavbarComponent from "@/components/molecules/Navbar";
import FooterComponent from "@/components/molecules/Footer";
import Chat from "@/components/molecules/Chat";

const geologica = Geologica({ subsets: ["latin"] });

export const metadata = {
  title: "EAL Logistics",
  description: "Logistics Management System for EAL",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geologica.className} antialiased`}>
        <div className="bg-black">
          <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8"><NavbarComponent/></div>
        </div>
        {children}
         <div className="bg-black">
          <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8"><FooterComponent/></div>
        </div>
        <Chat/>
      </body>
    </html>
  );
}
