import type { Metadata } from "next";
import React from "react";
import ContactForm from "./ContactForm";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.sarooshislamicinstitute.com";


export const metadata: Metadata = {
  title: "Contact Us & Book Free Trial | Saroosh Islamic Institute",
  description:
    "Get in touch with Saroosh Islamic Institute. Book a free trial Quran class or inquire about our online Tajweed, Hifz, and Arabic programs for UK, US, and UAE students.",
  keywords: [
    "Contact Saroosh Islamic Institute",
    "Book Free Quran Trial Class",
    "Online Quran Academy Contact",
    "Quran Tutor Inquiry",
    "Learn Quran UK US UAE",
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us & Book Free Trial | Saroosh Islamic Institute",
    description:
      "Have questions about our online Quran classes? Contact our team to schedule a free trial class or get help choosing the right course for your family.",
    url: `${siteUrl}/contact`,
    siteName: "Saroosh Islamic Institute",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Contact Saroosh Islamic Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Saroosh Islamic Institute | Free Trial Class",
    description:
      "Get in touch with us to start your online Quran learning journey.",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function Page() {

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Saroosh Islamic Institute",
    url: `${siteUrl}/contact`,
    description:
      "Contact page for booking free trial online Quran classes and course inquiries.",
    mainEntity: {
      "@type": "EducationalOrganization",
      name: "Saroosh Islamic Institute",
      url: siteUrl,
      logo: `${siteUrl}/favicon-bg.png`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["English", "Arabic", "Urdu"],
          areaServed: ["GB", "US", "AE"],
        },
      ],
    },
  };

  return (
    <>
   
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

      <main className="w-full min-h-screen">
        <h1 className="sr-only">Contact Saroosh Islamic Institute</h1>
        <ContactForm />
      </main>
    </>
  );
}