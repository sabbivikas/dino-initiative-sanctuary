import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Sparkles,
  Wind,
  Heart,
  LifeBuoy,
  AlertTriangle,
  Mail,
} from "lucide-react";
import screen01 from "@/assets/app-screen-01.png";
import screen02 from "@/assets/app-screen-02.png";
import screen03 from "@/assets/app-screen-03.png";
import screen04 from "@/assets/app-screen-04.jpg";
import screen05 from "@/assets/app-screen-05.jpg";
import screen06 from "@/assets/app-screen-06.png";

const screenshots = [
  { src: screen01, alt: "Dino Initiative home screen with daily check-in and mood cards" },
  { src: screen02, alt: "Emotional weather check-in screen" },
  { src: screen03, alt: "Breathe with Dino guided breathing screen" },
  { src: screen04, alt: "Gratitude jar with collected keepsakes" },
  { src: screen05, alt: "Journal screen with recent memory cards" },
  { src: screen06, alt: "Your garden growth tracking screen" },
];

const features = [
  {
    icon: Cloud,
    title: "Daily Emotional Check-Ins",
    text: "Notice how you feel each day through simple emotional weather check-ins.",
  },
  {
    icon: Sparkles,
    title: "Gratitude Jar",
    text: "Collect small moments of thankfulness and revisit them whenever you need comfort.",
  },
  {
    icon: Wind,
    title: "Breathing Exercises",
    text: "Calming breathing sessions to guide you through stressful or overwhelming moments.",
  },
  {
    icon: Heart,
    title: "Daily Affirmations",
    text: "Kind words you can save and return to on hard days.",
  },
  {
    icon: LifeBuoy,
    title: "Supportive Resources",
    text: "Mental health and emotional wellbeing resources for moments you need extra support.",
  },
];

const AppMarketing = () => {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      {/* Hero */}
      <section className="mb-16 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10">
          <Heart className="h-10 w-10 text-primary" />
        </div>
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">Dino</h1>
        <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          A gentle emotional wellness companion for daily check-ins, gratitude,
          breathing, affirmations, and small moments of self-care.
        </p>
        <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
          Dino helps you slow down, understand how you feel, and build simple
          daily habits that support your emotional wellbeing. It is designed to
          feel comforting, friendly, and easy to use.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-foreground">Download the Dino app — available on iOS</p>
          <a
            href="https://apps.apple.com/us/app/dino-initiative/id6763940737"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Dino Initiative on the App Store"
            className="inline-flex items-center gap-3 rounded-xl bg-foreground px-5 py-3 text-background transition-opacity hover:opacity-90"
          >
            <svg viewBox="0 0 384 512" className="h-7 w-7 fill-current" aria-hidden="true">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM260 110.3c25.1-29.8 22.8-56.9 22-66.3-22.1 1.3-47.7 15.1-62.3 32-16.1 18.1-25.6 40.5-23.6 65.8 23.9 1.9 45.7-10.4 63.9-31.5z"/>
            </svg>
            <span className="flex flex-col items-start leading-tight">
              <span className="text-[10px] uppercase tracking-wide opacity-80">Download on the</span>
              <span className="text-base font-semibold">App Store</span>
            </span>
          </a>
        </div>
      </section>

      {/* Screenshots */}
      <section className="mb-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {screenshots.map(({ src, alt }) => (
            <div
              key={src}
              className="overflow-hidden rounded-2xl border border-border/60 bg-secondary/30"
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          A look inside Dino
        </p>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">
          What Dino offers
        </h2>
        <div className="space-y-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-border/60 bg-card p-5 transition-colors hover:bg-secondary/40"
            >
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-medium">{title}</h3>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Important Note */}
      <section className="mb-10 rounded-lg border border-border/60 bg-secondary/40 p-5">
        <div className="mb-2 flex items-center gap-2 font-medium">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          Important Note
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Dino is not a replacement for therapy, medical advice, emergency care,
          or professional mental health treatment. It is a gentle companion for
          everyday reflection, comfort, and self-care.
        </p>
      </section>

      {/* Support */}
      <section className="rounded-lg border border-border/60 p-5 text-center">
        <h2 className="mb-2 text-xl font-medium">Need help?</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Visit our support page or email us anytime.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="outline">
            <Link to="/support">Visit Support</Link>
          </Button>
          <Button asChild>
            <a href="mailto:Dinoinitiativesupport@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AppMarketing;
