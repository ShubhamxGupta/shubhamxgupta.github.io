import { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { writings } from "@/data/writings";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shubhamxgupta.github.io";

  // Static routes
  const routes = ["", "/case-studies", "/writing", "/now"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic Case Studies
  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic Writings
  const writingRoutes = writings.map((post) => ({
    url: `${baseUrl}/writing/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...caseStudyRoutes, ...writingRoutes];
}
