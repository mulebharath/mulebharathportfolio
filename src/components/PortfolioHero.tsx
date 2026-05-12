import players from "@/assets/players.webp";
import aboutArt from "@/assets/about-art.webp";
import skillsArt from "@/assets/skills-art.webp";
import workArt from "@/assets/work-art.webp";
import contactArt from "@/assets/contact-art.webp";
import { WORK_GROUPS, type WorkItem } from "@/lib/work-data";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ProcessSection } from "./ProcessSection";
import { ContactSection } from "./ContactSection";
import { TypingText } from "./TypingText";

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
      style={{ animationDelay: shown ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}

function DecoratedArt({ src, alt }: { src: string; alt: string }) {
  return (
    <img src={src} alt={alt} loading="lazy" className="mx-auto w-full max-w-[520px] h-auto object-contain" />
  );
}

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

const SKILLS = [
  { n: "01", t: "Graphic Design", d: "3+ years of experience creating visual content across branding, publications, and digital platforms. Focused on clarity, consistency, and impactful communication." },
  { n: "02", t: "Interface Engineering", d: "Crafting responsive and intuitive user interfaces that prioritize clarity and usability. I focus on translating ideas into smooth, accessible experiences that feel natural across devices." },
  { n: "03", t: "UI/UX Design", d: "Designing intuitive user experiences with a focus on usability, layout, and interaction. Continuously refining my approach to create smoother and more user-friendly interfaces." },
  { n: "04", t: "Comics & Visual Storytelling", d: "Creating short comics and visual narratives that explore storytelling, expression, and creative communication — bringing a narrative-driven perspective into my design work." },
];

function SkillsSection() {
  return (
    <>
      <section id="skills" className="relative w-full scroll-mt-24">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-12 gap-6 sm:gap-8 px-4 sm:px-8 pt-24 sm:pt-32 pb-8 sm:pb-12">
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
            <Reveal><p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">Skills</p></Reveal>
            <Reveal delay={120}><h2 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">One mind. Multiple disciplines.</h2></Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--ink)]/75">I work across development, design, and systems — building products that are not only functional, but thoughtfully crafted and built to scale.</p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-7 flex items-center justify-center">
            <Reveal delay={150} className="w-full"><DecoratedArt src={skillsArt} alt="Line-art figure juggling creative tools" /></Reveal>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1400px] px-4 sm:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 border-t border-[var(--ink)]/15 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <article className="group relative h-full border-b border-r border-[var(--ink)]/15 p-6 sm:p-8 transition-colors hover:bg-[var(--brand)]/5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--brand)]">{s.n}</p>
                <h3 className="mt-3 text-xl sm:text-2xl font-bold">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/70">{s.d}</p>
                <span className="absolute bottom-6 right-6 text-[var(--brand)] opacity-0 transition group-hover:opacity-100">→</span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function WorkCard({ item, delay }: { item: WorkItem; delay: number }) {
  const isOrange = item.tone === "orange";
  const isBlack = item.tone === "black";
  const bg = isOrange ? "var(--brand)" : isBlack ? "var(--ink)" : "var(--background)";
  const fg = isOrange || isBlack ? "#fff" : "var(--ink)";
  const meta = isOrange || isBlack ? "rgba(255,255,255,0.7)" : "color-mix(in oklab, var(--ink) 60%, transparent)";
  const border = isBlack ? "rgba(255,255,255,0.12)" : "var(--ink)";
  return (
    <Reveal delay={delay}>
      <Link to="/work/$slug" params={{ slug: item.slug }} className="block">
        <article className="group relative aspect-[3/4] overflow-hidden rounded-md border transition-transform duration-300 hover:-translate-y-1" style={{ background: bg, color: fg, borderColor: `color-mix(in oklab, ${border} 15%, transparent)` }}>
          <img src={item.img} alt={item.t} loading="lazy" className="absolute inset-0 w-full h-full object-contain p-4 sm:p-8 transition-all duration-500 group-hover:scale-110" style={{ opacity: isOrange || isBlack ? 0.2 : 0.15, filter: isOrange || isBlack ? "brightness(2) saturate(0)" : "saturate(0.3)" }} />
          <div className="absolute inset-0 flex flex-col p-3 sm:p-6">
            <p className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.25em]" style={{ color: meta }}>{item.n}</p>
            <div className="mt-auto">
              <h3 className="text-sm sm:text-2xl font-black leading-tight">{item.t}</h3>
              <p className="mt-0.5 sm:mt-1 text-[9px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] line-clamp-2" style={{ color: meta }}>{item.s}</p>
            </div>
          </div>
        </article>
      </Link>
    </Reveal>
  );
}

function WorkSection() {
  return (
    <>
      <section id="work" className="relative w-full scroll-mt-24">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-12 gap-6 sm:gap-8 px-4 sm:px-8 pt-24 sm:pt-32 pb-8 sm:pb-12">
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
            <Reveal><p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">Work</p></Reveal>
            <Reveal delay={120}><h2 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">A gallery of recent things.</h2></Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--ink)]/75">Selected projects across digital, design, and storytelling — from microservices and dashboards to publications and short comics.</p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-7 flex items-center justify-center">
            <Reveal delay={150} className="w-full"><DecoratedArt src={workArt} alt="Line-art figure presenting frames" /></Reveal>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1400px] px-4 sm:px-8 pb-16 sm:pb-24 space-y-12 sm:space-y-16">
        {WORK_GROUPS.map((group) => (
          <div key={group.g}>
            <Reveal>
              <div className="mb-6 flex items-end justify-between border-b border-[var(--ink)]/15 pb-3">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">{group.g}</h3>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink)]/50">{group.items.length} {group.items.length === 1 ? "piece" : "pieces"}</span>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((w, i) => <WorkCard key={w.t} item={w} delay={i * 90} />)}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

function ServicesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const services = [
    { topColor: "var(--brand)", bottomBg: "#FFF1ED", topText: "WEB", midText: "WEB DESIGNER", botText: "WIR → PRO" },
    { topColor: "#E0B354", bottomBg: "#FFF9EA", topText: "DEV", midText: "WEB DEVELOPER", botText: "FRO → BCK" },
    { topColor: "var(--brand)", bottomBg: "#FFF1ED", topText: "BRN", midText: "BRAND DESIGN", botText: "B2B → B2C" },
    { topColor: "#E0B354", bottomBg: "#FFF9EA", topText: "GFX", midText: "GRAPHIC DESIGN", botText: "VEC → RAST" },
    { topColor: "var(--brand)", bottomBg: "#FFF1ED", topText: "ART", midText: "ILLUSTRATION", botText: "SKT → INK" },
    { topColor: "#E0B354", bottomBg: "#FFF9EA", topText: "DIR", midText: "CREATIVE DIRECTION", botText: "VIS → EXE" },
  ];

  return (
    <section id="services" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--ink)] text-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 mb-16">
        <Reveal><p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">Services</p></Reveal>
        <Reveal delay={120}><h2 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">What I can <em className="text-[var(--brand)]">do</em> for you.</h2></Reveal>
      </div>
      <div className="relative w-full mt-10">
        <div className="absolute top-[32px] left-0 right-0 h-[2px] bg-black/50 z-0" />
        <div ref={trackRef} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} className={`flex gap-6 sm:gap-10 px-[10vw] relative z-10 overflow-x-auto pb-16 pt-12 ${isDragging ? 'cursor-grabbing' : 'cursor-grab snap-x'} [&::-webkit-scrollbar]:hidden items-start select-none`}>
          {services.map((theme, i) => (
            <Reveal key={i} delay={i * 120} className="flex-shrink-0">
              <div className="w-[280px] h-[340px] sm:w-[440px] sm:h-[480px] bg-transparent snap-center relative transition-transform flex flex-col rounded-[16px] border-2 border-black overflow-hidden shadow-2xl hover:-translate-y-1">
                <div className="h-[45%] bg-[#0A0A0A] relative flex items-center justify-center border-b border-dashed border-white/10" style={{ borderTop: `6px solid ${theme.topColor}` }}>
                  <h2 className="text-[80px] sm:text-[130px] font-black tracking-tighter" style={{ color: theme.topColor }}>{theme.topText}</h2>
                </div>
                <div className="h-[55%] flex flex-col p-6 justify-between" style={{ backgroundColor: theme.bottomBg }}>
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-black/50">SERVICE</p>
                    <h3 className="text-2xl sm:text-4xl font-black text-[#111]">{theme.midText}</h3>
                  </div>
                  <div className="text-center opacity-80"><span className="text-4xl sm:text-6xl font-light text-[#111]">{theme.botText}</span></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const TESTIMONIALS = [
    { 
      quote: "Creative, dedicated, and highly professional. Mulebharath delivers visually impressive and impactful work.", 
      name: "Founder of Chillzee", 
      role: "Chillzee", 
      initials: "C" 
    },
    { 
      quote: "Mulebharath combines creativity with strong execution and always brings fresh ideas to projects.", 
      name: "HR & Founder", 
      role: "MentorCity", 
      initials: "M" 
    },
    { 
      quote: "A passionate creator with excellent storytelling and design skills. His work stands out with originality and quality.", 
      name: "President of Compendium", 
      role: "Compendium", 
      initials: "P" 
    },
    { 
      quote: "He understands visual aesthetics really well and delivered a banner that felt unique and artistic.", 
      name: "Pencil Art Creator", 
      role: "Pencil Art", 
      initials: "A" 
    },
  ];
  return (
    <section id="testimonials" className="relative w-full scroll-mt-24 py-24" style={{ background: "color-mix(in oklab, var(--brand) 4%, var(--background))" }}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <Reveal><p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">Kind Words</p></Reveal>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 150}>
              <article className="rounded-xl border border-[var(--ink)]/10 bg-background p-8 relative overflow-hidden" style={{ borderLeft: "4px solid var(--brand)" }}>
                <TypingText text={t.quote} delay={i * 150 + 500} speed={25} />
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[var(--brand)] grid place-items-center text-white font-bold">{t.initials}</div>
                  <div><p className="text-sm font-bold">{t.name}</p><p className="text-xs text-[var(--ink)]/60">{t.role}</p></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioHero() {
  return (
    <main className="relative w-full overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <section id="home" className="flex min-h-screen items-center justify-center px-4 scroll-mt-24">
        <img src={players} alt="Hero" className="w-full h-auto max-h-screen object-contain" />
      </section>

      <section id="about" className="relative w-full scroll-mt-24 py-24">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-12 gap-8 px-4 sm:px-8">
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
            <Reveal><p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">About</p></Reveal>
            <Reveal delay={120}><h2 className="mt-4 text-5xl md:text-6xl font-black leading-tight">Hi, I'm Bharath.</h2></Reveal>
            <Reveal delay={240}>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-[var(--ink)]/80">
                <p>I design and build modern digital experiences with a strong focus on clarity, usability, and visual impact. With over three years of experience in graphic design, I've worked across branding, publications, and digital media — creating designs that are both engaging and purposeful.</p>
                <p>Alongside design, I develop applications and interfaces that are structured, efficient, and built to perform reliably. I'm particularly interested in crafting experiences where design and development work seamlessly together.</p>
                <p>I also explore storytelling through writing and comics, which shapes my creative thinking and helps me approach projects with a strong sense of narrative, expression, and user engagement.</p>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-7 flex items-center justify-center">
            <Reveal delay={150} className="w-full"><DecoratedArt src={aboutArt} alt="About" /></Reveal>
          </div>
        </div>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 mt-24">
          <div className="border-t border-[var(--ink)]/15 pt-16">
            <Reveal><p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--brand)] mb-12">Experience</p></Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {experiences.map((exp, i) => (
                <div key={i} className="group">
                  <h3 className="text-3xl font-black tracking-tight">{exp.title}</h3>
                  <p className="text-lg font-bold text-[var(--brand)] mt-2">{exp.company}</p>
                  <p className="text-xs text-[var(--ink)]/50 uppercase tracking-widest">{exp.period}</p>
                  <p className="mt-8 text-base leading-relaxed text-[var(--ink)]/80">{exp.description}</p>
                  <p className="mt-4 text-base leading-relaxed text-[var(--ink)]/60 italic">{exp.extra}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SkillsSection />
      <ProcessSection />
      <WorkSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
