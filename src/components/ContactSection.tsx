import { Reveal } from "./PortfolioHero";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  const socials = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:mulebharath9@gmail.com",
      label: "Email",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/m-bharath-059693319/",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/mulebharath",
      label: "GitHub",
    },
  ];

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 bg-[#0A0A0A] text-white overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-12 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[2px] w-8 bg-[var(--brand)]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[var(--brand)]">
              Get in Touch
            </p>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[1.1] tracking-tight">
            Let's create <br />
            something <span className="text-[var(--brand)]">extraordinary</span>
          </h2>
          <p className="mt-8 mx-auto max-w-xl text-base sm:text-lg text-white/40 leading-relaxed font-medium">
            Have a project in mind? Let's talk about how we can work together 
            to bring your vision to life.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-12">
            <a
              href="https://wa.me/917780391081"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-10 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-[var(--brand-deep)] shadow-[0_10px_30px_rgba(235,94,40,0.3)]"
            >
              Say Hello <span className="ml-1" aria-hidden>→</span>
            </a>
          </div>
        </Reveal>

        <div className="mt-16 flex items-center justify-center gap-4">
          {socials.map((social, i) => (
            <Reveal key={social.label} delay={i * 100 + 500}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 transition-all hover:bg-white hover:text-black hover:border-white"
              >
                {social.icon}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(235,94,40,0.05),transparent_70%)] pointer-events-none" />
    </section>
  );
}
