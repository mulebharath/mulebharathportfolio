import { createFileRoute, Link } from "@tanstack/react-router";
import { getWorkItemBySlug } from "@/lib/work-data";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowLeft, X } from "lucide-react";
import { useState, useRef } from "react";
import React from "react";

export const Route = createFileRoute("/work_/$slug")({
  head: ({ params }) => {
    const item = getWorkItemBySlug(params.slug);
    return {
      meta: [
        { title: item ? `${item.t} — Mule Bharath` : "Project — Mule Bharath" },
        { name: "description", content: item?.description ?? "" },
        { property: "og:title", content: item ? `${item.t} — Mule Bharath` : "Project" },
        { property: "og:description", content: item?.s ?? "" },
      ],
    };
  },
  component: WorkDetailPage,
});

function WallPosterFramesGallery({ 
  images, 
  theme = 'dark',
  frameCount = 30,
  styleType = 'framed'
}: { 
  images: string[], 
  theme?: 'light' | 'dark',
  frameCount?: number,
  styleType?: 'framed' | 'normal'
}) {
  // Pad the array to ensure we always have the requested number of frames
  const frames = [...images, ...Array(Math.max(0, frameCount - images.length)).fill("")];
  const isDark = theme === 'dark';
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className={`w-full py-16 sm:py-24 font-sans ${isDark ? 'bg-[#000]' : 'bg-[var(--background)]'}`}>
        <div className="mx-auto max-w-[1600px] px-2 sm:px-6">
          <div className={`grid ${frameCount === 3 ? 'grid-cols-3 max-w-[900px] mx-auto' : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5'} gap-3 sm:gap-8 md:gap-16`}>
            {frames.map((src, i) => {
              if (styleType === 'normal') {
                return (
                  <div 
                    key={i}
                    onClick={() => src && !src.endsWith('.pdf') && setSelectedImage(src)}
                    className={`relative w-full aspect-[4/5] bg-[var(--ink)]/[0.03] overflow-hidden border border-[var(--ink)]/10 rounded-xl transition-transform duration-500 hover:-translate-y-2 cursor-pointer ${src && !src.endsWith('.pdf') ? 'cursor-zoom-in' : ''}`}
                  >
                    {src ? (
                      src.endsWith('.pdf') ? (
                        <a 
                          href={src}
                          className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-[var(--ink)]/60 hover:bg-[var(--ink)]/[0.03] transition-colors"
                        >
                          <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,19L12,15H9V13H12V15H15V19H10Z" />
                          </svg>
                          <span className="text-sm uppercase tracking-widest font-bold">View PDF</span>
                        </a>
                      ) : (
                        <img 
                          src={src} 
                          alt={`Item ${i + 1}`} 
                          className="absolute inset-0 w-full h-full object-contain bg-white"
                        />
                      )
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-[var(--ink)]/40">
                        <span className="text-4xl mb-2">+</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold">Upload</span>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div 
                  key={i} 
                  onClick={() => src && !src.endsWith('.pdf') && setSelectedImage(src)}
                  className={`relative w-full aspect-[4/5] bg-[#f8f8f8] transition-transform duration-500 hover:scale-[1.02] cursor-pointer ${src && !src.endsWith('.pdf') ? 'cursor-zoom-in' : ''} ${isDark ? 'shadow-[0_20px_50px_rgba(0,0,0,1)]' : 'shadow-[0_20px_50px_rgba(0,0,0,0.15)]'}`}
                  style={{ padding: "4%" }}
                >
                  {/* Wooden/Black Frame Border */}
                  <div className="absolute inset-0 bg-[#1a1a1a] shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] border border-[#000]" />
                  
                  {/* Passe-partout (White Matting) */}
                  <div className="relative w-full h-full bg-[#fdfdfd] shadow-[inset_0_2px_10px_rgba(0,0,0,0.1),_0_0_10px_rgba(0,0,0,0.5)] p-[8%] sm:p-[10%] flex flex-col justify-center items-center">
                    
                    {/* The actual image or placeholder */}
                    <div className="relative w-full h-full bg-[#f0f0f0] shadow-[inset_0_4px_12px_rgba(0,0,0,0.2)] overflow-hidden border border-[#e0e0e0]">
                      {src ? (
                        src.endsWith('.pdf') ? (
                          <a 
                            href={src}
                            className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-[#333] hover:bg-[#f8f8f8] transition-colors"
                          >
                            <svg className="w-8 h-8 mb-2 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,19L12,15H9V13H12V15H15V19H10Z" />
                            </svg>
                            <span className="text-[10px] uppercase tracking-widest font-bold">View PDF</span>
                          </a>
                        ) : (
                          <img 
                            src={src} 
                            alt={`Poster ${i + 1}`} 
                            className="absolute inset-0 w-full h-full object-contain bg-white"
                          />
                        )
                      ) : (
                        <div className="absolute inset-4 border-2 border-dashed border-[#a0a0a0] flex flex-col items-center justify-center p-4 text-center text-[#888]">
                          <React.Fragment>
                            <span className="text-4xl mb-2 opacity-50">+</span>
                            <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Upload</span>
                          </React.Fragment>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

function ClothesHangerGallery({ images }: { images: string[] }) {
  // Fill with empty slots if there are fewer than 10 images
  const slots = [...images, ...Array(Math.max(0, 10 - images.length)).fill("")];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <>
      <div className="relative w-[100vw] ml-[calc(-50vw+50%)] py-16 mb-24 bg-[#EAE4DC]/40 border-y border-[var(--ink)]/5 overflow-hidden">
        {/* The Wooden Rod */}
        <div className="absolute top-[4.5rem] left-0 right-0 h-4 bg-[#C2A37B] shadow-sm z-10 border-y border-[#A8875B]/30" />
        <div className="absolute top-[4.75rem] left-0 right-0 h-[1px] bg-white/20 z-10" />
        
        {/* Gallery Scroll Container */}
        <div className="flex gap-1 sm:gap-3 px-[10vw] mt-8 relative z-0 overflow-x-auto pb-12 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] items-start">
          {slots.map((src, i) => (
            <div key={i} className="relative flex flex-col items-center group shrink-0 snap-center transition-transform duration-500 hover:z-30">
              
              {/* The Wire Hook */}
              <div className="w-8 h-16 relative -mt-6 z-20 pointer-events-none drop-shadow-md">
                <svg viewBox="0 0 48 80" fill="none" stroke="#2a2a2a" strokeWidth="2.5" className="w-full h-full">
                   <path d="M24 0 C32 0, 36 8, 28 16 C20 24, 24 32, 24 40 L24 80" strokeLinecap="round" />
                   <path d="M12 80 L36 80 L24 60 Z" fill="#2a2a2a" />
                </svg>
              </div>
              
              {/* The Card / Shirt */}
              <div 
                className={`w-[180px] h-[250px] sm:w-[260px] sm:h-[360px] -mt-2 bg-[#fdfbf9] shadow-xl p-1.5 transform transition-all duration-300 origin-top ${src ? 'cursor-zoom-in hover:-translate-y-2 hover:rotate-1' : ''}`}
                onClick={() => src && setSelectedImage(src)}
              >
                {src ? (
                  <img src={src} className="w-full h-full object-cover rounded-sm bg-gray-50" alt={`Gallery item ${i + 1}`} />
                ) : (
                  <div className="w-full h-full border border-dashed border-[#C2A37B]/40 rounded-sm flex flex-col items-center justify-center text-[#C2A37B]/60 hover:bg-[#C2A37B]/[0.02] transition-colors">
                    <span className="text-2xl mb-2">+</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Upload</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors bg-black/20 p-2 rounded-full"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X size={28} />
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full object-contain shadow-2xl rounded-sm" 
            onClick={(e) => e.stopPropagation()}
            alt="Full size view" 
          />
        </div>
      )}
    </>
  );
}

function WorkDetailPage() {
  const { slug } = Route.useParams();
  const item = getWorkItemBySlug(slug);

  if (!item) {
    return (
      <main className="relative min-h-screen w-full bg-background text-foreground">
        <SiteHeader />
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-5xl font-black">404</h1>
            <p className="mt-4 text-lg text-[var(--ink)]/60">Project not found.</p>
            <Link
              to="/work"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--brand-deep)]"
            >
              <ArrowLeft size={16} /> Back to Work
            </Link>
          </div>
        </div>
        <SiteFooter />
      </main>
    );
  }

  const isOrange = item.tone === "orange";
  const isBlack = item.tone === "black";
  const heroBg = isOrange
    ? "var(--brand)"
    : isBlack
      ? "var(--ink)"
      : "var(--background)";
  const heroFg = isOrange || isBlack ? "#fff" : "var(--ink)";

  return (
    <main className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
      <SiteHeader />

      {/* Hero Banner */}
      <section
        className="relative w-full overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24"
        style={{ background: heroBg, color: heroFg }}
      >
        {/* Background image */}
        {item.img && (
          <img
            src={item.img}
            alt=""
            className="absolute inset-0 w-full h-full object-contain opacity-10 scale-110 blur-sm"
          />
        )}
        <div className="relative z-10 mx-auto max-w-[1000px] px-4 sm:px-8">
          <Link
            to="/work"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] opacity-70 transition hover:opacity-100"
          >
            <ArrowLeft size={14} /> Back
          </Link>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.3em]"
            style={{
              color: isOrange || isBlack ? "rgba(255,255,255,0.6)" : "var(--brand)",
            }}
          >
            {item.category} · {item.year}
          </p>
          <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight">
            {item.t}
          </h1>
          <p
            className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed"
            style={{ opacity: 0.8 }}
          >
            {item.s}
          </p>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-lg transition hover:-translate-y-0.5"
              style={{
                backgroundColor: isOrange || isBlack ? "#fff" : "var(--brand)",
                color: isOrange || isBlack ? "var(--ink)" : "#fff",
              }}
            >
              {item.category === "Digital Projects" ? "Live Demo" : "Code Base"} <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </section>

      {/* Content */}
      {item.slug === "posters" || item.slug === "infographics" || item.slug === "logos" || item.slug === "social-media" ? (
        <WallPosterFramesGallery 
          images={item.gallery || []} 
          theme={(item.slug === "posters" || item.slug === "infographics") ? "dark" : "light"} 
          frameCount={(item.slug === "logos") ? 3 : (item.slug === "social-media" ? 39 : 30)}
          styleType={(item.slug === "logos") ? "normal" : "framed"}
        />
      ) : item.slug === "business-designs" ? (
        <section className="mx-auto max-w-[1200px] px-4 sm:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {item.gallery && item.gallery.map((src, i) => {
              const titles = [
                "Ice Cream Brand",
                "Ice Cream Menu",
                "Jewelry Catalog",
                "Product Catalog",
                "Menu Design",
                "Gift Bazaar",
                "Super Kreatives"
              ];
              const types = src.endsWith('.pdf') ? 'PDF' : 'IMAGE';
              const title = titles[i] || `Business Design ${i + 1}`;
              return (
                <a 
                  key={i}
                  href={src}
                  className="group relative aspect-[4/5] bg-gradient-to-br from-[var(--brand)]/10 to-[var(--brand)]/5 overflow-hidden border-2 border-[var(--brand)]/20 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-[var(--brand)]/40 cursor-pointer flex flex-col"
                >
                  {/* Decorative header */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-deep)]" />
                  
                  {/* Content area */}
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                    {/* Document icon */}
                    <div className="w-20 h-20 mb-6 rounded-full bg-[var(--brand)]/10 flex items-center justify-center group-hover:bg-[var(--brand)]/20 transition-colors">
                      {src.endsWith('.pdf') ? (
                        <svg className="w-10 h-10 text-[var(--brand)]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,19L12,15H9V13H12V15H15V19H10Z" />
                        </svg>
                      ) : (
                        <svg className="w-10 h-10 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-[var(--ink)] mb-2 leading-tight">{title}</h3>
                    
                    {/* Type badge */}
                    <div className={`mt-4 px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full ${src.endsWith('.pdf') ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                      {types}
                    </div>
                    
                    {/* Open text */}
                    <span className="mt-3 text-sm text-[var(--ink)]/60 group-hover:text-[var(--brand)] transition-colors">
                      Click to Open
                    </span>
                  </div>
                  
                  {/* Decorative bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brand-deep)] to-[var(--brand)]" />
                </a>
              );
            })}
          </div>
        </section>
      ) : item.slug === "magazine" ? (
        <section className="mx-auto max-w-[1200px] px-4 sm:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {item.gallery && item.gallery.map((src, i) => {
              const titles = ["Campus Roots", "Cultural Magazine", "News Letter", "News Letter Edition", "THE NEXUS", "Events Newsletter"];
              const title = titles[i] || `Publication ${i + 1}`;
              return (
                <a 
                  key={i}
                  href={src}
                  className="group relative aspect-[4/5] bg-gradient-to-br from-[var(--brand)]/10 to-[var(--brand)]/5 overflow-hidden border-2 border-[var(--brand)]/20 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-[var(--brand)]/40 cursor-pointer flex flex-col"
                >
                  {/* Decorative header */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-deep)]" />
                  
                  {/* Content area */}
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                    {/* Magazine icon */}
                    <div className="w-20 h-20 mb-6 rounded-full bg-[var(--brand)]/10 flex items-center justify-center group-hover:bg-[var(--brand)]/20 transition-colors">
                      <svg className="w-10 h-10 text-[var(--brand)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,19L12,15H9V13H12V15H15V19H10Z" />
                      </svg>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-[var(--ink)] mb-2 leading-tight">{title}</h3>
                    
                    {/* PDF badge */}
                    <div className="mt-4 px-4 py-1.5 bg-[var(--brand)] text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      PDF
                    </div>
                    
                    {/* Open text */}
                    <span className="mt-3 text-sm text-[var(--ink)]/60 group-hover:text-[var(--brand)] transition-colors">
                      Click to Open
                    </span>
                  </div>
                  
                  {/* Decorative bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brand-deep)] to-[var(--brand)]" />
                </a>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-[1000px] px-4 sm:px-8 py-16 sm:py-24">
          {/* Project image showcase */}
          {item.category === "Design & Creative Work" ? (
            <ClothesHangerGallery images={item.gallery || []} />
          ) : item.category === "Visual Storytelling" || item.category === "Advertising Storytelling" ? (
            <div className="mb-16 w-full aspect-[4/3] rounded-xl overflow-hidden border border-[var(--ink)]/10 bg-[var(--ink)]/[0.03] p-4 sm:p-8">
              <div className="w-full h-full border-2 border-dashed border-[var(--ink)]/20 rounded-lg flex flex-col items-center justify-center text-[var(--ink)]/40 bg-[var(--background)]">
                {item.gallery && item.gallery.map((src, i) => (
                  src.endsWith('.pdf') ? (
                    <a 
                      key={i}
                      href={src}
                      className="relative w-full aspect-[3/4] bg-[var(--ink)]/[0.03] overflow-hidden border border-[var(--ink)]/10 rounded-xl transition-transform duration-500 hover:-translate-y-2 cursor-pointer flex flex-col items-center justify-center p-4 text-center text-[var(--ink)]/80"
                    >
                      <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,19L12,15H9V13H12V15H15V19H10Z" />
                      </svg>
                      <span className="text-[10px] uppercase tracking-widest font-bold">Open PDF</span>
                    </a>
                  ) : (
                    <img 
                      key={i}
                      src={src} 
                      alt={`Story ${i + 1}`} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )
                ))}
              </div>
            </div>
          ) : (
            <div className="mb-16 overflow-hidden rounded-xl border border-[var(--ink)]/10 bg-[var(--ink)]/[0.03] p-8 sm:p-12">
              <img
                src={item.img}
                alt={item.t}
                className="mx-auto w-full max-w-[400px] h-auto object-contain"
              />
            </div>
          )}

          {/* Details Grid */}
          {item.category !== "Design & Creative Work" && (
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
              {/* Sidebar Info */}
              <aside className="space-y-8 md:col-span-1">
                {item.category !== "Digital Projects" && item.category !== "Academic Projects" && (
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">
                      Role
                    </p>
                    <p className="mt-2 text-sm font-semibold">{item.role}</p>
                  </div>
                )}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">
                    Year
                  </p>
                  <p className="mt-2 text-sm font-semibold">{item.year}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">
                    Technologies
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--ink)]/15 px-3 py-1 text-xs font-medium text-[var(--ink)]/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="md:col-span-2 space-y-10">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                    About the Project
                  </h2>
                  <p className="mt-6 text-sm sm:text-base leading-relaxed text-[var(--ink)]/75">
                    {item.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold tracking-tight">Key Highlights</h3>
                  <ul className="mt-4 space-y-3">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
                        <span className="text-sm leading-relaxed text-[var(--ink)]/75">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
