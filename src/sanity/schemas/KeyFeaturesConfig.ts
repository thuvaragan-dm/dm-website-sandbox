import { Rule } from "sanity";

export default {
  name: "key-features-config",
  title: "Key Features Config",
  type: "document",

  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Sub Heading",
      name: "subHeading",
      type: "string",
    },
    {
      title: "Features",
      name: "features",
      type: "array",
      of: [
        {
          type: "object",
          title: "feature",
          fields: [
            {
              title: "Icon",
              name: "icon",
              type: "object",
              fields: [
                { title: "Name", name: "name", type: "string" },
                {
                  title: "Logo SVG path",
                  name: "svg",
                  type: "text",
                  description:
                    "Paste the complete SVG code here, excluding <svg> tag.",
                },
                {
                  title: "Viewbox",
                  description: "This is the format <number> <number>",
                  name: "viewbox",
                  type: "string",
                },
              ],
            },
            { title: "Title", name: "title", type: "string" },
            { title: "Description", name: "description", type: "text" },
            {
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: true, // Enable hotspot for better cropping control
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                  description: "Describe the image for accessibility.",
                  validation: (Rule: Rule) =>
                    Rule.required().warning(
                      "Alternative text is recommended for accessibility.",
                    ),
                },
                {
                  name: "caption",
                  type: "string",
                  title: "Caption",
                  description: "Optional caption for the image.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export type KeyFeaturesConfigType = {
  heading: string;
  subHeading: string;
  features: {
    icon: {
      name: string;
      svg: string;
      viewbox: string;
    };
    title: string;
    description: string;
    image: {
      asset: {
        _id: string;
        url: string;
      };
      alt: string;
      caption?: string;
    };
  }[];
};
