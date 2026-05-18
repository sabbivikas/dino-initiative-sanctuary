import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import flowerYellow from "@/assets/flower-smile-yellow.png";

const Index = () => {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      {/* Hero */}
      <section className="mb-20 text-center">
        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
          A gentle place to check in.
        </h1>
        <p className="mx-auto mb-8 max-w-md text-lg text-muted-foreground">
          Dino Initiative offers free, accessible mental health resources and crisis support for anyone who needs a moment of care.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link to="/resources">Resources</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/hotlines">Hotlines</Link>
          </Button>
        </div>
        <div className="mt-10 flex flex-col items-center gap-3">
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

      {/* Values */}
      <section className="mb-20 space-y-4 text-center text-muted-foreground">
        <p>We believe everyone deserves access to support — no barriers, no judgment.</p>
        <p>Our resources are created with care and grounded in evidence-based practices.</p>
        <p>You are not alone, and reaching out is a sign of strength.</p>
      </section>

      {/* Crisis note */}
      <section className="mb-20 rounded-md border border-primary/30 px-6 py-5 text-center">
        <p className="mb-2 font-medium">If you or someone you know is in crisis</p>
        <p className="text-sm text-muted-foreground">
          Please reach out to a trained counselor.{" "}
          <Link to="/hotlines" className="text-primary underline underline-offset-4 hover:text-primary/80">
            View crisis hotlines →
          </Link>
        </p>
      </section>

      {/* Yellow flower */}
      <section className="flex justify-center py-4">
        <img
          src={flowerYellow}
          alt="Smiling yellow flower"
          width={128}
          height={128}
          loading="lazy"
          decoding="async"
          className="w-24 origin-bottom animate-swing md:w-32"
        />
      </section>
    </div>
  );
};

export default Index;
