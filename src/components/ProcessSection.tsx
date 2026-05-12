import { Reveal } from "./PortfolioHero";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description: "Dig into the problem, the users and the constraints before writing a line.",
    },
    {
      number: "02",
      title: "Sketch",
      description: "Wireframes, data models and rough flows on paper first.",
    },
    {
      number: "03",
      title: "Build",
      description: "Ship clean React + Node code, containerized and tested.",
    },
    {
      number: "04",
      title: "Refine",
      description: "Measure, polish the details, and document for the next person.",
    },
  ];

  return (
    <section id="process" className="relative w-full py-24 sm:py-32 bg-[#0A0A0A] text-white overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-12">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[2px] w-12 bg-[var(--brand)]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[var(--brand)]">
              How I Work
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mb-24 text-7xl sm:text-8xl md:text-9xl font-black leading-[0.85] tracking-tighter">
            <span className="block text-white">The</span>
            <span className="block text-[var(--brand)]">Process</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100 + 300}>
              <div className={`group relative p-8 ${i !== 0 ? 'lg:border-l border-white/10' : ''} h-full transition-colors hover:bg-white/[0.02]`}>
                <span className="text-5xl font-black text-white/10 group-hover:text-[var(--brand)]/20 transition-colors duration-500">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-white group-hover:text-[var(--brand)] transition-colors">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      
      {/* Subtle background glow */}
      <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-[var(--brand)]/5 blur-[120px] pointer-events-none" />
    </section>
  );
}
