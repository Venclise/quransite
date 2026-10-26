import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.sarooshislamicinstitute.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",          // Disallow backend API endpoints
          "/admin/",        // Disallow admin dashboard routes (if applicable)
          "/sign-in/",      // Disallow Clerk authentication pages
          "/sign-up/",      // Disallow Clerk sign-up routes
          "/user/",         // Disallow internal user portal routes
          "/*?*",           // Disallow URL search params/query strings to prevent duplicate indexing
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}