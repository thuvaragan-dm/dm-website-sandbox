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
  ],
};

export type TechnologyConfigType = {
  heading: string;
  subHeading: string;
};
