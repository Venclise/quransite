import type { Metadata } from "next";
import { Inter } from "next/font/google";
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


const siteUrl = "https://www.sarooshislamicinstitute.com/"; 

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saroosh Islamic Institute | Online Quran & Tajweed Academy",
    template: "%s | Saroosh Islamic Institute",
  },
  description:
    "Learn Quran online with certified Tajweed tutors across the UK, US, and UAE. One-on-one live classes for kids and adults, Hifz, Islamic Studies, and Arabic.",
  keywords: [
    "Online Quran Classes UK",
    "Online Quran Tutors USA",
    "Quran Academy UAE Dubai",
    "Tajweed Classes Online",
    "Hifz Program for Kids",
    "Online Quran Academy",
    "Learn Quran with Tajweed",
    "Female Quran Tutors",
  ],
  authors: [{ name: "Saroosh Islamic Institute" }],
  creator: "Saroosh Islamic Institute",
  publisher: "Saroosh Islamic Institute",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon-bg.png",
    shortcut: "/favicon-bg.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/uk",
      "en-US": "/us",
      "en-AE": "/uae",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Saroosh Islamic Institute | Online Quran & Tajweed Academy",
    description:
      "Join 1-on-1 online Quran classes tailored for students in the UK, US, and UAE. Flexible timing, native Arabic & English certified tutors.",
    url: siteUrl,
    siteName: "Saroosh Islamic Institute",
    images: [
      {
        url: "/og-image.png", // Ensure you add a high-res graphic in public folder (1200x630)
        width: 1200,
        height: 630,
        alt: "Saroosh Islamic Institute - Online Quran Classes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saroosh Islamic Institute | Online Quran Tutors",
    description:
      "Live 1-on-1 Quran, Tajweed, and Hifz classes tailored for students in the UK, US, and UAE.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Saroosh Islamic Institute",
    url: siteUrl,
    logo: `${siteUrl}/favicon-bg.png`,
    description:
      "Online Quran academy providing certified Tajweed, Hifz, and Islamic Studies courses to students in the UK, US, and UAE.",
    areaServed: [
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
    ],
    knowsLanguage: ["English", "Arabic", "Urdu"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Quran & Islamic Courses",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online Quran Recitation & Tajweed",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online Hifz / Quran Memorization Program",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Islamic Studies & Arabic Language for Kids",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <main className="flex-1 flex flex-col">
          <Header />
          <ChatBtn />
          <ClerkProvider>{children}</ClerkProvider>
          <Footer />
          <Toaster />
        </main>
      </body>
    </html>
  );
}