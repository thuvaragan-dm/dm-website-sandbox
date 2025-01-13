export default {
  name: "footer-config",
  title: "Footer Config",
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

export type FooterConfig = {
  heading: string;
  subHeading: string;
};
