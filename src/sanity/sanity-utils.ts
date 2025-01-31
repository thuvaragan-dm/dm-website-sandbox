import { createClient, groq } from "next-sanity";
import { FooterConfig } from "./schemas/FooterConfigSchema";
import { HeroConfigType } from "./schemas/HeroConfigSchema";
import { KeyFeaturesConfigType } from "./schemas/KeyFeaturesConfig";
import { NavConfigType } from "./schemas/NavConfigSchema";
import { TechnologyConfigType } from "./schemas/TechnologyConfigSchema";
import { WhyDeepmodelConfig } from "./schemas/WhyDeepmodelSchema";

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

export async function getKeyFeaturesConfig() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  });

  return await client.fetch<KeyFeaturesConfigType>(
    groq`*[_type == "key-features-config"][0]{
      heading,
      subHeading,
      features[]{
        icon {
          name,
          svg,
          viewbox
        },
        title,
        description,
        image {
          asset->{_id, url},
          alt,
          caption
        }
      }
    }`,
  );
}

export async function getTechnologyConfig() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  });

  return await client.fetch<TechnologyConfigType>(
    groq`*[_type == "technology-config"][0]{
      heading,
      subHeading,
      technologies{
        slotOne {
          title,
          icon {
            name,
            svg,
            viewbox,
            strokeWidth
          }
        },
        slotTwo {
          title,
          icon {
            name,
            svg,
            viewbox,
            strokeWidth
          }
        },
        slotThree {
          title,
          icon {
            name,
            svg,
            viewbox,
            strokeWidth
          }
        }
      }
    }`,
  );
}

export async function getWhyDeepmodelConfig() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  });

  return await client.fetch<WhyDeepmodelConfig>(
    groq`*[_type == "why-deepmodel-config"][0]{
      heading,
      subHeading,
      reasons[]{
        title,
        description,
        icon{
          name,
          svg,
          viewbox,
          strokeWidth
        }
      }
    }`,
  );
}

export async function getFooterConfig() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  });

  return await client.fetch<FooterConfig>(
    groq`*[_type == "footer-config"][0]{
      heading,
      subHeading
    }`,
  );
}
