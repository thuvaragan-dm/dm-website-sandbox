export default {
  name: "nav-config",
  title: "Navigation Config",
  type: "document",

  fields: [
    {
      title: "Links",
      name: "links",
      type: "array",
      of: [
        {
          type: "object",
          title: "link",
          fields: [
            { title: "Name", name: "name", type: "string" },
            { title: "Href", name: "href", type: "string" },
          ],
        },
      ],
    },
  ],
};

export type NavConfigType = {
  links: {
    name: string;
    href: string;
  }[];
};
