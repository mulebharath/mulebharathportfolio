import { createFileRoute } from "@tanstack/react-router";
import contactArt from "@/assets/contact-art.webp";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHero } from "@/components/SectionHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mule Bharath" },
      { name: "description", content: "Get in touch with Mule Bharath — open to internships, full-time roles and collaborations." },
      { property: "og:title", content: "Contact — Mule Bharath" },
      { property: "og:description", content: "mulebharath9@gmail.com · +91 77803 91081" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
      <SiteHeader />
      <SectionHero
        eyebrow="Contact"
        title="Say hello."
        description="Open to opportunities in design, development, and creative technology. Interested in building meaningful digital products and visual experiences."
        image={contactArt}
        imageAlt="Line-art figure writing a letter"
      />
      <section className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-8 pb-24">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="col-span-12 md:col-span-7 border-t border-[var(--ink)]/15 pt-10 grid grid-cols-2 gap-6"
        >
          <label className="col-span-1 flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink)]/60">Name</span>
            <input className="border-b border-[var(--ink)]/30 bg-transparent py-2 outline-none focus:border-[var(--brand)]" />
          </label>
          <label className="col-span-1 flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink)]/60">Email</span>
            <input type="email" className="border-b border-[var(--ink)]/30 bg-transparent py-2 outline-none focus:border-[var(--brand)]" />
          </label>
          <label className="col-span-2 flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink)]/60">Message</span>
            <textarea rows={5} className="border-b border-[var(--ink)]/30 bg-transparent py-2 outline-none focus:border-[var(--brand)] resize-none" />
          </label>
          <button
            type="submit"
            className="col-span-2 mt-4 inline-flex items-center justify-center gap-2 self-start rounded-full bg-[var(--brand)] px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[var(--brand-deep)]"
          >
            Send message →
          </button>
        </form>
        <aside className="col-span-12 md:col-span-5 border-t border-[var(--ink)]/15 pt-10 space-y-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink)]/60">Email</p>
            <a href="mailto:mulebharath9@gmail.com" className="mt-2 block text-lg font-semibold hover:text-[var(--brand)]">mulebharath9@gmail.com</a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink)]/60">Phone</p>
            <a href="tel:+917780391081" className="mt-2 block text-lg font-semibold hover:text-[var(--brand)]">+91 77803 91081</a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink)]/60">Based in</p>
            <p className="mt-2 text-lg font-semibold">Hyderabad, India</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink)]/60">Elsewhere</p>
            <ul className="mt-2 space-y-1 text-lg font-semibold">
              <li><a href="https://github.com/mulebharath" target="_blank" rel="noreferrer" className="hover:text-[var(--brand)]">GitHub ↗</a></li>
              <li><a href="https://linkedin.com/in/m-bharath-059693319/" target="_blank" rel="noreferrer" className="hover:text-[var(--brand)]">LinkedIn ↗</a></li>
            </ul>
          </div>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
