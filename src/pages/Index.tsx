import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import flowerImg from "@/assets/flower-smile.png";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Thank you", description: "You've joined the early supporters list." });
    setEmail("");
  };

  return (
    <div className="relative mx-auto max-w-2xl px-6 py-16 md:py-24">
      {/* Decorative flowers */}
      <img
        src={flowerImg}
        alt=""
        className="pointer-events-none absolute -left-10 top-12 hidden w-16 origin-bottom animate-swing opacity-60 md:block"
      />
      <img
        src={flowerImg}
        alt=""
        className="pointer-events-none absolute -right-10 top-64 hidden w-14 origin-bottom animate-swing opacity-50 md:block"
        style={{ animationDelay: "1.5s" }}
      />
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

      {/* Email signup */}
      <section className="text-center">
        <h2 className="mb-2 text-xl font-semibold">Join the early supporters list</h2>
        <p className="mb-6 text-sm text-muted-foreground">Stay updated as we grow.</p>
        <form onSubmit={handleSignup} className="mx-auto flex max-w-sm gap-3">
          <Input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Join</Button>
        </form>
      </section>
    </div>
  );
};

export default Index;
