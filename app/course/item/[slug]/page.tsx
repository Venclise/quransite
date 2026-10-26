import type { Metadata } from "next";
import SingleCourse from "@/components/course/SingleCourse";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.sarooshislamicinstitute.com";

// 1. Dynamic SEO Metadata Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/course/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      title: "Course Not Found | Saroosh Islamic Institute",
    };
  }

  const course = await res.json();
  const cleanDescription = (course.description || "")
    .replace(/<[^>]*>?/gm, "")
    .slice(0, 160);
  const courseImage = course.image?.[0] || `${siteUrl}/og-image.png`;

  return {
    title: `${course.title} | Online Quran Classes`,
    description: cleanDescription,
    keywords: [
      course.title,
      "Online Quran Course",
      "Learn Quran Online",
      "Tajweed Tutors",
      "1-on-1 Quran Classes",
      "Saroosh Islamic Institute",
    ],
    alternates: {
      canonical: `${siteUrl}/course/${slug}`,
    },
    openGraph: {
      title: `${course.title} | Saroosh Islamic Institute`,
      description: cleanDescription,
      url: `${siteUrl}/course/${slug}`,
      siteName: "Saroosh Islamic Institute",
      type: "website",
      images: [
        {
          url: courseImage,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | Saroosh Islamic Institute`,
      description: cleanDescription,
      images: [courseImage],
    },
  };
}

// 2. Page Component with Original Logic & Schema
export default async function Page({ params }: Props) {
  const { slug } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/course/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: data.title,
    description: (data.description || "").replace(/<[^>]*>?/gm, ""),
    provider: {
      "@type": "EducationalOrganization",
      name: "Saroosh Islamic Institute",
      sameAs: siteUrl,
      url: siteUrl,
    },
    url: `${siteUrl}/course/${slug}`,
    image: data.image?.[0] || `${siteUrl}/favicon-bg.png`,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: data.time ? `PT${data.time}M` : "PT30M",
      instructor: {
        "@type": "Person",
        name: data.instructor || "Certified Quran Tutor",
      },
    },
    ...(data.price && {
      offers: {
        "@type": "Offer",
        price: data.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/course/${slug}`,
      },
    }),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />
      <SingleCourse product={data} />
    </div>
  );
}