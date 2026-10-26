import type { Metadata } from "next";
import Hero from "./Hero";
import Stats from "@/sections/Stats";
import Services from "@/sections/Services";
import Course from "@/sections/Course";
import How from "@/sections/How";
import Blogs from "@/sections/Blogs";
import Free from "@/sections/Free";
import FAQ from "@/sections/FAQ";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.sarooshislamicinstitute.com";

// 1. Static Geo-Targeted Metadata for the United States
export const metadata: Metadata = {
  title: "Online Quran Classes in USA | 1-on-1 Tajweed Tutors",
  description:
    "Learn Quran online in the USA with certified 1-on-1 Tajweed & Hifz tutors. Flexible schedules across EST, CST, and PST for kids and adults in Texas, New York, California, and nationwide.",
  keywords: [
    "Online Quran Classes USA",
    "Learn Quran Online America",
    "Quran Tutors Texas",
    "Online Tajweed Classes New York",
    "Hifz Program Online USA",
    "Noorani Qaida Tutors California",
    "Islamic Studies for Kids USA",
  ],
  alternates: {
    canonical: `${siteUrl}/us`,
    languages: {
      "en-US": `${siteUrl}/us`,
      "en-GB": `${siteUrl}/uk`,
      "en-AE": `${siteUrl}/uae`,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    title: "Online Quran Classes in USA | Saroosh Islamic Institute",
    description:
      "Interactive 1-on-1 online Quran & Tajweed classes for American-Muslim families. Native certified tutors with flexible EST, CST, and PST timings.",
    url: `${siteUrl}/us`,
    siteName: "Saroosh Islamic Institute",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Saroosh Islamic Institute USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Academy USA | Saroosh Islamic Institute",
    description:
      "Certified male & female Quran tutors for kids and adults across the US.",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function Page() {
  // 2. Structured JSON-LD Data for US Region
  const usSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Saroosh Islamic Institute - USA",
    url: `${siteUrl}/us`,
    logo: `${siteUrl}/favicon-bg.png`,
    description:
      "Online Quran academy providing certified Tajweed, Hifz, and Islamic Studies to Muslim families across the United States.",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    knowsLanguage: ["English", "Arabic", "Urdu"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "US Online Quran Courses",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "1-on-1 Online Tajweed & Quran Recitation (USA)",
          },
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online Hifz / Memorization Program for US Students",
          },
          priceCurrency: "USD",
        },
      ],
    },
  };

  return (
    <>
      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(usSchema),
        }}
      />

      <main className="w-full">
        <Hero />
        <Stats />
        <Services />
        <Course />
        <How />
        <Blogs />
        <Free />
        <FAQ onCourse={false} />
      </main>
    </>
  );
}