import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import ChatBtn from "@/components/ui/ChatBtn";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata = {
  title: "Saroosh Islamic Institute | Online Quran & Tajweed Academy",
  description: "Learn Quran online with expert male and female tutors. Offering personalized Tajweed, Hifz, and Arabic classes for kids and adults worldwide.",
  icons: {
    icon: "/favicon.ico",      
  },
  keywords: "Online Quran Academy, Learn Quran Online, Tajweed Classes, Hifz Program, Quran Tutors, Saroosh Islamic Institute",
  authors: [{ name: "Saroosh Islamic Institute" }],
  openGraph: {
    title: "Saroosh Islamic Institute | Online Quran & Tajweed Academy",
    description: "Connect with certified Quran tutors for flexible, one-on-one online classes. Start your free trial today!",
    url: 'https://www.sarooshislamicinstitute.com', 
    siteName: 'Saroosh Islamic Institute',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saroosh Islamic Institute Online Quran Classes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Saroosh Islamic Institute | Online Quran Academy",
    description: "Expert online Quran and Tajweed classes for the whole family. Flexible timings and certified teachers.",
    images: ['/images/og-image.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}  h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
        <main>
          <Header />
           <ChatBtn />
             <ClerkProvider>
        {children}
             </ClerkProvider>
        <Footer />
              <Toaster />
        </main>
        </body>
    </html>
  );
}
