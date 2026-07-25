import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Mail } from "lucide-react";
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

const capabilities = [
  {
    title: "Learns your emotional patterns",
    text: "Simple check ins and reflections become a picture of what you actually feel over time, on your terms.",
  },
  {
    title: "Remembers what matters",
    text: "The context you share sticks around and becomes useful, instead of disappearing at the end of the session.",
  },
  {
    title: "Notices what changes",
    text: "Dino compares you with your own baseline. It sees when something shifts, not just when something looks unusual to a generic model.",
  },
  {
    title: "Reaches out with intent",
    text: "Pattern based check ins mean Dino shows up when a real signal warrants it, not to keep you inside the app.",
  },
  {
    title: "Offers help that fits",
    text: "Breathing, journaling, gratitude, recommendations, and supportive resources are tools Dino can use when they are actually useful.",
  },
  {
    title: "Stays quiet on purpose",
    text: "Most of the time Dino should decide you are doing fine and leave you alone. Restraint is the point.",
  },
];

const AppMarketing = () => {
  return (
    <>
      <SEO
        title="The Dino App — Personal intelligence, in your pocket"
        description="Dino is a character led personal intelligence for iOS. It learns your patterns, remembers what matters, and quietly looks out for you."
        path="/app"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Dino",
          operatingSystem: "iOS",
          applicationCategory: "LifestyleApplication",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          downloadUrl: "https://apps.apple.com/us/app/dino-initiative/id6763940737",
        }}
      />
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      {/* Hero */}
      <section className="mb-16 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Personal intelligence with a face
        </p>
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">Meet Dino.</h1>
        <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          A character led personal intelligence that learns your patterns, remembers what matters,
          and looks out for you, starting with your emotional wellbeing.
        </p>
        <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
          You share naturally through check ins, reflections, and small moments. Dino connects those
          signals over time and brings context back when it can actually help.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-foreground">Available on iOS</p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Dino on the App Store"
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
              <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Inside Dino: a character, a world, and personal intelligence underneath.
        </p>
      </section>

      {/* Capabilities */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">What Dino does</h2>
        <div className="space-y-4">
          {capabilities.map(({ title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-border/60 bg-card p-5 transition-colors hover:bg-secondary/40"
            >
              <h3 className="mb-2 text-xl font-medium">{title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Where we start */}
      <section className="mb-16 rounded-2xl border bg-secondary/30 p-8 md:p-10">
        <h2 className="mb-3 text-2xl font-semibold md:text-3xl">Starting with wellbeing</h2>
        <p className="leading-relaxed text-muted-foreground">
          Mental wellbeing is the first domain because it is where being understood matters most
          and trust is hardest to earn. If personal intelligence works here, it can work anywhere
          in your life. That is where Dino is going.
        </p>
      </section>

      {/* Important Note */}
      <section className="mb-10 rounded-lg border border-border/60 bg-secondary/40 p-5">
        <div className="mb-2 flex items-center gap-2 font-medium">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          Important Note
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Dino is not a replacement for therapy, medical advice, emergency care, or professional
          mental health treatment. It is a personal companion for everyday reflection, context, and
          care.
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
    </>
  );
};

export default AppMarketing;
