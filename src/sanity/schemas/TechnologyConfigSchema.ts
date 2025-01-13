export default {
  name: "technology-config",
  title: "Technology Config",
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
      title: "Technologies",
      name: "technologies",
      type: "object",
      fields: [
        {
          title: "Slot One",
          name: "slotOne",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
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
        {
          title: "Slot Two",
          name: "slotTwo",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
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
        {
          title: "Slot Three",
          name: "slotThree",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
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

export type IconType = {
  name: string;
  svg: string;
  viewbox: string;
  strokeWidth: number;
};

export type SlotType = {
  title: string;
  icon: IconType;
};

export type TechnologiesType = {
  slotOne: SlotType;
  slotTwo: SlotType;
  slotThree: SlotType;
};

export type TechnologyConfigType = {
  heading: string;
  subHeading: string;
  technologies: TechnologiesType;
};
