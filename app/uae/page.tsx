import type { Metadata } from "next";
import React from "react";
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


export const metadata: Metadata = {
  title: "Online Quran Academy UAE | 1-on-1 Tajweed Tutors Dubai & Abu Dhabi",
  description:
    "Learn Quran online in the UAE with certified 1-on-1 Tajweed & Hifz tutors. Convenient Gulf Standard Time (GST) slots for kids and adults across Dubai, Abu Dhabi, Sharjah, and the Emirates.",
  keywords: [
    "Online Quran Academy UAE",
    "Learn Quran Online Dubai",
    "Quran Tutors Abu Dhabi",
    "Tajweed Classes Sharjah",
    "Hifz Program Online UAE",
    "Noorani Qaida Tutors UAE",
    "Islamic Education for Kids Dubai",
  ],
  alternates: {
    canonical: `${siteUrl}/uae`,
    languages: {
      "en-AE": `${siteUrl}/uae`,
      "en-GB": `${siteUrl}/uk`,
      "en-US": `${siteUrl}/us`,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    title: "Online Quran Academy UAE | Saroosh Islamic Institute",
    description:
      "Interactive 1-on-1 online Quran & Tajweed classes tailored for UAE families. Native certified tutors with flexible GST time slots and transparent monthly plans in AED.",
    url: `${siteUrl}/uae`,
    siteName: "Saroosh Islamic Institute",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Saroosh Islamic Institute UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Academy UAE | Saroosh Islamic Institute",
    description:
      "Certified male & female Quran tutors for kids and adults in Dubai, Abu Dhabi, and across the UAE.",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function Page() {
  // 2. Structured JSON-LD Data for UAE Region
  const uaeSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Saroosh Islamic Institute - UAE",
    url: `${siteUrl}/uae`,
    logo: `${siteUrl}/favicon-bg.png`,
    description:
      "Online Quran academy providing certified Tajweed, Hifz, and Islamic Studies to families and professionals across the United Arab Emirates.",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    knowsLanguage: ["English", "Arabic", "Urdu"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "UAE Online Quran Courses",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "1-on-1 Online Tajweed & Quran Recitation (UAE)",
          },
          priceCurrency: "AED",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online Hifz / Memorization Program for UAE Students",
          },
          priceCurrency: "AED",
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
          __html: JSON.stringify(uaeSchema),
        }}
      />

      <div>
        <Hero />
        <Stats />
        <Services />
        <Course />
        <How />
        <Blogs />
        <Free />
        <FAQ onCourse={false} />
      </div>
    </>
  );
}