import type { MetadataRoute } from "next";

const CITY_SLUGS = [
  "renta-contenedores-monterrey",
  "renta-contenedores-queretaro",
  "renta-contenedores-guadalajara",
  "renta-contenedores-san-luis-potosi",
  "renta-contenedores-altamira",
  "renta-contenedores-merida",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://vancontenedores.com/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...CITY_SLUGS.map((slug) => ({
      url: `https://vancontenedores.com/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
