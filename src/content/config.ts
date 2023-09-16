import { defineCollection, z } from "astro:content";

const boardCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      position: z.string(),
      cover: image(),
      coverAlt: z.string(),
      email: z.string(),
    }),
});

export const collections = {
  about: boardCollection,
};
