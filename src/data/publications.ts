export type Publication = {
  title: string;
  category: string;
  summary: string;
  link: string;
  externalUrl?: string | null;
  pdfUrl?: string | null;
};

// Add externalUrl for a direct publication page, and pdfUrl for a public PDF under /public/publications.

export const publications: Publication[] = [
  {
    title: 'Strategies Employed by Project Managers when Adopting Agile DevSecOps to Manage Software Development in the DoD',
    category: 'DevSecOps, Platform Engineering, and Defense Software',
    summary:
      'Qualitative dissertation exploring how DoD project managers adopt Agile DevSecOps, based on interviews that surfaced themes in methodology, security, team dynamics, feedback culture, and tradeoffs.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Af07_G0AAAAJ&citation_for_view=Af07_G0AAAAJ:u-x6o8ySG0sC',
    externalUrl: 'https://www.academia.edu/108901123/Strategies_Employed_By_Project_Managers_When_Adopting_Agile_DevSecOps_To_Manage_Software_Development_In_The_DoD',
    pdfUrl: '/publications/Strategies_Employed_By_Project_Managers.pdf'
  },
  {
    title: 'The Ever-Rising Horizon: A Modern Take on the Dunning-Kruger Curve for T-Shaped Engineers',
    category: 'Platform Leadership and Engineering Practice',
    summary:
      'Proposes the Ever-Rising Horizon as an update to the Dunning-Kruger curve, highlighting repeated cycles of humility and growth for T-shaped engineers in fast-changing tech.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Af07_G0AAAAJ&citation_for_view=Af07_G0AAAAJ:W7OEmFMy1HYC',
    externalUrl: 'https://medium.com/brewops/the-ever-rising-horizon-a-modern-take-on-the-dunning-kruger-curve-for-t-shaped-engineers-21f4039878c3',
    pdfUrl: null
  },
  {
    title: 'Lean Platform Engineering',
    category: 'DevSecOps, Platform Engineering, and Defense Software',
    summary:
      'Applies the eight Lean wastes to platform engineering, showing how defects, waiting, overprocessing, and other wastes create friction and how lean practices reduce it.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Af07_G0AAAAJ&citation_for_view=Af07_G0AAAAJ:YsMSGLbcyi4C',
    externalUrl: 'https://medium.com/brewops/lean-platform-engineering-b87a147fc56f',
    pdfUrl: null
  },
  {
    title: 'Tips and Techniques for Accelerating Your Writing',
    category: 'Writing and Scholarly Practice',
    summary:
      'Practical guidance for accelerating writing with targets, structure, and momentum tactics to overcome writers block and improve professional communication.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Af07_G0AAAAJ&citation_for_view=Af07_G0AAAAJ:zYLM7Y9cAGgC',
    externalUrl: 'https://media.defense.gov/2025/Apr/04/2003683084/-1/-1/1/250404-A-IO061-0001.pdf#page=41',
    pdfUrl: '/publications/Tips%20and%20Techniques%20for%20Accelerating%20Your%20Writing.pdf'
  },
  {
    title: 'The Lean Startup Explained',
    category: 'Platform Leadership and Engineering Practice',
    summary:
      'Explains Lean Startup principles like validated learning, MVPs, and the build-measure-learn loop to test assumptions quickly and reduce waste.',
    link: 'https://medium.com/@noelorona/the-lean-startup-explained-c0cbc5b87d71',
    externalUrl: 'https://medium.com/@noelorona/the-lean-startup-explained-c0cbc5b87d71',
    pdfUrl: null
  },
  {
    title: 'Call to Action: There Has To Be a Better Way',
    category: 'Platform Leadership and Engineering Practice',
    summary:
      'Argues that Army leaders can regain time and improve efficiency by automating manual work with existing tools, AI, and Agile practices to boost readiness and reduce risk.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Af07_G0AAAAJ&citation_for_view=Af07_G0AAAAJ:qjMakFHDy7sC',
    externalUrl:
      'https://www.lineofdeparture.army.mil/Journals/Army-Communicator/Archive/Fall-Winter-2024/Call-to-Action-There-Has-To-Be-a-Better-Way/',
    pdfUrl: '/publications/Call%20to%20Action-%20There%20Has%20To%20Be%20a%20Better%20Way.pdf'
  },
  {
    title: 'Agile and Anti-Agile in Signal Operations',
    category: 'DevSecOps, Platform Engineering, and Defense Software',
    summary:
      'Examines Agile principles versus the military need for documentation in signal operations, advocating balance that preserves interoperability while enabling faster delivery.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Af07_G0AAAAJ&citation_for_view=Af07_G0AAAAJ:UeHWp8X0CEIC',
    externalUrl: 'https://media.defense.gov/2024/Jul/26/2003512188/-1/-1/1/240722-A-IO061-0001.PDF',
    pdfUrl: '/publications/Agile%20and%20Anti-Agile%20in%20Signal%20Operations.pdf'
  },
  {
    title: 'Exploring Enabling Technologies in Military Agile Development',
    category: 'DevSecOps, Platform Engineering, and Defense Software',
    summary:
      'Describes how Git, Kubernetes, and CI/CD enable Agile DevSecOps in the DoD by automating delivery and integrating security into iterative development.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Af07_G0AAAAJ&citation_for_view=Af07_G0AAAAJ:2osOgNQ5qMEC',
    externalUrl: 'https://www.afcea.org/signal-media/cyber-edge/exploring-enabling-technologies-military-agile-development',
    pdfUrl: null
  },
  {
    title: 'A Journey in Military Academia: Breaking Down Barriers to Writing',
    category: 'Writing and Scholarly Practice',
    summary:
      'Personal narrative of a Soldier-scholar path that identifies barriers to writing and calls for platforms and support to help service members publish.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Af07_G0AAAAJ&citation_for_view=Af07_G0AAAAJ:9yKSN-GCB0IC',
    externalUrl: 'https://media.defense.gov/2024/Jul/26/2003512188/-1/-1/1/240722-A-IO061-0001.PDF',
    pdfUrl: '/publications/A%20Journey%20in%20Military%20Academia%20Breaking%20Down%20Barriers%20to%20Writing.pdf'
  },
  {
    title: 'The power of FOSS',
    category: 'DevSecOps, Platform Engineering, and Defense Software',
    summary:
      'Shows how Free and Open-Source Software can modernize defense software and enable Soldier-driven innovation through collaborative, adaptable tools.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Af07_G0AAAAJ&citation_for_view=Af07_G0AAAAJ:d1gkVwhDpl0C',
    externalUrl: 'https://asc.army.mil/web/news-the-power-of-foss/',
    pdfUrl: null
  },
];
