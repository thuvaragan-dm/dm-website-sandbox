import { createClient, groq } from "next-sanity";
import { HeroConfigType } from "./schemas/HeroConfigSchema";
import { NavConfigType } from "./schemas/NavConfigSchema";

export async function getHeroConfig() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  });

  return await client.fetch<HeroConfigType>(
    groq`*[_type == "hero-config"][0]{
      whatsNew,
      heading,
      subHeading,
      "suggestions": suggestions[] {
          name,
          content
        },
      "trustedBy": trustedBy[] {
          name,
          svg,
          viewbox
        }
    }`,
  );
}

export async function getNavConfig() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  });

  return await client.fetch<NavConfigType>(
    groq`*[_type == "nav-config"][0]{
      "links": links[] {
          name,
          href
        }
    }`,
  );
}
