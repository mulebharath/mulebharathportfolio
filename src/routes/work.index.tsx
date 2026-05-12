import { createFileRoute, Link } from "@tanstack/react-router";
import workArt from "@/assets/work-art.webp";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHero } from "@/components/SectionHero";
import { WORK_GROUPS } from "@/lib/work-data";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Mule Bharath" },
      { name: "description", content: "Selected projects and internships across full-stack web, microservices and data." },
      { property: "og:title", content: "Work — Mule Bharath" },
      { property: "og:description", content: "Microservices, real-time chat, ration management and more." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <main className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
      <SiteHeader />
      <SectionHero
        eyebrow="Work"
        title="A gallery of recent things."
        description="Selected projects from internships, coursework and the design team — full-stack web, microservices and data."
        image={workArt}
        imageAlt="Line-art figure presenting a wall of frames"
      />
      <section className="mx-auto w-full max-w-[1400px] px-2 sm:px-8 pb-24 space-y-16">
        {WORK_GROUPS.map((group) => (
          <div key={group.g}>
            <div className="mb-6 flex items-end justify-between border-b border-[var(--ink)]/15 pb-3">
              <h2 className="text-xl font-bold tracking-tight">{group.g}</h2>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink)]/50">
                {group.items.length} {group.items.length === 1 ? "piece" : "pieces"}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {group.items.map((p, i) => (
                <Link to="/work/$slug" params={{ slug: p.slug }} key={p.slug} className="block group">
                  <article
                    className="relative aspect-[3/4] sm:aspect-[3/4] overflow-hidden border border-[var(--ink)]/20 rounded-md"
                  >
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{
                        background:
                          p.tone === "orange" ? "var(--brand)" : p.tone === "white" ? "white" : "var(--ink)",
                      }}
                    >
                      {p.img && (
                        <img
                          src={p.img}
                          alt={p.t}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-contain p-4 sm:p-8"
                          style={{
                            opacity: p.tone === "white" ? 0.15 : 0.2,
                            filter: p.tone === "white" ? "saturate(0.3)" : "brightness(2) saturate(0)",
                          }}
                        />
                      )}
                    </div>
                    <div
                      className="relative z-10 flex h-full flex-col justify-between p-3 sm:p-6"
                      style={{ color: p.tone === "white" ? "var(--ink)" : "white" }}
                    >
                      <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] opacity-80">
                        {p.n}
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-2xl font-bold leading-tight">{p.t}</h3>
                        <p className="mt-0.5 sm:mt-1 text-[9px] sm:text-sm opacity-80 line-clamp-2">{p.tech.slice(0, 3).join(" · ")}</p>
                        <p className="mt-1 sm:mt-3 text-[8px] sm:text-xs leading-relaxed opacity-70 line-clamp-2 sm:line-clamp-none">{p.s}</p>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
