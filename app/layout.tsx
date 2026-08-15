import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrialModal from "@/components/TrialModal";
import BookingModal from "@/components/BookingModal";
import PhilosophyModal from "@/components/PhilosophyModal";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EVOLUTION | Boutique Performance & Conscious Fitness Club",
  description: "Less chaos, more control. EVOLUTION is a boutique fitness and restoration sanctuary offering strength, yoga, combat sports, and recovery engineering.",
  keywords: "gym, luxury fitness, strength training, yoga, boxing, recovery spa, performance club",
  openGraph: {
    title: "EVOLUTION | Conscious Lifestyle & High Performance",
    description: "Premium space for your lifestyle. High-intensity strength, restorative yoga, thermal SPA, and 1-on-1 personal coaching.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-[#F8F9FF] text-[#171C22] min-h-screen flex flex-col noise-bg selection:bg-[#475470] selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <TrialModal />
        <BookingModal />
        <PhilosophyModal />
      </body>
    </html>
  );
}
