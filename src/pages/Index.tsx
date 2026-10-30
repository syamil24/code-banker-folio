import { useEffect, useMemo, useState } from "react";
import { chapters, contact, storyMeta, type StoryBlock } from "@/content/story";

const linkClass =
  "underline decoration-[hsl(6_42%_32%/0.35)] underline-offset-[3px] transition-colors hover:decoration-[hsl(6_42%_32%)] hover:text-[hsl(6_42%_28%)]";

function RichText({ text }: { text: string }) {
  if (!text.includes("{{")) return <>{text}</>;
  const parts = text.split(/(\{\{[^}]+\}\})/g);
  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\{\{([^|]+)\|([^}]+)\}\}$/);
        if (!match) return <span key={index}>{part}</span>;
        const [, label, href] = match;
        const external = href.startsWith("http");
        return (
          <a
            key={index}
            href={href}
            className={linkClass}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {label}
          </a>
        );
      })}
    </>
  );
}

function blockText(block: StoryBlock) {
  return block.text;
}

const Index = () => {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(chapters[0].id);

  const minutes = useMemo(() => {
    const words = [storyMeta.standfirst, ...chapters.flatMap((chapter) => chapter.blocks.map(blockText))]
      .join(" ")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
    return Math.max(1, Math.round(words / 250));
  }, []);

  const active = chapters.find((chapter) => chapter.id === activeId) ?? chapters[0];

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const height = root.scrollHeight - root.clientHeight;
      setProgress(height > 0 ? root.scrollTop / height : 0);

      const line = root.scrollTop + 96;
      let current = chapters[0].id;
      for (const chapter of chapters) {
        const section = document.getElementById(chapter.id);
        if (section && section.offsetTop <= line) current = chapter.id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="story-page min-h-screen">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[hsl(32_18%_80%/0.7)] bg-[hsl(40_38%_96%/0.9)] backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-6 px-6">
          <a href="#top" className="font-sans text-[0.78rem] tracking-[0.16em] uppercase text-[hsl(24_10%_28%)]">
            Ahmad Syamil
          </a>
          <p className="truncate font-sans text-[0.78rem] tracking-[0.14em] uppercase text-[hsl(6_32%_36%)]">
            {active.label}
          </p>
        </div>
        <div className="h-[2px] bg-[hsl(32_16%_86%)]" aria-hidden="true">
          <div
            className="h-full bg-[hsl(6_42%_32%)] transition-[width] duration-150 ease-out"
            style={{ width: `${Math.min(100, progress * 100)}%` }}
          />
        </div>
      </header>

      <nav className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 xl:block" aria-label="Chapters">
        <ol className="flex flex-col gap-1">
          {chapters.map((chapter) => {
            const current = chapter.id === activeId;
            return (
              <li key={chapter.id}>
                <a
                  href={`#${chapter.id}`}
                  className="group flex items-center gap-3 py-1"
                  aria-current={current ? "true" : undefined}
                >
                  <span
                    className={`block h-[2px] transition-all duration-300 ${
                      current
                        ? "w-8 bg-[hsl(6_42%_32%)]"
                        : "w-4 bg-[hsl(30_12%_70%)] group-hover:w-6 group-hover:bg-[hsl(24_10%_35%)]"
                    }`}
                  />
                  <span
                    className={`font-sans text-[0.68rem] tracking-[0.12em] uppercase transition-opacity ${
                      current ? "opacity-100 text-[hsl(6_42%_32%)]" : "opacity-0 group-hover:opacity-70"
                    }`}
                  >
                    {chapter.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      <main id="top" className="mx-auto max-w-3xl px-6 pb-28 pt-28">
        <p className="font-sans text-[0.72rem] tracking-[0.22em] uppercase text-[hsl(6_32%_38%)]">
          A personal record · {storyMeta.place} · {storyMeta.written}
        </p>
        <h1 className="font-display mt-5 text-[clamp(2.7rem,7vw,4.35rem)] font-medium leading-[1.02] tracking-[-0.03em] text-[hsl(24_16%_12%)]">
          {storyMeta.title}
        </h1>
        <p className="mt-8 font-serif text-[1.28rem] italic leading-relaxed text-[hsl(24_8%_32%)]">
          {storyMeta.standfirst}
        </p>
        <p className="mt-6 font-sans text-[0.75rem] tracking-[0.18em] uppercase text-[hsl(28_8%_42%)]">
          {minutes} minute read
        </p>

        {chapters.map((chapter, chapterIndex) => (
          <section
            key={chapter.id}
            id={chapter.id}
            className="scroll-mt-24"
            aria-labelledby={chapter.when || chapter.where ? `${chapter.id}-kicker` : undefined}
          >
            <div className={chapterIndex === 0 ? "mt-16" : "mt-20"}>
              {chapter.when || chapter.where ? (
                <h2 id={`${chapter.id}-kicker`} className="mb-8">
                  {chapter.when ? (
                    <span className="block font-sans text-[0.72rem] tracking-[0.2em] uppercase text-[hsl(6_42%_34%)]">
                      {chapter.when}
                    </span>
                  ) : null}
                  {chapter.where ? (
                    <span className="mt-1 block font-serif text-[1.05rem] italic text-[hsl(24_8%_36%)]">
                      {chapter.where}
                    </span>
                  ) : null}
                </h2>
              ) : (
                <div className="mb-8 flex items-center gap-4" aria-hidden="true">
                  <span className="h-px flex-1 bg-[hsl(32_16%_78%)]" />
                  <span className="font-display text-lg text-[hsl(6_42%_34%)]">§</span>
                  <span className="h-px flex-1 bg-[hsl(32_16%_78%)]" />
                </div>
              )}
            </div>

            <div className="space-y-6">
              {chapter.blocks.map((block, blockIndex) => {
                if (block.type === "quote") {
                  return (
                    <blockquote key={blockIndex} className="my-10 border-none px-0">
                      <p className="font-display text-[clamp(1.45rem,3vw,1.85rem)] font-medium italic leading-snug tracking-[-0.02em] text-[hsl(6_38%_28%)]">
                        {block.text}
                      </p>
                    </blockquote>
                  );
                }

                const isOpening = chapterIndex === 0 && blockIndex === 0;
                return (
                  <p
                    key={blockIndex}
                    className={`font-serif text-[1.16rem] leading-[1.8] text-[hsl(24_12%_16%)] sm:text-[1.2rem] ${
                      isOpening ? "story-drop" : ""
                    }`}
                  >
                    <RichText text={block.text} />
                  </p>
                );
              })}
            </div>
          </section>
        ))}

        <footer className="mt-24 border-t border-[hsl(32_16%_78%)] pt-10">
          <p className="font-display text-[1.85rem] font-medium leading-tight tracking-[-0.02em]">
            {contact.name}
          </p>
          <p className="mt-2 font-serif italic text-[hsl(24_8%_36%)]">{contact.location}</p>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 font-sans text-[0.92rem]">
            <li>
              <a className={linkClass} href={`mailto:${contact.email}`}>
                Email
              </a>
            </li>
            <li>
              <a className={linkClass} href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a className={linkClass} href={contact.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a className={linkClass} href={contact.instagramUrl} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a className={linkClass} href={contact.blogUrl} target="_blank" rel="noreferrer">
                Blog
              </a>
            </li>
            <li>
              <a className={linkClass} href={contact.resumeUrl} target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
          <p className="mt-10 max-w-sm font-serif text-[0.95rem] leading-relaxed text-[hsl(28_8%_40%)]">
            {contact.email}
            <br />
            {contact.phone}
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
