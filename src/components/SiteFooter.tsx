export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--ink)]/15 mt-16">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-4 sm:px-8 py-6 text-[10px] uppercase tracking-[0.3em] text-[var(--ink)]/60 md:flex-row md:items-center md:justify-between">
        <span>© 2026 Mule Bharath · Hyderabad, India</span>
        <span className="break-all md:break-normal">mulebharath9@gmail.com · +91 77803 91081</span>
      </div>
    </footer>
  );
}
