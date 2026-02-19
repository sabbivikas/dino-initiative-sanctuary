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
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link to="/resources">Resources</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/hotlines">Hotlines</Link>
          </Button>
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
          className="w-24 origin-bottom animate-swing md:w-32"
        />
      </section>
    </div>
  );
};

export default Index;
