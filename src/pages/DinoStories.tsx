import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play, X } from "lucide-react";

type Episode = {
  id: number;
  number: string;
  title: string;
  description: string;
  src: string;
};

const episodes: Episode[] = [
  {
    id: 1,
    number: "E1",
    title: "The Storm Day",
    description:
      "The first chapter in our gentle animated series — meet Dino and step into a quiet moment of care.",
    src: "/stories/dino-initiative-ep-1.mp4",
  },
];

const DinoStories = () => {
  const [playing, setPlaying] = useState<Episode | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play and request fullscreen when an episode is opened
  useEffect(() => {
    if (!playing) return;
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
    const req =
      v.requestFullscreen?.bind(v) ||
      (v as any).webkitEnterFullscreen?.bind(v) ||
      (v as any).webkitRequestFullscreen?.bind(v);
    req?.()?.catch?.(() => {});
  }, [playing]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPlaying(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
    }
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    setPlaying(null);
  };

  const featured = episodes[0];

  return (
    <div className="bg-background">
      {/* HERO — poster, no inline video */}
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-20 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Original Series · Season 1
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
            Dino Stories
          </h1>
          <p className="mx-auto mb-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Short animated episodes about feelings, friendship, and finding small moments of comfort.
          </p>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
            <span className="rounded border border-border px-2 py-0.5">Animation</span>
            <span className="rounded border border-border px-2 py-0.5">Wellbeing</span>
            <span>{episodes.length} {episodes.length === 1 ? "Episode" : "Episodes"}</span>
          </div>
          <button
            onClick={() => setPlaying(featured)}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            <Play className="h-4 w-4 fill-current" />
            Play {featured.number} · {featured.title}
          </button>
        </div>
      </section>

      {/* EPISODES LIST */}
      <section className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Episodes</h2>
          <span className="text-sm text-muted-foreground">Season 1</span>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {episodes.map((ep, idx) => (
            <li key={ep.id}>
              <button
                onClick={() => setPlaying(ep)}
                className="group flex w-full items-center gap-5 px-2 py-5 text-left transition-colors hover:bg-secondary/60 md:gap-6 md:px-4 md:py-6"
              >
                <span className="w-8 shrink-0 text-2xl font-bold text-muted-foreground md:text-3xl">
                  {idx + 1}
                </span>

                <div className="relative aspect-video w-40 shrink-0 overflow-hidden rounded-md border border-border bg-black sm:w-52 md:w-64">
                  <video
                    src={ep.src}
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-black">
                      <Play className="h-5 w-5 fill-current" />
                    </span>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {ep.number}
                  </p>
                  <h3 className="mb-1 text-base font-semibold md:text-lg">{ep.title}</h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground md:text-base">
                    {ep.description}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-16 rounded-md border border-primary/30 px-6 py-5 text-center">
          <p className="mb-2 font-medium">More episodes are on the way.</p>
          <p className="text-sm text-muted-foreground">
            In the meantime, explore our{" "}
            <Link to="/resources" className="text-primary underline underline-offset-4 hover:text-primary/80">
              mental health resources →
            </Link>
          </p>
        </div>
      </section>

      {/* FULLSCREEN PLAYER OVERLAY */}
      {playing && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black"
          role="dialog"
          aria-modal="true"
          aria-label={`${playing.number} · ${playing.title}`}
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Close player"
          >
            <X className="h-5 w-5" />
          </button>
          <video
            ref={videoRef}
            src={playing.src}
            controls
            autoPlay
            playsInline
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            onEnded={close}
            className="h-full w-full bg-black"
          />
        </div>
      )}
    </div>
  );
};

export default DinoStories;
