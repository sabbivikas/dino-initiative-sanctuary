import dinoSitting from "@/assets/dino-sitting.png";

const sections = [
  {
    heading: "Our Story",
    body: "Dino Initiative began as a conversation between friends who had each, at different times, struggled to find mental health support that felt accessible and judgment-free. We noticed that the resources available were often clinical, hard to navigate, or hidden behind paywalls.",
  },
  {
    heading: "How it started",
    body: "We believe that checking in on your mental health should be as normal as checking the weather. Everyone deserves a gentle starting point — not a diagnosis, not a prescription, just a place to pause, breathe, and find the next small step.",
  },
  {
    heading: "What we believe",
    body: "We're building a library of evidence-informed resources, connecting people with crisis support worldwide, and creating a community of supporters who believe mental wellness should be free and open to all. This is just the beginning.",
  },
  {
    heading: "Where we're going",
    body: 'Why "Dino"? Because sometimes the things that feel biggest and scariest are the ones that need the most gentle attention. And because even the smallest creature can make a big difference.',
  },
  {
    heading: "The name",
    body: "We're not therapists. We're not a crisis line. We're a group of people who care deeply and want to make the first step easier for everyone.",
  },
];

const CurvedArrow = ({ flip = false }: { flip?: boolean }) => (
  <div className={`flex justify-center py-8 ${flip ? "scale-x-[-1]" : ""}`}>
    <svg
      width="80"
      height="120"
      viewBox="0 0 80 120"
      fill="none"
      className="text-primary opacity-40"
    >
      <path
        d="M40 0 C40 30, 70 30, 70 60 C70 90, 40 90, 40 120"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="6 6"
        fill="none"
      />
      <path
        d="M32 110 L40 122 L48 110"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  </div>
);

const OurStory = () => {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-32">
      {sections.map((section, i) => (
        <div key={i}>
          {i === 0 ? (
            <section className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-10">
              <div className="flex-1 text-center md:text-left">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  {section.heading}
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {section.body}
                </p>
              </div>
              <img
                src={dinoSitting}
                alt="Dino mascot sitting"
                className="w-40 shrink-0 md:w-52"
              />
            </section>
          ) : (
            <section className="text-center">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {section.heading}
              </h2>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {section.body}
              </p>
            </section>
          )}
          {i < sections.length - 1 && <CurvedArrow flip={i % 2 === 1} />}
        </div>
      ))}
    </div>
  );
};

export default OurStory;
