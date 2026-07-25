import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Users, Newspaper, Handshake, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";

const CONTACT_EMAIL = "Dinoinitiativesupport@gmail.com";

const inboundTracks = [
  {
    icon: TrendingUp,
    title: "Investors",
    body: "We are building character led personal intelligence, starting with mental wellbeing. If you back long horizon consumer AI with a real product and a real community, we would like to talk.",
    cta: "Request our deck",
    subject: "Investor inquiry — Dino Initiative",
  },
  {
    icon: Newspaper,
    title: "Press & Media",
    body: "Interviews, founder commentary, product reviews, features on character led AI and personal intelligence. Press kit and assets on request.",
    cta: "Reach out to press",
    subject: "Press inquiry — Dino Initiative",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    body: "Researchers, clinicians, NGOs, universities, healthcare orgs, and brands aligned with human centered AI and accessible mental wellbeing.",
    cta: "Start a conversation",
    subject: "Partnership inquiry — Dino Initiative",
  },
  {
    icon: Users,
    title: "Talent & Advisors",
    body: "Deep expertise in clinical psychology, personal AI, memory and reasoning systems, AI safety, or consumer product design. We would love to meet you.",
    cta: "Introduce yourself",
    subject: "Talent / advisor inquiry — Dino Initiative",
  },
];

const highlights = [
  { value: "358K+", label: "Global community across socials" },
  { value: "37", label: "Countries with verified crisis support" },
  { value: "iOS", label: "Live on the App Store" },
  { value: "Baseline", label: "Learning against yours, not a generic model" },
];

const Partners = () => {
  const mailto = (subject: string) =>
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

  return (
    <>
      <SEO
        title="Partners & Investors — Dino Initiative"
        description="Press, investor, and partnership inquiries for Dino — a character led personal intelligence, starting with mental wellbeing. 358K+ community, live on iOS."
        path="/partners"
      />

      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        {/* Hero */}
        <section className="mb-20 max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            For Press · Investors · Partners
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-[1.05] md:text-6xl">
            Building character led personal intelligence.
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Dino is a personal intelligence with a face. It learns from what someone shares over
            time, understands them against their own baseline, and shows up with warmth through a
            character people build a real relationship with. We are starting with mental wellbeing
            because it is where being understood matters most, and where trust is hardest to earn.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Live on iOS, with a community of{" "}
            <span className="font-semibold text-foreground">358,000+</span> across socials and
            verified crisis support in 37 countries.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="https://cal.com/vikassabbi/30min" target="_blank" rel="noopener noreferrer">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Book a 30-min call
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={mailto("Investor inquiry — Dino Initiative")}>
                <Mail className="mr-2 h-4 w-4" />
                Email our team
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link to="/our-story">Read our story</Link>
            </Button>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-20 border-y py-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.label} className="text-center md:text-left">
                <div className="text-2xl font-bold md:text-3xl">{h.value}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Inbound tracks */}
        <section className="mb-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Let's talk</h2>
            <p className="text-muted-foreground">
              Pick the conversation that fits. We read every inbound message.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {inboundTracks.map(({ icon: Icon, title, body, cta, subject }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-border/60 bg-card p-7 transition-colors hover:bg-secondary/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <a
                  href={mailto(subject)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-70"
                >
                  {cta} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Thesis */}
        <section className="mb-20 rounded-3xl border bg-secondary/30 p-8 md:p-12">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">Why Dino, why now</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                The shift
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Software is moving from answering commands to holding personal context. The next
                consumer products will not just respond, they will understand a specific person.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                The wedge
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A character people trust, a world people return to, and personal intelligence that
                learns against each person's own baseline. Character is what turns capability into
                a relationship.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                The proof
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Live on iOS, a 358K+ community built with zero paid acquisition, verified crisis
                support in 37 countries, and pattern based reaching out already in the product.
              </p>
            </div>
          </div>
        </section>

        {/* Direct contact */}
        <section className="mb-12 rounded-3xl border bg-foreground px-6 py-12 text-center text-background md:py-16">
          <h2 className="mx-auto mb-3 max-w-xl text-3xl font-bold md:text-4xl">
            Talk to the team directly.
          </h2>
          <p className="mx-auto mb-7 max-w-md text-sm opacity-80">
            We respond personally to every press, investor, and partnership inquiry.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://cal.com/vikassabbi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              <ArrowUpRight className="h-4 w-4" />
              Book a 30-min call
            </a>
            <a
              href={mailto("Inquiry — Dino Initiative")}
              className="inline-flex items-center gap-2 rounded-xl border border-background/20 px-6 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partners;
