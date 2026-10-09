// Personal content used by the homepage and About page sections.
// Edit the copy here – the components only handle layout.

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "I start by understanding your goals, your users and the constraints, through conversations, research and a quick audit of what already exists.",
    icon: "solar:magnifer-linear",
    deliverables: ["Project brief", "User research", "Audit"],
  },
  {
    title: "Design",
    description:
      "Ideas become wireframes, then interactive prototypes and a polished UI, tested early so we fix problems while they’re still cheap.",
    icon: "solar:pen-new-square-linear",
    deliverables: ["Wireframes", "Prototype", "UI kit"],
  },
  {
    title: "Build",
    description:
      "I turn the design into fast, accessible and responsive code with a clean component structure that’s easy to grow.",
    icon: "solar:code-linear",
    deliverables: ["Front-end", "CMS / API", "QA"],
  },
  {
    title: "Launch & refine",
    description:
      "After a careful launch I keep an eye on real usage and feedback, and keep refining what matters most to your users.",
    icon: "solar:rocket-2-linear",
    deliverables: ["Deployment", "Analytics", "Iteration"],
  },
];

export interface Tool {
  name: string;
  icon: string;
}

export interface ToolGroup {
  title: string;
  description: string;
  tools: Tool[];
}

export const toolGroups: ToolGroup[] = [
  {
    title: "Design",
    description: "Research, wireframes, prototypes and polished interfaces.",
    tools: [
      { name: "Figma", icon: "simple-icons:figma" },
      { name: "Framer", icon: "simple-icons:framer" },
      { name: "Illustrator", icon: "simple-icons:adobeillustrator" },
      { name: "Photoshop", icon: "simple-icons:adobephotoshop" },
      { name: "Miro", icon: "simple-icons:miro" },
    ],
  },
  {
    title: "Front-end",
    description: "Responsive, accessible and fast interfaces in modern frameworks.",
    tools: [
      { name: "Vue.js", icon: "simple-icons:vuedotjs" },
      { name: "Nuxt", icon: "simple-icons:nuxt" },
      { name: "React", icon: "simple-icons:react" },
      { name: "Next.js", icon: "simple-icons:nextdotjs" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
      { name: "Sass", icon: "simple-icons:sass" },
      { name: "Vuetify", icon: "simple-icons:vuetify" },
    ],
  },
  {
    title: "Back-end & workflow",
    description: "APIs, data and the tooling that gets products shipped.",
    tools: [
      { name: "Node.js", icon: "simple-icons:nodedotjs" },
      { name: "Firebase", icon: "simple-icons:firebase" },
      { name: "MongoDB", icon: "simple-icons:mongodb" },
      { name: "Git", icon: "simple-icons:git" },
      { name: "GitHub", icon: "simple-icons:github" },
      { name: "Vercel", icon: "simple-icons:vercel" },
      { name: "Notion", icon: "simple-icons:notion" },
    ],
  },
];

// Placeholder career history – replace with your real roles, companies and dates.
export interface JourneyItem {
  period: string;
  role: string;
  place: string;
  description: string;
  tags: string[];
  current?: boolean;
}

export const journey: JourneyItem[] = [
  {
    period: "2024 — Present",
    role: "Product Designer & Developer",
    place: "Freelance",
    description:
      "Partnering with startups and small businesses to design and build web products end to end, from first research call to launch.",
    tags: ["Product design", "Nuxt", "Design systems"],
    current: true,
  },
  {
    period: "2022 — 2024",
    role: "UI/UX Designer & Front-end Developer",
    place: "Digital agency",
    description:
      "Led interface design for client websites and dashboards, and built them with Vue and React alongside a small engineering team.",
    tags: ["UI design", "Vue.js", "React"],
  },
  {
    period: "2020 — 2022",
    role: "Front-end Developer",
    place: "Software studio",
    description:
      "Turned designs into responsive, accessible front-ends and grew a shared component library used across projects.",
    tags: ["JavaScript", "Sass", "Accessibility"],
  },
  {
    period: "2019 — 2020",
    role: "Where it started",
    place: "Self-taught",
    description:
      "Fell in love with the web by building small sites for friends, learning HTML, CSS and design fundamentals one project at a time.",
    tags: ["HTML & CSS", "Figma", "Curiosity"],
  },
];

export interface Expertise {
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export const expertise: Expertise[] = [
  {
    title: "Product & UX design",
    description: "Making sure we build the right thing before building it right.",
    icon: "solar:users-group-rounded-linear",
    skills: ["User research", "Information architecture", "User flows", "Usability testing"],
  },
  {
    title: "UI & visual design",
    description: "Interfaces that look sharp and feel effortless to use.",
    icon: "solar:palette-linear",
    skills: ["Design systems", "Responsive layouts", "Micro-interactions", "Prototyping"],
  },
  {
    title: "Front-end development",
    description: "Pixel-accurate builds that stay fast and maintainable.",
    icon: "solar:code-square-linear",
    skills: ["Vue & Nuxt", "React & Next.js", "TypeScript", "Web performance"],
  },
  {
    title: "Collaboration",
    description: "Clear communication from kickoff to handoff.",
    icon: "solar:chat-round-dots-linear",
    skills: ["Workshops", "Developer handoff", "Agile delivery", "Documentation"],
  },
];

export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: "People first",
    description: "Every decision starts with the person on the other side of the screen and what they’re trying to get done.",
  },
  {
    title: "Clarity over cleverness",
    description: "Simple, obvious interfaces beat clever ones. If it needs explaining, it needs another pass.",
  },
  {
    title: "Ship, learn, refine",
    description: "Real feedback beats long debates. I ship in small steps and improve with every round.",
  },
  {
    title: "Details matter",
    description: "Spacing, states, loading and edge cases are what make a product feel finished and trustworthy.",
  },
];
