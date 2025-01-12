import { Rule } from "sanity";

export default {
  name: "hero-config",
  title: "Hero Config",
  type: "document",

  fields: [
    {
      title: "Whats new (optional)",
      name: "whatsNew",
      type: "string",
      validation: (rule: Rule) => rule.optional(),
    },
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
      title: "Suggestions",
      name: "suggestions",
      type: "array",
      of: [
        {
          type: "object",
          title: "suggestion",
          fields: [
            { title: "Name", name: "name", type: "string" },
            { title: "Content", name: "content", type: "string" },
          ],
        },
      ],
    },
  ],
};

export type HeroConfigType = {
  whatsNew?: string;
  heading: string;
  subHeading: string;
  suggestions: {
    name: string;
    content: string;
  }[];
};
