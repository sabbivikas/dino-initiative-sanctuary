import { Link } from "react-router-dom";

const episodes = [
  {
    id: 1,
    title: "Episode 1",
    description: "The first chapter in our gentle animated series — meet Dino and step into a quiet moment of care.",
    src: "/stories/dino-initiative-ep-1.mp4",
  },
];

const DinoStories = () => {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <header className="mb-12 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">A new series</p>
        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">Dino Stories</h1>
        <p className="mx-auto max-w-md text-lg text-muted-foreground">
          Short animated episodes about feelings, friendship, and finding small moments of comfort.
        </p>
      </header>

      <div className="space-y-16">
        {episodes.map((ep) => (
          <article key={ep.id}>
            <div className="overflow-hidden rounded-2xl border border-border bg-secondary/40">
              <video
                src={ep.src}
                controls
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-black"
              />
            </div>
            <div className="mt-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{ep.title}</p>
              <h2 className="mt-1 text-2xl font-semibold">{ep.description}</h2>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-20 rounded-md border border-primary/30 px-6 py-5 text-center">
        <p className="mb-2 font-medium">More episodes are on the way.</p>
        <p className="text-sm text-muted-foreground">
          In the meantime, explore our{" "}
          <Link to="/resources" className="text-primary underline underline-offset-4 hover:text-primary/80">
            mental health resources →
          </Link>
        </p>
      </section>
    </div>
  );
};

export default DinoStories;
