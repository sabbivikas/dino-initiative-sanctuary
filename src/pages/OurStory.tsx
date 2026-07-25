import dinoBlueberry from "@/assets/dino-blueberry.png";
import dinoFriends from "@/assets/dino-friends.png";
import dinoFlowers from "@/assets/dino-flowers.png";
import dinoComfort from "@/assets/dino-comfort.png";
import flowerImg from "@/assets/flower-smile.png";
import flowerBlue from "@/assets/flower-smile-blue.png";
import flowerYellow from "@/assets/flower-smile-yellow.png";
import dinoMeditation from "@/assets/dino-meditation.png";
import SEO from "@/components/SEO";

const sections = [
  {
    text: "Some struggles are invisible.",
    large: true,
  },
  {
    text: "A person can be bright, active, and smiling through everyday life, while quietly carrying feelings no one else can see. Many people learn to hide their pain behind strength, to look okay even when they are hurting inside.",
  },
  {
    text: "Dino began as a small companion. A character with a face, a voice, and a world you could return to on hard days. What started as comfort quickly showed us something bigger. When people trust a character, they share what is really going on. And when they share what is really going on, software can finally do something useful.",
  },
  {
    text: "So the character grew a memory. It began to notice patterns, remember what mattered, and understand each person against their own baseline. The warmth stayed on the surface. Personal intelligence formed underneath.",
  },
  {
    text: "That is what Dino is becoming. A character led personal intelligence. A friend on the outside, real understanding on the inside. Mental wellbeing is where we start. It is not where the direction ends.",
  },
];

const CurvedArrow = ({ flip = false }: { flip?: boolean }) => (
  <div className={`flex justify-center py-6 ${flip ? "scale-x-[-1]" : ""}`}>
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

const dinoImages = [dinoBlueberry, dinoFriends, dinoFlowers, dinoComfort];

const OurStory = () => {
  return (
    <>
      <SEO
        title="Our Story"
        description="Dino began as a character people could return to. It is becoming a personal intelligence that understands each person against their own baseline, starting with mental wellbeing."
        path="/our-story"
      />
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-32">
      <h1 className="mb-16 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        Our Story
      </h1>

      {sections.map((section, i) => (
        <div key={i}>
          <section className="text-center">
            <div
              className={`flex items-center gap-6 ${
                dinoImages[i]
                  ? i % 2 === 0
                    ? "flex-col md:flex-row"
                    : "flex-col md:flex-row-reverse"
                  : "flex-col"
              }`}
            >
              {dinoImages[i] && (
                <img
                  src={dinoImages[i]}
                  alt="Dino mascot"
                  className="h-20 w-20 shrink-0 object-contain md:h-28 md:w-28"
                />
              )}
              <p
                className={`flex-1 leading-relaxed text-muted-foreground ${
                  section.large
                    ? "text-2xl font-bold text-foreground md:text-3xl"
                    : "text-lg md:text-xl"
                }`}
              >
                {section.text}
              </p>
            </div>
          </section>
          {i < sections.length - 1 && <CurvedArrow flip={i % 2 === 1} />}
        </div>
      ))}

      {/* Mission Section */}
      <div className="mt-20 space-y-12 text-center">
        <CurvedArrow />

        <div className="flex flex-col items-center gap-6 md:flex-row">
          <img src={dinoMeditation} alt="Meditating dino" className="h-28 w-28 shrink-0 object-contain md:h-36 md:w-36" />
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Mission
            </h2>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              To build a personal intelligence people trust — one that understands each person on
              their own terms, shows up with warmth through a character, and knows when to help and
              when to leave you alone.
            </p>
          </div>
        </div>

        <CurvedArrow flip />

        <div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Vision
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            A future where personal intelligence is character led, human centered, and actually
            useful — starting with mental wellbeing, and growing into a companion that carries real
            context across the parts of life that matter.
          </p>
        </div>
      </div>

      {/* Garden of flowers at the bottom */}
      <div className="mt-16 flex items-end justify-center gap-4 md:gap-6">
        <img src={flowerImg} alt="" className="w-10 origin-bottom animate-swing opacity-60 md:w-14" style={{ animationDelay: "0.5s" }} />
        <img src={flowerYellow} alt="" className="w-14 origin-bottom animate-swing opacity-80 md:w-20" style={{ animationDelay: "1.2s" }} />
        <img src={flowerBlue} alt="" className="w-20 origin-bottom animate-swing md:w-28" />
        <img src={flowerImg} alt="" className="w-14 origin-bottom animate-swing opacity-80 md:w-20" style={{ animationDelay: "0.8s" }} />
        <img src={flowerImg} alt="" className="w-10 origin-bottom animate-swing opacity-60 md:w-14" style={{ animationDelay: "1.5s" }} />
      </div>
    </div>
    </>
  );
};

export default OurStory;
