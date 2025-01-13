export default {
  name: "why-deepmodel-config",
  title: "Why Deepmodel Config",
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
      title: "Reasons",
      name: "reasons",
      type: "array",
      of: [
        {
          title: "Reason",
          name: "reason",
          type: "object",
          fields: [
            { title: "Title", name: "title", type: "string" },
            { title: "Description", name: "description", type: "string" },
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
                {
                  title: "StrokeWidth",
                  name: "strokeWidth",
                  type: "number",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export type WhyDeepmodelConfig = {
  heading: string;
  subHeading: string;
  reasons: Array<{
    title: string;
    description: string;
    icon: {
      name: string;
      svg: string;
      viewbox: string;
      strokeWidth: number;
    };
  }>;
};
