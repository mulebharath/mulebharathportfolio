import { useState, useEffect } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function TypingText({ text, delay = 0, speed = 30 }: { text: string; delay?: number; speed?: number }) {
  const { ref, shown } = useReveal<HTMLParagraphElement>();
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (shown && !started) {
      const timer = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [shown, started, delay]);

  useEffect(() => {
    if (started && displayedText.length < text.length) {
      const nextCharTimer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(nextCharTimer);
    }
  }, [started, displayedText, text, speed]);

  return (
    <p ref={ref} className="text-lg leading-relaxed text-[var(--ink)]/90 min-h-[3em]">
      {displayedText}
      {started && displayedText.length < text.length && (
        <span className="inline-block w-[2px] h-[1.1em] bg-[var(--brand)] ml-1 animate-pulse align-middle" />
      )}
    </p>
  );
}
