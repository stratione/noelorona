export type TalkItem = {
  type: "podcast" | "video";
  title: string;
  url: string;
  embedId: string;
  description: string;
};

export const talks: TalkItem[] = [
  {
    type: "podcast",
    title: "Building Trust and Security in the DoD: A DevSecOps Perspective (Podcast)",
    url: "https://open.spotify.com/episode/268KjisObaCX4WdDUmDbWG?si=aa37280d651741bc",
    embedId: "268KjisObaCX4WdDUmDbWG",
    description: "Defense University podcast episode."
  },
  {
    title:
      "Automating Container Image Promotion Across Environments From Source to Prod - Army Software Factory",
    url: "https://youtu.be/V9zfFRtkFGw?si=mD6cV-g6EE03YH8T",
    embedId: "V9zfFRtkFGw",
    type: "video",
    description:
      "Lightning talk from Chainguard's In Containers We Trust series on promoting container images from source to production."
  },
  {
    title: "My Transition from Platform Engineer to Platform Product Manager - Noe Lorona",
    url: "https://youtu.be/EWN7pw6JqKE?si=ufD2yHPg7rtQxtFB",
    embedId: "EWN7pw6JqKE",
    type: "video",
    description:
      "DevOpsDays 2025 talk on the transition from platform engineering to platform product management and the shift from execution to strategy."
  }
];
