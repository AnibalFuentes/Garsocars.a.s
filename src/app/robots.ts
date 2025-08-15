import type { MetadataRoute } from "next";
import { env } from "process";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${env.urlPagina}/sitemap.xml`,
  };
}
