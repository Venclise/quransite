import type { Metadata } from "next";
import Card from "@/components/Card";

export const dynamic = "force-dynamic";

type CourseItem = {
  _id: number;
  title: string;
  slug: string;
  price?: number;
  time?: number;
  description: string;
  image: string[];
  createdAt?: string;
  type?: "course" | "blog";
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.sarooshislamicinstitute.com";


export const metadata: Metadata = {
  title: "Online Quran Courses & Programs | Live 1-on-1 Classes",
  description:
    "Explore interactive online Quran, Tajweed, Hifz, and Arabic language courses for kids and adults. Certified 1-on-1 tutors with flexible scheduling across UK, US, and UAE.",
  keywords: [
    "Online Quran Courses",
    "Tajweed Course Online",
    "Quran Memorization Hifz",
    "Noorani Qaida Online",
    "Arabic Language Classes",
    "Online Quran Academy Courses",
  ],
  alternates: {
    canonical: `${siteUrl}/course`,
  },
  openGraph: {
    title: "Online Quran Courses & Programs | Saroosh Islamic Institute",
    description:
      "Structured 1-on-1 online Quran education covering Tajweed, Hifz, Noorani Qaida, and Arabic for students in the UK, US, and UAE.",
    url: `${siteUrl}/course`,
    siteName: "Saroosh Islamic Institute",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-courses.png`,
        width: 1200,
        height: 630,
        alt: "Saroosh Islamic Institute Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran & Tajweed Courses | Saroosh Islamic Institute",
    description:
      "Join personalized 1-on-1 online Quran classes tailored for kids and adults.",
    images: [`${siteUrl}/og-courses.png`],
  },
};

export default async function Page() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/course`, {
    cache: "no-store",
  });
  const courses: CourseItem[] = await res.json();

  const courseListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Online Quran Courses",
    description:
      "List of online Quranic and Islamic education courses offered by Saroosh Islamic Institute.",
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.description,
        provider: {
          "@type": "EducationalOrganization",
          name: "Saroosh Islamic Institute",
          sameAs: siteUrl,
        },
        url: `${siteUrl}/course/${course.slug}`,
        image: course.image?.[0] || `${siteUrl}/favicon-bg.png`,
        ...(course.price && {
          offers: {
            "@type": "Offer",
            price: course.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    })),
  };

  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseListSchema),
        }}
      />

      <div className="w-full h-max lg:p-20 p-5">
        <header className="lg:p-10 md:p-5 p-2 w-full flex lg:items-center lg:flex-row flex-col justify-between">
          <h1 className="font-semibold lg:text-6xl text-3xl">Courses.</h1>
          <p className="text-sm lg:text-2xl font-normal max-w-xs text-muted-foreground">
            Online Quran Courses for Kids & Adults
          </p>
        </header>

        <section
          aria-label="Available Courses"
          className="w-full grid md:grid-cols-2 mt-5 md:gap-4"
        >
          {courses.map((item: CourseItem) => (
            <Card key={item._id} data={item} />
          ))}
        </section>
      </div>
    </>
  );
}