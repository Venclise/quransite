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

// 1. Static Geo-Targeted Metadata for the United Kingdom
export const metadata: Metadata = {
  title: "Online Quran Academy UK | 1-on-1 Tajweed Tutors in Britain",
  description:
    "Learn Quran online in the UK with certified 1-on-1 Tajweed & Hifz tutors. Flexible schedules around GMT/BST school hours for kids and adults across London, Manchester, Birmingham, and nationwide.",
  keywords: [
    "Online Quran Academy UK",
    "Learn Quran Online Britain",
    "Quran Tutors London",
    "Tajweed Classes Manchester",
    "Hifz Program Online UK",
    "Noorani Qaida Tutors Birmingham",
    "Islamic Studies for Kids UK",
  ],
  alternates: {
    canonical: `${siteUrl}/uk`,
    languages: {
      "en-GB": `${siteUrl}/uk`,
      "en-US": `${siteUrl}/us`,
      "en-AE": `${siteUrl}/uae`,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    title: "Online Quran Academy UK | Saroosh Islamic Institute",
    description:
      "Interactive 1-on-1 online Quran & Tajweed classes for British-Muslim families. Native certified tutors with flexible GMT/BST timings and monthly plans in GBP (£).",
    url: `${siteUrl}/uk`,
    siteName: "Saroosh Islamic Institute",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Saroosh Islamic Institute UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Academy UK | Saroosh Islamic Institute",
    description:
      "Certified male & female Quran tutors for kids and adults across the UK.",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function Page() {
  // 2. Structured JSON-LD Data for UK Region
  const ukSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Saroosh Islamic Institute - UK",
    url: `${siteUrl}/uk`,
    logo: `${siteUrl}/favicon-bg.png`,
    description:
      "Online Quran academy providing certified Tajweed, Hifz, and Islamic Studies to Muslim families across the United Kingdom.",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    knowsLanguage: ["English", "Arabic", "Urdu"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "UK Online Quran Courses",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "1-on-1 Online Tajweed & Quran Recitation (UK)",
          },
          priceCurrency: "GBP",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online Hifz / Memorization Program for UK Students",
          },
          priceCurrency: "GBP",
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
          __html: JSON.stringify(ukSchema),
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