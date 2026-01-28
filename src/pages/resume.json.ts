import type { APIRoute } from "astro";
import { profile } from "../data/profile";
import { SITE } from "../consts";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL(SITE.siteUrl);

  const body = {
    name: profile.name,
    title: profile.title,
    summary: profile.summary,
    about: profile.about,
    education: profile.education,
    certifications: profile.certifications,
    expertise: profile.expertise,
    teaching: profile.teaching,
    publications: profile.publications,
    service: profile.service,
    credibility: profile.credibility,
    url: baseUrl.href,
    updated_at: new Date().toISOString()
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Content-Type": "application/json"
    }
  });
};
