import { createFileRoute } from "@tanstack/react-router";
import skillsArt from "@/assets/skills-art.webp";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHero } from "@/components/SectionHero";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Mule Bharath" },
      { name: "description", content: "Java, Python, React, Node.js, Spring Boot, MongoDB, Docker, Kubernetes, AWS." },
      { property: "og:title", content: "Skills — Mule Bharath" },
      { property: "og:description", content: "Full-stack developer toolkit — frontend, backend, cloud and design." },
    ],
  }),
  component: SkillsPage,
});

const skills = [
  { n: "01", t: "Graphic Design", d: "3+ years of experience creating visual content across branding, publications, and digital platforms. Focused on clarity, consistency, and impactful communication." },
  { n: "02", t: "Interface Engineering", d: "Crafting responsive and intuitive user interfaces that prioritize clarity and usability. I focus on translating ideas into smooth, accessible experiences that feel natural across devices." },
  { n: "03", t: "UI/UX Design", d: "Designing intuitive user experiences with a focus on usability, layout, and interaction. Continuously refining my approach to create smoother and more user-friendly interfaces." },
  { n: "04", t: "Comics & Visual Storytelling", d: "Creating short comics and visual narratives that explore storytelling, expression, and creative communication — bringing a narrative-driven perspective into my design work." },
];

const tools = [
  // Design Tools
  { category: "Design", name: "Figma" },
  { category: "Design", name: "After Effects" },
  { category: "Design", name: "Adobe XD" },
  { category: "Design", name: "Illustrator" },
  // Frontend Development
  { category: "Frontend", name: "React" },
  { category: "Frontend", name: "TypeScript" },
  { category: "Frontend", name: "Next.js" },
  { category: "Frontend", name: "Tailwind CSS" },
  { category: "Frontend", name: "Framer" },
  // Backend Development
  { category: "Backend", name: "Node.js" },
  { category: "Backend", name: "Express" },
  { category: "Backend", name: "Python" },
  { category: "Backend", name: "MongoDB" },
  { category: "Backend", name: "PostgreSQL" },
  // Other Tools
  { category: "Other", name: "Vite" },
  { category: "Other", name: "Three.js" },
  { category: "Other", name: "GSAP" },
  { category: "Other", name: "Git" },
];

function SkillsPage() {
  return (
    <main className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
      <SiteHeader />
      <SectionHero
        eyebrow="Skills"
        title="One mind. Multiple disciplines."
        description="I work across development, design, and systems — building products that are not only functional, but thoughtfully crafted and built to scale. Each discipline strengthens the other, allowing me to approach problems with both technical precision and creative clarity."
        image={skillsArt}
        imageAlt="Line-art figure juggling creative tools"
      />
      <section className="mx-auto max-w-[1400px] px-8 pb-24">
        <div className="grid grid-cols-1 border-t border-[var(--ink)]/15 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <article
              key={s.n}
              className="group relative border-b border-r border-[var(--ink)]/15 p-8 transition-colors hover:bg-[var(--brand)]/5"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--brand)]">{s.n}</p>
              <h3 className="mt-3 text-2xl font-bold">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/70">{s.d}</p>
              <span className="absolute bottom-6 right-6 text-[var(--brand)] opacity-0 transition group-hover:opacity-100">→</span>
            </article>
          ))}
        </div>
      </section>

      {/* Tools & Tech Section */}
      <section className="mx-auto max-w-[1400px] px-8 py-24 border-t border-[var(--ink)]/15">
        <div className="mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">Toolbox</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Tools & tech.</h2>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool.name}
              className="rounded-full border border-[var(--ink)]/20 bg-[var(--ink)]/[0.02] px-6 py-3 text-sm font-medium text-[var(--ink)]/80 transition-all hover:border-[var(--brand)] hover:bg-[var(--brand)]/5 hover:text-[var(--brand)]"
            >
              {tool.name}
            </span>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
