type Props = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export function SectionHero({ eyebrow, title, description, image, imageAlt }: Props) {
  return (
    <section className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-8 pt-32 pb-12">
      <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--brand)] animate-[hero-in_0.8s_cubic-bezier(0.22,1,0.36,1)_both]">
          {eyebrow}
        </p>
        <h1
          className="mt-4 text-5xl md:text-7xl font-black leading-[0.95] tracking-tight animate-[hero-in_0.9s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]"
        >
          {title}
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--ink)]/75 animate-[hero-in_1s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
          {description}
        </p>
      </div>
      <div className="col-span-12 md:col-span-7 flex items-center justify-center">
        <img
          src={image}
          alt={imageAlt}
          width={1920}
          height={1088}
          loading="lazy"
          className="w-full h-auto object-contain"
          style={{ animation: "hero-in 1.1s cubic-bezier(0.22,1,0.36,1) both, hero-float 6s ease-in-out 1.1s infinite" }}
        />
      </div>
    </section>
  );
}
