import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cloud, Sparkles, Wind, Heart, LifeBuoy, ArrowRight } from "lucide-react";
import flowerYellow from "@/assets/flower-smile-yellow.png";
import dinoComfort from "@/assets/dino-comfort.png";
import screen01 from "@/assets/app-screen-01.png";
import screen02 from "@/assets/app-screen-02.png";
import screen03 from "@/assets/app-screen-03.png";
import screen04 from "@/assets/app-screen-04.jpg";
import screen05 from "@/assets/app-screen-05.jpg";
import screen06 from "@/assets/app-screen-06.png";
import SEO from "@/components/SEO";
import { APP_STORE_URL } from "@/lib/appStore";

const screenshots = [
  { src: screen01, alt: "Dino Initiative home with daily check-in" },
  { src: screen02, alt: "Emotional weather check-in" },
  { src: screen03, alt: "Breathe with Dino guided breathing" },
  { src: screen04, alt: "Gratitude jar with kept moments" },
  { src: screen05, alt: "Journal with memory cards" },
  { src: screen06, alt: "Your garden growth tracking" },
];

const features = [
  { icon: Cloud, title: "Daily Check-Ins", text: "Notice how you feel with simple emotional weather check-ins." },
  { icon: Sparkles, title: "Gratitude Jar", text: "Collect small moments of thankfulness and revisit them." },
  { icon: Wind, title: "Breathing", text: "Calming sessions to guide you through overwhelming moments." },
  { icon: Heart, title: "Affirmations", text: "Kind words you can save and return to on hard days." },
  { icon: LifeBuoy, title: "Resources", text: "Free mental health resources and global crisis hotlines." },
];

const AppStoreBadge = ({ size = "md" }: { size?: "md" | "lg" }) => (
  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Download Dino Initiative on the App Store"
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
        title="Dino Initiative — Free mental wellness companion app"
        description="A gentle place to check in. Free iOS app for daily emotional check-ins, gratitude, breathing, and kind affirmations — plus global crisis hotlines and free mental health resources."
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
              Now on iOS · Free
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-[1.05] md:text-6xl">
              A gentle place to check in.
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Dino Initiative helps you slow down, notice how you feel, and build small daily habits
              that support your mental wellbeing — without pressure or judgment.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <AppStoreBadge size="lg" />
              <a
                href="#features"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
              >
                See what&apos;s inside <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Free forever · No account required</p>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-secondary/50 blur-2xl" aria-hidden="true" />
            <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-secondary/30 shadow-xl">
              <img
                src={screen01}
                alt="Dino Initiative home screen on iPhone"
                width={400}
                height={820}
                fetchpriority="high"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="mb-24 border-y py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-wider text-muted-foreground">
            <span>Built with care</span>
            <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/40 sm:inline-block" />
            <span>Free for everyone</span>
            <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/40 sm:inline-block" />
            <span>Privacy-first</span>
            <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/40 sm:inline-block" />
            <span>No ads · No tracking</span>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mb-24">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">What&apos;s inside Dino</h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Small, gentle tools for everyday emotional wellbeing.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:bg-secondary/40"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1.5 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshot gallery */}
        <section className="mb-24">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">A look inside</h2>
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

        {/* Mission */}
        <section className="mb-24 grid items-center gap-10 rounded-3xl border bg-secondary/30 p-8 md:grid-cols-[auto_1fr] md:p-12">
          <img
            src={dinoComfort}
            alt="Dino offering comfort"
            width={160}
            height={160}
            loading="lazy"
            className="mx-auto h-32 w-32 object-contain md:h-40 md:w-40"
          />
          <div className="text-center md:text-left">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Why we made Dino</h2>
            <p className="mb-3 leading-relaxed text-muted-foreground">
              We believe everyone deserves access to support — no barriers, no judgment. Our resources
              are created with care and grounded in evidence-based practices.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              You are not alone, and reaching out is a sign of strength.
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

        {/* Crisis note */}
        <section className="mb-24 rounded-md border border-primary/30 px-6 py-5 text-center">
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
          <h2 className="mx-auto mb-3 max-w-xl text-3xl font-bold md:text-4xl">
            Take Dino with you, everywhere.
          </h2>
          <p className="mx-auto mb-6 max-w-md text-sm opacity-80">
            Daily check-ins, gratitude, breathing, and gentle affirmations — in your pocket.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Dino Initiative on the App Store"
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
            <p className="text-xs opacity-70">Free · iOS</p>
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
