export const dynamic = "force-static";

export async function GET() {
  const projects = [
    {
      name: "AuraFlow",
      description: "The vibe is the force, Influencers are the Jedi, the brand the creed. Captures the influencer portion of the coalition - the eye.",
      techStack: ["React", "Next.js", "Supabase"],
      githubLink: "https://github.com/example/aura-flow",
      image: "/images/aura-flow.jpg",
    },
    {
      name: "GalateaAI",
      description: "Agentic girlfriends and companions. Captures the relationship part - the heart.",
      techStack: ["Python", "TensorFlow", "Flask"],
      githubLink: "https://github.com/example/galatea-ai",
      image: "/images/galatea-ai.jpg",
    },
    {
      name: "Syntaxual",
      description: "The ultimate coding strategist/agent. Captures the coding part - the sword.",
      techStack: ["TypeScript", "Node.js", "GraphQL"],
      githubLink: "https://github.com/example/syntaxual",
      image: "/images/syntaxual.jpg",
    },
    {
      name: "Magic.Quill",
      description: "The ultimate learning agent. Captures the learning part - the pen.",
      techStack: ["JavaScript", "Vue.js", "Firebase"],
      githubLink: "https://github.com/example/magic-quill",
      image: "/images/magic-quill.jpg",
    },
  ];

  return new Response(JSON.stringify(projects), {
    headers: { "Content-Type": "application/json" },
  });
}
