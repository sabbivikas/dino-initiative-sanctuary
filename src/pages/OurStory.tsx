import { useState, useCallback } from "react";
import TypewriterText from "@/components/TypewriterText";
import FadeInSection from "@/components/FadeInSection";

const sections = [
  {
    heading: "How it started",
    body: "Dino Initiative began as a conversation between friends who had each, at different times, struggled to find mental health support that felt accessible and judgment-free. We noticed that the resources available were often clinical, hard to navigate, or hidden behind paywalls.",
  },
  {
    heading: "What we believe",
    body: "We believe that checking in on your mental health should be as normal as checking the weather. Everyone deserves a gentle starting point — not a diagnosis, not a prescription, just a place to pause, breathe, and find the next small step.",
  },
  {
    heading: "Where we're going",
    body: "We're building a library of evidence-informed resources, connecting people with crisis support worldwide, and creating a community of supporters who believe mental wellness should be free and open to all. This is just the beginning.",
  },
  {
    heading: "The name",
    body: 'Why "Dino"? Because sometimes the things that feel biggest and scariest are the ones that need the most gentle attention. And because even the smallest creature can make a big difference.',
  },
];

const OurStory = () => {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <FadeInSection>
        {(visible) => (
          <TypewriterText
            text="Our Story"
            speed={50}
            active={visible}
            as="h2"
            className="mb-10 text-3xl font-bold md:text-4xl"
          />
        )}
      </FadeInSection>

      <div className="space-y-8 leading-relaxed text-muted-foreground">
        {sections.map((section, i) => (
          <SectionBlock key={i} heading={section.heading} body={section.body} />
        ))}
      </div>
    </div>
  );
};

const SectionBlock = ({ heading, body }: { heading: string; body: string }) => {
  const [headingDone, setHeadingDone] = useState(false);
  const onHeadingComplete = useCallback(() => setHeadingDone(true), []);

  return (
    <FadeInSection>
      {(visible) => (
        <section>
          <TypewriterText
            text={heading}
            speed={30}
            active={visible}
            onComplete={onHeadingComplete}
            as="h2"
            className="mb-2 text-xl font-semibold text-foreground"
          />
          <TypewriterText
            text={body}
            speed={15}
            active={headingDone}
            as="p"
            className="text-muted-foreground"
          />
        </section>
      )}
    </FadeInSection>
  );
};

export default OurStory;
