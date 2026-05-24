import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

type Episode = {
  id: number;
  number: string;
  title: string;
  description: string;
  duration: string;
  src: string;
};

const episodes: Episode[] = [
  {
    id: 1,
    number: "E1",
    title: "Episode 1",
    description:
      "The first chapter in our gentle animated series — meet Dino and step into a quiet moment of care.",
    duration: "Episode 1",
    src: "/stories/dino-initiative-ep-1.mp4",
  },
];

const DinoStories = () => {
  const [activeId, setActiveId] = useState<number>(episodes[0].id);
  const playerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const active = episodes.find((e) => e.id === activeId) ?? episodes[0];

  const playEpisode = (id: number) => {
    setActiveId(id);
    setTimeout(() => {
      playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      videoRef.current?.play().catch(() => {});
    }, 50);
  };

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr] md:items-center md:py-20">
          <div ref={playerRef} className="order-2 md:order-1">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-black shadow-2xl">
              <video
                ref={videoRef}
                key={active.id}
                src={active.src}
                controls
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                playsInline
                preload="metadata"
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Original Series · Season 1
            </p>
            <h1 className="mb-3 text-4xl font-bold leading-tight md:text-5xl">
              Dino Stories
            </h1>
            <p className="mb-5 text-base text-muted-foreground md:text-lg">
              Short animated episodes about feelings, friendship, and finding small moments of comfort.
            </p>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
              <span className="rounded border border-border px-2 py-0.5">Animation</span>
              <span className="rounded border border-border px-2 py-0.5">Wellbeing</span>
              <span>{episodes.length} {episodes.length === 1 ? "Episode" : "Episodes"}</span>
            </div>
            <button
              onClick={() => playEpisode(active.id)}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              <Play className="h-4 w-4 fill-current" />
              Play {active.number}
            </button>
          </div>
        </div>
      </section>

      {/* EPISODES LIST */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Episodes</h2>
          <span className="text-sm text-muted-foreground">Season 1</span>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {episodes.map((ep, idx) => {
            const isActive = ep.id === activeId;
            return (
              <li key={ep.id}>
                <button
                  onClick={() => playEpisode(ep.id)}
                  className={`group flex w-full items-center gap-5 px-2 py-5 text-left transition-colors hover:bg-secondary/60 md:gap-6 md:px-4 md:py-6 ${
                    isActive ? "bg-secondary/40" : ""
                  }`}
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
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black">
                        <Play className="h-4 w-4 fill-current" />
                      </span>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <h3 className="text-base font-semibold md:text-lg">{ep.title}</h3>
                      {isActive && (
                        <span className="rounded bg-primary/15 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
                          Now Playing
                        </span>
                      )}
                    </div>
                    <p className="line-clamp-2 text-sm text-muted-foreground md:text-base">
                      {ep.description}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
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
    </div>
  );
};

export default DinoStories;
