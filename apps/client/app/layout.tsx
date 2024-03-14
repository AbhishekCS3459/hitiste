import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import Navbar from "@/components/ui/header/navbar";
import Footer from "@/components/ui/footer/footer";
import FlareCursor from "@/components/flare-cursor";

export const metadata: Metadata = {
  title: "ISTE HIT",
  description: "Student Chapter HIT ISTE",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>
          <div className="overflow-x-hidden overflow-y-hidden">
            {/* <FlareCursor /> */}
            <Navbar />
            <div className=" relative z-0 overflow-x-hidden overflow-y-hidden h-full pattern text-white">
              {children}
            </div>
            <Footer />
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
