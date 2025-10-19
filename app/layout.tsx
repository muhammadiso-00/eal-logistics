import { Geologica } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/molecules/Navbar";
import FooterComponent from "@/components/molecules/Footer";

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
          <div className="max-w-[1170px] mx-auto "><NavbarComponent/></div>
        </div>
        {children}
         <div className="bg-black">
          <div className="max-w-[1170px] mx-auto "><FooterComponent/></div>
        </div>
      </body>
    </html>
  );
}
