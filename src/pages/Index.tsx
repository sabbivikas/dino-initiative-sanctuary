import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import flowerYellow from "@/assets/flower-smile-yellow.png";
import dinoComfort from "@/assets/dino-comfort.png";
import dinoFriends from "@/assets/dino-friends.png";
import screen01 from "@/assets/app-screen-01.png";
import screen02 from "@/assets/app-screen-02.png";
import screen03 from "@/assets/app-screen-03.png";
import screen04 from "@/assets/app-screen-04.jpg";
import screen05 from "@/assets/app-screen-05.jpg";
import screen06 from "@/assets/app-screen-06.png";
import SEO from "@/components/SEO";
import { APP_STORE_URL } from "@/lib/appStore";

const screenshots = [
  { src: screen01, alt: "Dino home with a daily check-in card" },
  { src: screen02, alt: "Emotional weather check-in inside the Dino app" },
  { src: screen03, alt: "Guided breathing session with Dino" },
  { src: screen04, alt: "Gratitude jar of small kept moments" },
  { src: screen05, alt: "Journal with recent reflection cards" },
  { src: screen06, alt: "A slowly growing garden that tracks personal rhythms" },
];

const trust = [
  { value: "358K+", label: "Social community" },
  { value: "37", label: "Countries" },
  { value: "Baseline", label: "Built around yours" },
  { value: "Quiet", label: "When it should be" },
];

const capabilities = [
  {
    title: "Understand your patterns",
    text: "Dino notices recurring feelings, causes, habits, and changes over time.",
  },
  {
    title: "Remember what matters",
    text: "The things you share become useful context, not entries that disappear after one session.",
  },
  {
    title: "Notice what changes",
    text: "Dino compares you with your own baseline, not a generic version of what someone should feel.",
  },
  {
    title: "Know when to show up",
    text: "Pattern based reaching out helps Dino respond when something meaningful shifts.",
  },
  {
    title: "Know when to stay quiet",
    text: "Dino is designed not to chase attention or talk just to keep you inside the app.",
  },
  {
    title: "Help in ways that fit",
    text: "Breathing, journaling, gratitude, recommendations, and supportive resources become tools Dino can use when they are actually useful.",
  },
];

const AppStoreBadge = ({ size = "md" }: { size?: "md" | "lg" }) => (
  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Download Dino on the App Store"
    className={`inline-flex items-center gap-3 rounded-xl bg-foreground text-background transition-opacity hover:opacity-90 ${
      size === "lg" ? "px-6 py-3.5" : "px-5 py-3"
    }`}
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

const Index = () => {
  return (
    <>
      <SEO
        title="Dino — Personal intelligence with a face"
        description="Dino is a character led personal intelligence that learns your patterns, remembers what matters, and looks out for you, starting with mental wellbeing."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Dino Initiative",
          url: "https://dinoinitiative.com",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        {/* Hero */}
        <section className="mb-24 grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Personal intelligence with a face.
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-[1.05] md:text-6xl">
              Dino gets to know you.
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Dino learns from how you feel, what you write, the signals you choose to share, what
              keeps coming back, and what actually helps. It turns that into personal intelligence
              that grows with you, inside a world that feels more like visiting someone than opening
              an app.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <AppStoreBadge size="lg" />
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
              >
                See how Dino works <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-secondary/50 blur-2xl" aria-hidden="true" />
            <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-secondary/30 shadow-xl">
              <img
                src={screen01}
                alt="Dino home screen on iPhone"
                width={400}
                height={820}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Relationship & world */}
        <section className="mb-24 grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">It feels like visiting someone.</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              You do not open Dino to face another empty text box. You enter a world with a creature
              who has a personality, changing weather, lanterns, and a globe showing other people
              feeling things alongside you. Check ins and reflections feel like small rituals, not
              forms to complete.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              The character and the world are not decoration. They are how people build trust and
              return naturally, without being pulled.
            </p>
          </div>
          <img
            src={dinoFriends}
            alt="Dino character standing beside two friends"
            width={220}
            height={220}
            loading="lazy"
            className="mx-auto h-40 w-40 object-contain md:h-52 md:w-52"
          />
        </section>

        {/* Trust strip */}
        <section className="mb-24 border-y py-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {trust.map((t) => (
              <div key={t.label} className="text-center">
                <div className="text-2xl font-bold md:text-3xl">{t.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{t.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Intelligence */}
        <section className="mb-24">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              The intelligence lives underneath the warmth.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Dino connects what you share over time. It notices recurring feelings, causes, habits,
              changes, and the moments that seem to help. The result is not a generic answer. It is
              context that belongs to you.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              "Emotional check ins",
              "Journaling and reflections",
              "Gratitude entries",
              "Recurring causes and feelings",
              "What has helped before",
              "The signals you choose to share",
            ].map((s) => (
              <div
                key={s}
                className="rounded-xl border border-border/60 bg-card px-4 py-3 text-center text-sm text-muted-foreground"
              >
                {s}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
            Everything is understood against your own baseline, not a generic average of who you
            should be.
          </p>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mb-24">
          <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">How Dino works</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "You share naturally",
                body: "Through check ins, journaling, gratitude, and small reflections. No forms, no pressure.",
              },
              {
                n: "02",
                title: "Dino connects the patterns",
                body: "It notices what repeats, what changes, what affects you, and what seems to help.",
              },
              {
                n: "03",
                title: "Dino brings context back",
                body: "It reaches out or offers something useful when a real pattern warrants it.",
              },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary">{s.n}</div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Restraint */}
        <section className="mb-24 rounded-3xl border bg-secondary/30 p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              It also knows when to leave you alone.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Most companion products are built to keep the conversation going. Dino is built to
              earn trust by not overreaching. Most of the time, it can decide you are doing fine and
              stay quiet. When it does show up, it should feel considered, not like another app
              trying to pull you back in.
            </p>
          </div>
        </section>

        {/* What Dino can do today */}
        <section className="mb-24">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">What Dino can do today</h2>
            <p className="text-muted-foreground">
              Shipped, in your pocket, working right now.
            </p>
          </div>
          <ul className="mx-auto max-w-2xl space-y-3">
            {[
              "Learn from emotional check ins and reflections",
              "Identify recurring personal patterns",
              "Create weekly rhythms and insights",
              "Reach out based on meaningful patterns",
              "Remember useful personal context",
              "Offer breathing, journaling, gratitude, recommendations, and supportive resources when relevant",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-border/60 bg-card px-4 py-3 text-sm leading-relaxed"
              >
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground">
            Pattern based reaching out is live. The fuller vision (predicting a difficult day in
            advance, showing up the night before) is what Dino is building toward.
          </p>
        </section>

        {/* Capability cards */}
        <section id="features" className="mb-24">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">What makes Dino different</h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Character on the surface. Personal intelligence underneath.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:bg-secondary/40"
              >
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshot gallery */}
        <section className="mb-24">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">A look inside the world</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {screenshots.map(({ src, alt }) => (
              <div
                key={src}
                className="overflow-hidden rounded-2xl border border-border/60 bg-secondary/30"
              >
                <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Why we made Dino */}
        <section className="mb-24 grid items-center gap-10 rounded-3xl border bg-secondary/30 p-8 md:grid-cols-[auto_1fr] md:p-12">
          <img
            src={dinoComfort}
            alt="Dino sitting close, offering quiet company"
            width={160}
            height={160}
            loading="lazy"
            className="mx-auto h-32 w-32 object-contain md:h-40 md:w-40"
          />
          <div className="text-center md:text-left">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Why we made Dino</h2>
            <p className="mb-3 leading-relaxed text-muted-foreground">
              Most software waits for a command, gives an answer, and forgets the person. Dino is
              being built differently. It carries context, notices patterns, and responds with
              warmth through a character people can actually care about.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Mental wellbeing is where we are starting, because it is where being understood
              matters most and trust is hardest to earn. The direction is larger, personal
              intelligence that lives with you.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
              <Button asChild variant="outline">
                <Link to="/our-story">Our story</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/get-involved">Get involved →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Partners / Investors inbound */}
        <section className="mb-24 flex flex-col items-start gap-6 rounded-3xl border bg-secondary/30 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-xl">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              For Press · Investors · Partners
            </p>
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              Building personal intelligence people can actually feel.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Dino combines character, emotional design, and personal intelligence to create
              something people form a real relationship with. We are speaking with aligned
              investors, researchers, partners, and organizations interested in the future of
              personal intelligence and human centered AI.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3">
            <Button asChild size="lg" className="shrink-0">
              <a href="https://cal.com/vikassabbi/30min" target="_blank" rel="noopener noreferrer">
                Book a 30-min call <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="shrink-0">
              <Link to="/partners">
                Or learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Crisis note (moved lower) */}
        <section className="mb-16 rounded-md border border-primary/30 px-6 py-5 text-center">
          <p className="mb-2 font-medium">If you or someone you know is in crisis</p>
          <p className="text-sm text-muted-foreground">
            Please reach out to a trained counselor.{" "}
            <Link to="/hotlines" className="text-primary underline underline-offset-4 hover:text-primary/80">
              View crisis hotlines →
            </Link>
          </p>
        </section>

        {/* Final CTA */}
        <section className="mb-20 rounded-3xl border bg-foreground px-6 py-12 text-center text-background md:py-16">
          <h2 className="mx-auto mb-3 max-w-2xl text-3xl font-bold md:text-4xl">
            Meet the intelligence that grows with you.
          </h2>
          <p className="mx-auto mb-6 max-w-lg text-sm opacity-80">
            A character to return to, a world that remembers you, and personal intelligence that
            becomes more useful over time.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Dino on the App Store"
              className="inline-flex items-center gap-3 rounded-xl bg-background px-6 py-3.5 text-foreground transition-opacity hover:opacity-90"
            >
              <svg viewBox="0 0 384 512" className="h-8 w-8 fill-current" aria-hidden="true">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM260 110.3c25.1-29.8 22.8-56.9 22-66.3-22.1 1.3-47.7 15.1-62.3 32-16.1 18.1-25.6 40.5-23.6 65.8 23.9 1.9 45.7-10.4 63.9-31.5z" />
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-wide opacity-80">Download on the</span>
                <span className="text-base font-semibold">App Store</span>
              </span>
            </a>
            <p className="text-xs opacity-70">iOS, free</p>
          </div>
        </section>

        {/* Flower */}
        <section className="flex justify-center py-4">
          <img
            src={flowerYellow}
            alt="Smiling yellow flower"
            width={128}
            height={128}
            loading="lazy"
            className="w-24 origin-bottom animate-swing md:w-32"
          />
        </section>
      </div>
    </>
  );
};

export default Index;
