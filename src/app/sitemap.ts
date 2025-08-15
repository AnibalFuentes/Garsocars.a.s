import { env } from "@/lib/env";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: env.APP_URL!,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${env.APP_URL!}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${env.APP_URL!}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
