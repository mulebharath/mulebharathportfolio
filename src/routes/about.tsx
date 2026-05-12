import { createFileRoute } from "@tanstack/react-router";
import aboutArt from "@/assets/about-art.webp";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHero } from "@/components/SectionHero";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mule Bharath" },
      {
        name: "description",
        content:
          "Designer, developer, and creative director focused on digital experiences, storytelling, and visual design.",
      },
      { property: "og:title", content: "About — Mule Bharath" },
      {
        property: "og:description",
        content:
          "Designer and developer building modern digital experiences with storytelling and visual direction.",
      },
    ],
  }),
  component: AboutPage,
});

const story = [
  "I design and build modern digital experiences with a strong focus on clarity, usability, and visual impact. With over three years of experience in graphic design, I've worked across branding, publications, and digital media — creating designs that are both engaging and purposeful.",

  "Alongside design, I develop applications and interfaces that are structured, efficient, and built to perform reliably. I'm particularly interested in crafting experiences where design and development work seamlessly together.",

  "I also explore storytelling through writing and comics, which shapes my creative thinking and helps me approach projects with a strong sense of narrative, expression, and user engagement.",
];

const facts = [
  "Indian-based Designer & Developer",
  "3+ Years of Graphic Design Experience",
  "Specialized in Branding & Visual Storytelling",
  "Creative Director & Design Lead Background",
];

const experiences = [
  {
    title: "Creative Director & Design Lead",
    company: "Compendium Club",
    period: "Sept 2022 – Sept 2025",
    description:
      "I was part of my college club, Compendium, for nearly three years, where I contributed across multiple creative and leadership roles. I initially joined as a designer and later advanced to the position of Design Head, leading a team of 5–10 members to create designs for social media promotions, magazines, newsletters, event branding, and various creative campaigns.",

    extra:
      "In the following year, I was selected as the Creative Director, where I managed and supervised the club’s overall creative direction and visual identity. During this period, I also designed and developed the Compendium website, which became a major milestone project for the club and significantly enhanced its digital presence and engagement.",
  },

  {
    title: "Graphic Design Intern",
    company: "Menteosity",
    period: "6 Months Internship",
    description:
      "I completed a six-month internship at Menteosity as a Graphic Designer, where I gained practical experience in branding, marketing communication, visual identity development, and collaborative creative workflows.",

    extra:
      "The internship helped me strengthen my understanding of professional design processes, teamwork, client-oriented communication, and brand-focused creative strategies.",
  },
];

function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <SectionHero
        eyebrow="About"
        title="Hi, I'm Bharath."
        description=""
        image={aboutArt}
        imageAlt="Line-art self portrait"
      />

      <section className="mx-auto max-w-[1000px] px-8 py-16">
        <div className="space-y-12">
          {/* Quick Facts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {facts.map((f: string, i: number) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-[var(--ink)]/5 border border-[var(--ink)]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                <span className="text-sm font-medium text-[var(--ink)]/80">{f}</span>
              </div>
            ))}
          </div>

          {/* Story Section */}
          <div className="space-y-8">
            {story.map((p, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-[var(--ink)]/80"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Experience Section */}
          <div className="border-t border-[var(--ink)]/15 pt-12">
            <p className="mb-10 text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">
              Experience
            </p>

            <div className="space-y-16">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="group relative"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <div>
                      <h3 className="text-2xl font-black tracking-tight">{exp.title}</h3>
                      <p className="mt-1 text-base font-bold text-[var(--brand)]">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-[var(--ink)]/50">
                      {exp.period}
                    </p>
                  </div>

                  <p className="mt-6 text-base leading-relaxed text-[var(--ink)]/80">
                    {exp.description}
                  </p>

                  <p className="mt-4 text-base leading-relaxed text-[var(--ink)]/70">
                    {exp.extra}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}