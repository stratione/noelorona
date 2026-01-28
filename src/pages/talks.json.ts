import type { APIRoute } from "astro";
import { talks } from "../data/talks";
import { SITE } from "../consts";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL(SITE.siteUrl);

  const body = {
    name: SITE.title,
    description: SITE.description,
    url: baseUrl.href,
    updated_at: new Date().toISOString(),
    talks
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Content-Type": "application/json"
    }
  });
};
