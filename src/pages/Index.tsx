import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { APP_STORE_URL } from "@/lib/appStore";

import flowerYellow from "@/assets/flower-smile-yellow.png";
import flowerBlue from "@/assets/flower-smile-blue.png";
import dinoComfort from "@/assets/dino-comfort.png";
import dinoMeditation from "@/assets/dino-meditation.png";
import dinoFlowers from "@/assets/dino-flowers.png";
import screen01 from "@/assets/app-screen-01.png";
import screen02 from "@/assets/app-screen-02.png";
import screen03 from "@/assets/app-screen-03.png";
import screen04 from "@/assets/app-screen-04.jpg";
import screen06 from "@/assets/app-screen-06.png";

/* ---------- Small pieces ---------- */

const AppStoreBadge = ({ variant = "dark", size = "lg" }: { variant?: "dark" | "light"; size?: "md" | "lg" }) => {
  const dark = variant === "dark";
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Dino on the App Store"
      className={`inline-flex items-center gap-3 rounded-xl transition-opacity hover:opacity-90 ${
        dark ? "bg-foreground text-background" : "bg-background text-foreground"
      } ${size === "lg" ? "px-6 py-3.5" : "px-5 py-3"}`}
    >
      <svg viewBox="0 0 384 512" className={size === "lg" ? "h-8 w-8 fill-current" : "h-7 w-7 fill-current"} aria-hidden="true">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM260 110.3c25.1-29.8 22.8-56.9 22-66.3-22.1 1.3-47.7 15.1-62.3 32-16.1 18.1-25.6 40.5-23.6 65.8 23.9 1.9 45.7-10.4 63.9-31.5z" />
      </svg>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] uppercase tracking-wide opacity-80">Download on the</span>
        <span className={size === "lg" ? "text-base font-semibold" : "text-sm font-semibold"}>App Store</span>
      </span>
    </a>
  );
};

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-primary">{children}</p>
);

const SourceTag = ({ children }: { children: ReactNode }) => (
  <p className="mt-3 text-[11px] uppercase tracking-widest text-muted-foreground/80">Source: {children}</p>
);

const Starfield = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {Array.from({ length: 40 }).map((_, i) => (
      <span
        key={i}
        className="absolute h-1 w-1 rounded-full bg-background/70 animate-twinkle"
        style={{
          top: `${(i * 53) % 100}%`,
          left: `${(i * 37) % 100}%`,
          animationDelay: `${(i % 10) * 0.4}s`,
        }}
      />
    ))}
  </div>
);

/* ---------- Sections ---------- */

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-background">
    <div className="pointer-events-none absolute -top-20 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-glow-pulse" aria-hidden="true" />
    <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />

    <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-[1.15fr_1fr] md:py-32">
      <div>
        <Reveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-primary">Dino</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mb-6 text-5xl leading-[1.02] md:text-7xl">Personal intelligence for everyone.</h1>
        </Reveal>
        <Reveal delay={260}>
          <p className="mb-4 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            A character that learns you, notices when something changes, and knows when to stay quiet.
          </p>
        </Reveal>
        <Reveal delay={380}>
          <p className="mb-10 max-w-xl text-base italic text-muted-foreground">
            Not a chatbot with a mascot. A character, in a world, that knows you.
          </p>
        </Reveal>
        <Reveal delay={520}>
          <div className="flex flex-wrap items-center gap-4">
            <AppStoreBadge />
            <a
              href="#problem"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
            >
              See why Dino exists <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-secondary to-transparent blur-2xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-6 top-8 h-3 w-3 rounded-full bg-primary/70 blur-[2px] animate-float" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-4 top-24 h-2 w-2 rounded-full bg-primary/50 blur-[2px] animate-float-slow" aria-hidden="true" />
        <div className="pointer-events-none absolute left-10 -bottom-2 h-4 w-4 rounded-full bg-primary/40 blur-[3px] animate-glow-pulse" aria-hidden="true" />
        <div className="animate-float-slow overflow-hidden rounded-[2rem] border border-border/60 bg-secondary/30 shadow-2xl">
          <img
            src={screen01}
            alt="Dino home screen on iPhone"
            width={400}
            height={820}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
        <img
          src={dinoComfort}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 -left-10 h-24 w-24 animate-float md:h-28 md:w-28"
        />
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section id="problem" className="relative border-t bg-background py-24 md:py-32">
    <div className="mx-auto max-w-5xl px-6">
      <Reveal>
        <SectionLabel>The problem</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mb-14 max-w-3xl text-4xl leading-tight md:text-5xl">
          A specific generation is breaking, and we know which one.
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <div className="mb-14 rounded-3xl border bg-secondary/30 p-8 md:p-12">
          <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Youth wellbeing decline</div>
          <div className="flex items-baseline gap-3">
            <span className="text-6xl font-semibold text-primary md:text-8xl">
              <CountUp end={0.86} decimals={2} />
            </span>
            <span className="text-lg text-muted-foreground md:text-xl">points on the 0 to 10 scale</span>
          </div>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Youth wellbeing in the US, Canada, Australia and New Zealand fell by that average in a decade.
            Fifteen Western countries saw significant declines.
          </p>
          <SourceTag>World Happiness Report 2026</SourceTag>
        </div>
      </Reveal>

      <div className="mb-14 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border bg-background p-8">
            <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Western countries</div>
            <div className="mb-6 text-2xl">Youth wellbeing falling</div>
            <div className="h-24 w-full">
              <svg viewBox="0 0 200 80" className="h-full w-full" aria-hidden="true">
                <path d="M0 20 L60 30 L120 50 L200 70" fill="none" stroke="hsl(0 60% 55%)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="200" cy="70" r="4" fill="hsl(0 60% 55%)" />
              </svg>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="h-full rounded-3xl border bg-primary/10 p-8">
            <div className="mb-2 text-xs uppercase tracking-widest text-primary">Most of the rest of the world</div>
            <div className="mb-6 text-2xl">Youth wellbeing rising</div>
            <div className="h-24 w-full">
              <svg viewBox="0 0 200 80" className="h-full w-full" aria-hidden="true">
                <path d="M0 60 L60 50 L120 30 L200 12" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="200" cy="12" r="4" fill="hsl(var(--primary))" />
              </svg>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mb-16 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl border p-6">
            <div className="text-4xl font-semibold text-primary md:text-5xl">
              8 <span className="text-muted-foreground">/</span> 10
            </div>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              global regions, covering roughly 90% of the world's population, where under-25s report higher
              life evaluations today than fifteen years ago.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl border p-6">
            <div className="text-4xl font-semibold text-primary md:text-5xl">
              <CountUp end={85} /> <span className="text-muted-foreground">/</span> 136
            </div>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              countries where young people are happier now than they were twenty years ago.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <blockquote className="border-l-2 border-primary/60 pl-8 text-2xl leading-snug md:text-4xl">
          This is not the human condition worsening. It is a specific population, in specific countries,
          being harmed by a specific environment, while much of the rest of the world improves.
        </blockquote>
      </Reveal>
    </div>
  </section>
);

const collapseItems = [
  { label: "Interpersonal trust", note: "person to person" },
  { label: "Institutional trust", note: "person to system" },
  { label: "Perceived social activity", note: "sense of community around us" },
  { label: "Social meeting frequency", note: "actual time with other people" },
];

const Collapsed = () => (
  <section className="border-t bg-secondary/20 py-24 md:py-32">
    <div className="mx-auto max-w-5xl px-6">
      <Reveal>
        <h2 className="mb-14 max-w-3xl text-4xl md:text-5xl">Four things collapsed at the same time.</h2>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {collapseItems.map((c, i) => (
          <Reveal key={c.label} delay={i * 100}>
            <div className="group relative overflow-hidden rounded-3xl border bg-background p-8">
              <div className="mb-6 text-2xl md:text-3xl">{c.label}</div>
              <div className="text-sm text-muted-foreground">{c.note}</div>
              <svg viewBox="0 0 200 60" className="mt-6 h-16 w-full" aria-hidden="true">
                <path
                  d="M0 10 L50 18 L100 32 L150 44 L200 55"
                  fill="none"
                  stroke="hsl(var(--foreground))"
                  strokeOpacity="0.5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={200}>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
          Those declines are largest for Gen Z and Millennial women.
        </p>
      </Reveal>
    </div>
  </section>
);

const AlgorithmicTrap = () => {
  const nodes = [
    "Passive feed",
    "Social comparison",
    "Envy and stress",
    "More scrolling",
    "Deeper isolation",
  ];
  return (
    <section className="border-t bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="mb-6 max-w-3xl text-4xl md:text-5xl">The problem is not simply screen time.</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mb-14 max-w-2xl text-lg text-muted-foreground">
            The harmful environments are passive, visual, and influencer driven. Algorithmic feeds create
            social comparison, envy, stress, and depression. Those feelings drive more use, which deepens
            the same spiral.
          </p>
        </Reveal>

        <Reveal>
          <div className="relative mx-auto mb-16 aspect-square max-w-md">
            <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <circle
                cx="150"
                cy="150"
                r="110"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                className="animate-loop-dash"
              />
            </svg>
            {nodes.map((n, i) => {
              const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + 42 * Math.cos(angle);
              const y = 50 + 42 * Math.sin(angle);
              return (
                <div
                  key={n}
                  className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border bg-background px-3 py-1.5 text-xs md:text-sm"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {n}
                </div>
              );
            })}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xs uppercase tracking-widest text-muted-foreground">
              The loop
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mx-auto max-w-3xl text-2xl leading-snug md:text-3xl">
            People spend their day being shown other people's lives and measuring themselves against them.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground">
            Social circles shrink. Interactions become shallower. Face to face contact drops. The digital
            environment substitutes for connection without actually providing it.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

const NotUnplug = () => (
  <section className="relative border-t bg-gradient-to-b from-secondary/40 to-background py-24 md:py-32">
    <div className="mx-auto max-w-5xl px-6">
      <Reveal>
        <h2 className="mb-6 max-w-3xl text-4xl md:text-5xl">The answer is not zero technology.</h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mb-4 max-w-2xl text-lg text-muted-foreground">
          Young people who use social media less than one hour a day report the highest wellbeing, even
          higher than people who use none at all. Total abstinence can also produce isolation.
        </p>
      </Reveal>
      <Reveal delay={180}>
        <p className="mb-14 max-w-2xl text-lg">
          The target is not zero. The target is a small, warm, high signal digital presence.
        </p>
      </Reveal>

      <Reveal>
        <div className="mb-4 rounded-3xl border bg-background p-8 md:p-10">
          <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
            <span>Wellbeing (illustrative)</span>
            <span>Daily use</span>
          </div>
          <svg viewBox="0 0 400 140" className="h-40 w-full" aria-hidden="true">
            <path d="M10 100 Q 90 20, 160 30 T 390 120" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="150" cy="30" r="6" fill="hsl(var(--primary))" />
            <line x1="150" y1="30" x2="150" y2="130" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeDasharray="3 3" />
          </svg>
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>Zero use</span>
            <span className="font-medium text-primary">&lt; 1 hour · optimum</span>
            <span>Heavy use</span>
          </div>
        </div>
        <p className="text-xs italic text-muted-foreground">Curve is conceptual, not to scale.</p>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-14 max-w-3xl text-xl leading-snug md:text-2xl">
          That product does not currently exist. Every incumbent is built to push people in the opposite
          direction, because engagement is how they are paid.
        </p>
      </Reveal>
    </div>
  </section>
);

const aiStats = [
  {
    big: "31%",
    text: "of 14 to 29 year olds say AI makes them angry, up from 22% one year earlier.",
    source: "Gallup, February to March 2026",
  },
  { big: "-14 pts", text: "Excitement about AI fell 14 points to 22%.", source: "Gallup" },
  { big: "-9 pts", text: "Hope about AI fell 9 points to 18%.", source: "Gallup" },
  { big: "42%", text: "Anxiety about AI now sits at 42%.", source: "Gallup" },
  {
    big: "58%",
    text: "of adults under 30 say AI will erode people's capacity to form meaningful relationships.",
    source: "Pew",
  },
  {
    big: "14%",
    text: "of adults under 30 expect AI's effect on society to be positive.",
    source: "Pew, February 2026",
  },
  {
    big: "2×",
    text: "Gen Z is nearly twice as likely as millennials to view AI-generated content negatively.",
    source: "Pew",
  },
];

const AIRejection = () => (
  <section className="border-t bg-background py-24 md:py-32">
    <div className="mx-auto max-w-5xl px-6">
      <Reveal>
        <h2 className="mb-14 max-w-3xl text-4xl md:text-5xl">
          The technology that could help is the technology they do not trust.
        </h2>
      </Reveal>

      <div className="space-y-6">
        {aiStats.map((s, i) => (
          <Reveal key={s.text} delay={i * 60}>
            <div className="grid items-center gap-6 rounded-2xl border bg-background p-6 md:grid-cols-[220px_1fr] md:p-8">
              <div className="text-5xl font-semibold text-primary md:text-6xl">{s.big}</div>
              <div>
                <p className="text-lg leading-snug md:text-xl">{s.text}</p>
                <p className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">Source: {s.source}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-16 max-w-3xl text-2xl leading-snug md:text-3xl">
          This is not fear of unfamiliar technology. Gen Z uses AI more than any other generation. It is a
          considered verdict from its most exposed users.
        </p>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          One of the reasons they give is that AI degrades human relationships.
        </p>
      </Reveal>
    </div>
  </section>
);

const OneParagraph = () => (
  <section className="relative overflow-hidden border-t bg-foreground py-28 text-background md:py-40">
    <Starfield />
    <div className="relative mx-auto max-w-4xl px-6">
      <Reveal>
        <p className="mb-10 text-2xl leading-snug md:text-4xl">
          The population whose wellbeing is falling fastest is young, Western, disproportionately female,
          and harmed specifically by passive, comparison driven digital environments.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <p className="mb-10 text-2xl leading-snug md:text-4xl">
          The correct dose of digital presence is small and warm, not zero.
        </p>
      </Reveal>
      <Reveal delay={400}>
        <p className="mb-16 text-2xl leading-snug md:text-4xl">
          But this population is also deeply skeptical of AI, while the entire industry is responding with
          faceless text boxes built by the same types of companies that created the feeds they distrust.
        </p>
      </Reveal>

      <div className="space-y-6 border-t border-background/20 pt-12">
        <Reveal>
          <p className="text-xl leading-snug md:text-2xl">
            They will not type their problems into a text box owned by a tech company.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <p className="text-xl leading-snug md:text-2xl">Not because they cannot.</p>
        </Reveal>
        <Reveal delay={440}>
          <p className="text-xl leading-snug md:text-2xl">Because they do not want to.</p>
        </Reveal>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="relative overflow-hidden border-t bg-gradient-to-b from-secondary/40 via-background to-secondary/30 py-24 md:py-32">
    <div className="pointer-events-none absolute left-10 top-16 h-24 w-24 rounded-full bg-primary/20 blur-2xl animate-glow-pulse" aria-hidden="true" />
    <div className="pointer-events-none absolute right-10 bottom-16 h-32 w-32 rounded-full bg-primary/10 blur-3xl animate-float-slow" aria-hidden="true" />

    <div className="mx-auto max-w-6xl px-6">
      <Reveal>
        <SectionLabel>The solution</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mb-6 max-w-3xl text-4xl md:text-5xl">
          Dino is personal intelligence that does not feel like AI.
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <p className="mb-14 max-w-2xl text-lg italic text-muted-foreground">
          Not a chatbot with a mascot. A character, in a world, that knows you.
        </p>
      </Reveal>

      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <Reveal>
            <p className="text-xl leading-relaxed">
              You do not open a blank text field. You visit a place where someone is waiting who
              remembers you.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg text-muted-foreground">
              The intelligence is real, but it lives underneath the experience. What the person feels is a
              relationship with a small dinosaur.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <blockquote className="border-l-2 border-primary/60 pl-6 text-2xl leading-snug md:text-3xl">
              The whimsy is not decoration. It is the delivery mechanism.
            </blockquote>
          </Reveal>
          <Reveal delay={320}>
            <p className="text-lg text-muted-foreground">
              The character, world, rituals, weather, lanterns, and personality allow intelligence to
              enter someone's emotional life without feeling like another machine asking for input.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <img
            src={dinoMeditation}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-12 -top-10 h-28 w-28 animate-float md:h-36 md:w-36"
          />
          <img
            src={flowerBlue}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 top-24 h-16 w-16 animate-swing origin-bottom"
          />
          <div className="grid grid-cols-2 gap-4">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border bg-background shadow-lg">
                <img src={screen02} alt="Emotional weather check-in" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={120} className="mt-10">
              <div className="overflow-hidden rounded-3xl border bg-background shadow-lg">
                <img src={screen03} alt="Guided breathing with Dino" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="overflow-hidden rounded-3xl border bg-background shadow-lg">
                <img src={screen04} alt="Gratitude jar" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={280} className="mt-10">
              <div className="overflow-hidden rounded-3xl border bg-background shadow-lg">
                <img src={screen06} alt="Garden that tracks personal rhythms" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PreExistingTrust = () => (
  <section className="border-t bg-background py-24 md:py-32">
    <div className="mx-auto max-w-5xl px-6">
      <Reveal>
        <h2 className="mb-14 max-w-3xl text-4xl md:text-5xl">The relationship existed before the product.</h2>
      </Reveal>
      <Reveal>
        <div className="rounded-3xl border bg-secondary/30 p-10 md:p-14">
          <div className="text-6xl font-semibold text-primary md:text-8xl">
            <CountUp end={358000} format={(n) => Math.round(n).toLocaleString()} />
          </div>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            people across Instagram and TikTok connected with Dino before the app existed.
          </p>
          <p className="mt-6 max-w-2xl text-base">
            This audience was built around the character, not around an AI product. It proves that people
            already wanted a relationship with Dino before there was intelligence underneath it.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

const inversion = [
  { bad: "Passive, visual, influencer driven feeds", good: "No feed, no influencers, nothing to scroll" },
  { bad: "Social comparison against other people's lives", good: "No other people to measure yourself against" },
  { bad: "Heavy use correlates with worse outcomes", good: "Engineered to minimize contact and capable of staying quiet for long periods" },
  { bad: "Less than one hour appears optimal", good: "Small, warm, and occasional by design" },
  { bad: "Total abstinence can create isolation", good: "Present, but not demanding" },
  { bad: "Digital environments substitute for connection", good: "Notices, initiates, and reaches out first when a pattern warrants it" },
  { bad: "Trust is collapsing, especially among young women", good: "A character people can build a relationship with over time" },
];

const Inversion = () => (
  <section className="border-t bg-secondary/20 py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <Reveal>
        <h2 className="mb-14 max-w-3xl text-4xl md:text-5xl">Dino inverts every part of the harmful model.</h2>
      </Reveal>

      <div className="mb-6 hidden grid-cols-2 gap-6 text-xs uppercase tracking-widest text-muted-foreground md:grid">
        <div>Harmful model</div>
        <div className="text-primary">Dino</div>
      </div>

      <div className="space-y-4">
        {inversion.map((row, i) => (
          <Reveal key={row.bad} delay={i * 50}>
            <div className="grid gap-3 md:grid-cols-2 md:gap-6">
              <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/60 p-5 text-muted-foreground">
                <X className="mt-1 h-4 w-4 shrink-0 opacity-60" />
                <span className="text-base leading-snug md:text-lg">{row.bad}</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-primary/40 bg-primary/10 p-5">
                <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span className="text-base leading-snug text-foreground md:text-lg">{row.good}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const signals = [
  "Check-ins",
  "Sleep",
  "Movement",
  "Writing",
  "Repeated feelings",
  "Recurring causes",
  "What has helped before",
];

const ReachesFirst = () => (
  <section className="border-t bg-background py-24 md:py-32">
    <div className="mx-auto max-w-5xl px-6">
      <Reveal>
        <h2 className="mb-6 max-w-3xl text-4xl md:text-5xl">
          Everyone else built intelligence that waits to be asked.
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mb-16 max-w-2xl text-lg text-muted-foreground">
          The people who need support most often do not ask. That is what being in it means.
        </p>
      </Reveal>

      <div className="mb-16 grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
        <div className="flex flex-wrap justify-center gap-2 md:justify-end">
          {signals.map((s, i) => (
            <Reveal key={s} delay={i * 60}>
              <span className="rounded-full border bg-background px-4 py-2 text-sm">{s}</span>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
            <div className="absolute inset-0 animate-glow-pulse rounded-full bg-primary/10 blur-xl" aria-hidden="true" />
            <img src={dinoComfort} alt="" aria-hidden="true" className="relative h-24 w-24 animate-float" />
          </div>
        </Reveal>

        <div className="space-y-3">
          <Reveal>
            <div className="rounded-2xl border bg-secondary/40 p-4 text-sm">Stay quiet</div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-primary/50 bg-primary/10 p-4 text-sm text-foreground">
              Reach out (only when a pattern warrants it)
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        <Reveal>
          <p className="text-xl leading-snug md:text-2xl">
            Dino learns your patterns against your own baseline, not a population average.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-lg text-muted-foreground">
            Every night it asks one question: does this person need something, or are they fine?
          </p>
        </Reveal>
        <Reveal delay={220}>
          <p className="text-2xl leading-snug md:text-3xl">
            Most nights, Dino decides they are fine and says nothing.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

const Restraint = () => (
  <section className="border-t bg-secondary/20 py-24 md:py-32">
    <div className="mx-auto max-w-5xl px-6">
      <Reveal>
        <h2 className="mb-6 max-w-3xl text-4xl md:text-5xl">Restraint is architecture, not a prompt.</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mb-4 max-w-2xl text-lg text-muted-foreground">
          The limits that prevent Dino from overreaching are enforced independently of the model. The
          product is designed so it cannot simply drift into contacting a vulnerable person more often
          because an AI model decided to.
        </p>
      </Reveal>
      <Reveal delay={180}>
        <p className="mb-14 max-w-2xl text-lg">
          Most companion products are designed to maximize conversation. Dino is designed to earn trust by
          knowing when not to speak.
        </p>
      </Reveal>

      <Reveal>
        <blockquote className="mb-14 border-l-2 border-primary/60 pl-6 text-2xl leading-snug md:text-4xl">
          It is a machine designed to be used less.
        </blockquote>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="rounded-3xl border bg-background p-8">
            <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Engagement product</div>
            <ul className="space-y-2 text-muted-foreground">
              <li>More messages</li>
              <li>More sessions</li>
              <li>More scrolling</li>
              <li>More attention</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-3xl border border-primary/40 bg-primary/10 p-8">
            <div className="mb-4 text-xs uppercase tracking-widest text-primary">Dino</div>
            <ul className="space-y-2">
              <li>More context</li>
              <li>Better timing</li>
              <li>Fewer interruptions</li>
              <li>More trust</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const liveItems = [
  "Available on the App Store",
  "Available in five languages",
  "Crisis directory across 27 countries",
  "Crisis detection works regardless of the language someone writes in",
  "Pattern-based reaching out is live",
  "Dino learns from personal activity and reflection",
  "Dino can identify recurring personal patterns",
  "Dino can remain quiet when no meaningful pattern warrants action",
];

const Live = () => (
  <section className="border-t bg-background py-24 md:py-32">
    <div className="mx-auto max-w-5xl px-6">
      <Reveal>
        <h2 className="mb-10 text-4xl md:text-5xl">Live today</h2>
      </Reveal>
      <ul className="grid gap-3 md:grid-cols-2">
        {liveItems.map((item, i) => (
          <Reveal key={item} delay={i * 50}>
            <li className="flex items-start gap-3 rounded-xl border bg-card p-5 text-base">
              <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <div className="mt-14 rounded-3xl border border-dashed border-primary/40 bg-primary/5 p-8">
          <div className="mb-2 text-xs uppercase tracking-widest text-primary">What we are building toward</div>
          <p className="text-lg">
            Helping Dino recognize difficult periods earlier and show up before the person has to ask.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

const WhyUs = () => (
  <section className="border-t bg-secondary/20 py-24 md:py-32">
    <div className="mx-auto max-w-5xl px-6">
      <Reveal>
        <h2 className="mb-14 max-w-3xl text-4xl md:text-5xl">
          We already reach the exact people this was built for.
        </h2>
      </Reveal>

      <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        <Reveal>
          <div className="text-center">
            <div className="text-4xl font-semibold text-primary md:text-5xl">
              <CountUp end={358} suffix="K" />
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">Instagram + TikTok</div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="text-center">
            <div className="text-4xl font-semibold text-primary md:text-5xl">
              <CountUp end={80} suffix="%" />
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">Aged 18 to 34</div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="text-center">
            <div className="text-4xl font-semibold text-primary md:text-5xl">
              <CountUp end={82.7} decimals={1} suffix="%" />
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">Female</div>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className="text-center">
            <div className="text-3xl font-semibold text-primary md:text-4xl">US</div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">Largest market</div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Zero paid acquisition</p>
      </Reveal>
      <Reveal delay={120}>
        <p className="max-w-3xl text-xl leading-snug md:text-2xl">
          Read that demographic against the report. It is the same population. Not adjacent, not a proxy.
        </p>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <p className="text-lg text-muted-foreground">
            Dino reaches people through the same platforms implicated in the problem.
          </p>
          <p className="text-lg">
            The channel that contributed to the harm can also deliver the alternative.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

const Team = () => (
  <section className="border-t bg-background py-24 md:py-32">
    <div className="mx-auto max-w-5xl px-6">
      <Reveal>
        <SectionLabel>The team</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mb-14 max-w-3xl text-4xl md:text-5xl">
          Distribution and engineering, each founder owning a hard half.
        </h2>
      </Reveal>

      <div className="mb-14 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="rounded-3xl border bg-secondary/30 p-8">
            <div className="mb-2 text-xs uppercase tracking-widest text-primary">Chloe</div>
            <p className="text-lg">Built and owns the character, brand, and community.</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-3xl border bg-secondary/30 p-8">
            <div className="mb-2 text-xs uppercase tracking-widest text-primary">Vikas</div>
            <p className="text-lg">Builds the product and intelligence layer.</p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <blockquote className="border-l-2 border-primary/60 pl-6 text-xl leading-snug md:text-2xl">
          We spent years reading messages from people who were struggling before writing a line of the app.
          The product is a response to that inbox.
        </blockquote>
      </Reveal>
    </div>
  </section>
);

const WhyNow = () => (
  <section className="border-t bg-secondary/20 py-24 md:py-32">
    <div className="mx-auto max-w-5xl px-6">
      <Reveal>
        <h2 className="mb-14 max-w-3xl text-4xl md:text-5xl">
          The technical window opened as the trust window closed.
        </h2>
      </Reveal>

      <Reveal>
        <div className="mb-14 rounded-3xl border bg-background p-8">
          <svg viewBox="0 0 400 160" className="h-40 w-full" aria-hidden="true">
            <path d="M10 20 L390 130" stroke="hsl(var(--muted-foreground))" strokeOpacity="0.6" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M10 130 L390 20" stroke="hsl(var(--primary))" strokeWidth="2.5" />
            <circle cx="200" cy="75" r="6" fill="hsl(var(--primary))" />
          </svg>
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>2020</span>
            <span className="font-medium text-primary">Now · Dino</span>
            <span>2026</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-6 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-2"><span className="h-px w-6 bg-muted-foreground/60" />Model costs decreasing</span>
            <span className="flex items-center gap-2"><span className="h-px w-6 bg-primary" />AI trust decreasing</span>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2">
        <Reveal>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-primary">Technology</div>
            <p className="mb-3 text-lg text-muted-foreground">
              Continuous per-person pattern evaluation became affordable enough to support a free product.
            </p>
            <p className="text-lg text-muted-foreground">
              On-device signals and lower model costs crossed a threshold that had not existed eighteen
              months earlier.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-primary">Culture</div>
            <p className="mb-3 text-lg text-muted-foreground">
              Sentiment toward AI among under-30s declined sharply during 2025 and 2026. Products that
              visibly feel like AI face growing resistance.
            </p>
            <p className="text-lg text-muted-foreground">
              Most competitors are making themselves look more like AI, not less.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={220}>
        <p className="mt-14 max-w-3xl text-2xl leading-snug md:text-3xl">
          We have the technical capability and the pre-existing trust, at the moment trust became the
          scarce resource.
        </p>
      </Reveal>
    </div>
  </section>
);

const WhereThisGoes = () => (
  <section className="relative overflow-hidden border-t bg-gradient-to-b from-background to-secondary/40 py-24 md:py-32">
    <img
      src={dinoFlowers}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute -right-6 bottom-0 h-40 opacity-70 md:h-56"
    />
    <div className="mx-auto max-w-5xl px-6">
      <Reveal>
        <SectionLabel>Where this goes</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mb-10 max-w-3xl text-4xl md:text-5xl">Personal intelligence for everyone in the world.</h2>
      </Reveal>

      <Reveal delay={200}>
        <p className="mb-6 max-w-2xl text-lg text-muted-foreground">
          Mental wellbeing is the beachhead because it is where a companion that genuinely knows someone
          matters most and is trusted least. But the form is larger than wellness.
        </p>
      </Reveal>
      <Reveal delay={280}>
        <p className="mb-12 max-w-2xl text-lg">
          A character with a face, a world, memory, judgment, and the ability to stay quiet is a durable
          form of personal intelligence.
        </p>
      </Reveal>

      <Reveal>
        <blockquote className="mb-10 border-l-2 border-primary/60 pl-6 text-2xl leading-snug md:text-3xl">
          The World Happiness Report measures countries. Dino is being built for the person inside the
          number.
        </blockquote>
      </Reveal>
      <Reveal delay={120}>
        <p className="max-w-2xl text-xl leading-snug md:text-2xl">
          The goal is the happiest product in the world. Not the most used. The one people are glad exists.
        </p>
      </Reveal>
    </div>
  </section>
);

const FinalStatement = () => (
  <section className="relative overflow-hidden border-t bg-foreground py-32 text-background md:py-44">
    <Starfield />
    <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" aria-hidden="true" />

    <div className="relative mx-auto max-w-4xl px-6 text-center">
      <Reveal>
        <p className="mb-10 text-3xl leading-snug md:text-5xl">
          Everyone else is building intelligence that waits to be asked.
        </p>
      </Reveal>
      <Reveal delay={500}>
        <p className="mb-16 text-3xl leading-snug md:text-5xl">We are building intelligence that notices.</p>
      </Reveal>
      <Reveal delay={800}>
        <div className="flex flex-col items-center gap-4">
          <AppStoreBadge variant="light" />
          <p className="text-xs opacity-70">iOS · free</p>
        </div>
      </Reveal>

      <Reveal delay={1000}>
        <div className="mt-16 rounded-2xl border border-background/20 bg-background/5 p-5 text-sm">
          <p className="mb-1 opacity-90">If you or someone you know is in crisis</p>
          <p className="opacity-70">
            Please reach out to a trained counselor.{" "}
            <Link to="/hotlines" className="underline underline-offset-4 hover:opacity-100">
              View crisis hotlines →
            </Link>
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

const PartnersBand = () => (
  <section className="border-t bg-background py-20 md:py-24">
    <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
      <div className="max-w-xl">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.24em] text-primary">
          Press · Investors · Partners
        </p>
        <h3 className="text-2xl md:text-3xl">Building personal intelligence people can actually feel.</h3>
      </div>
      <div className="flex flex-col gap-3 md:items-end">
        <a
          href="https://cal.com/vikassabbi/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Book a 30-min call <ArrowUpRight className="ml-2 h-4 w-4" />
        </a>
        <Link
          to="/partners"
          className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Or learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <>
      <SEO
        title="Dino — Personal intelligence for everyone"
        description="A character that learns you, notices when something changes, and knows when to stay quiet. Personal intelligence with a face, starting with mental wellbeing. Free on iOS."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Dino Initiative",
          url: "https://dinoinitiative.com",
        }}
      />

      <Hero />
      <Problem />
      <Collapsed />
      <AlgorithmicTrap />
      <NotUnplug />
      <AIRejection />
      <OneParagraph />
      <Solution />
      <PreExistingTrust />
      <Inversion />
      <ReachesFirst />
      <Restraint />
      <Live />
      <WhyUs />
      <Team />
      <WhyNow />
      <WhereThisGoes />
      <PartnersBand />
      <FinalStatement />

      <section className="flex justify-center bg-background py-10">
        <img
          src={flowerYellow}
          alt="Smiling yellow flower"
          width={128}
          height={128}
          loading="lazy"
          className="w-24 origin-bottom animate-swing md:w-32"
        />
      </section>
    </>
  );
};

export default Index;
