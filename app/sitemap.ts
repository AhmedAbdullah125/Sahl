import { getData } from "@/modules/home/api";
import { Data } from "@/modules/home/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = (await getData()) as Data;
  console.log(data);
  return [
    {
      url: "https://sahl-sale-next.vercel.app/",
      lastModified: new Date(),
    },
    ...data.categories.map((category) => ({
      url: `https://sahl-sale-next.vercel.app/${category.id}/${category.title}`,
      lastModified: new Date(),
    })),
  ];
}
