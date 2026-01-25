import { defineCollection, z } from "astro:content";

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["forthcoming", "in-preparation", "published"]).optional(),
    venue: z.string().optional(),
    year: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url()
        })
      )
      .optional()
  })
});

const talks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    event: z.string().optional(),
    status: z.enum(["forthcoming", "delivered"]).optional(),
    year: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url()
        })
      )
      .optional()
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    focus: z.string().optional(),
    status: z.enum(["ongoing", "completed", "archived"]).optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url()
        })
      )
      .optional()
  })
});

export const collections = { publications, talks, projects };
