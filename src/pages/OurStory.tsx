import dinoBlueberry from "@/assets/dino-blueberry.png";
import dinoFriends from "@/assets/dino-friends.png";
import dinoFlowers from "@/assets/dino-flowers.png";
import dinoComfort from "@/assets/dino-comfort.png";
import flowerImg from "@/assets/flower-smile.png";
import flowerBlue from "@/assets/flower-smile-blue.png";

const sections = [
  {
    text: "Some struggles are invisible.",
    large: true,
  },
  {
    text: "A person can be bright, active, and smiling through everyday life, while quietly carrying feelings no one else can see. Many people learn to hide their pain behind strength, to look okay even when they are hurting inside.",
  },
  {
    text: "It is truly devastating how many people carry silent pain while appearing strong on the outside, and how many voices go unheard simply because suffering is invisible. Dino Initiative was created in honor of every person fighting quiet battles and for those whose struggles are often unseen.",
  },
  {
    text: "What began as grief slowly became a promise to listen more closely, speak more openly about mental health, and create a space where no one feels alone in their struggles.",
  },
  {
    text: "If this project can comfort even one person, encourage one conversation, or help someone choose to keep going, then its purpose continues through hope, kindness, and care.",
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

        <div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Mission
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            To create a safe and compassionate space where young people can learn about mental health, find trusted support, and feel seen, heard, and understood.
          </p>
        </div>

        <CurvedArrow flip />

        <div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Vision
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            We imagine a world where mental health is spoken about without fear or stigma — asking for help is seen as strength, not weakness — and no one has to struggle in silence. Dino Initiative exists to turn loss into light, to offer hope, connection, and support to anyone who needs it.
          </p>
        </div>
      </div>

      {/* Garden of flowers at the bottom */}
      <div className="mt-16 flex items-end justify-center gap-4 md:gap-6">
        <img src={flowerImg} alt="" className="w-10 origin-bottom animate-swing opacity-60 md:w-14" style={{ animationDelay: "0.5s" }} />
        <img src={flowerImg} alt="" className="w-14 origin-bottom animate-swing opacity-80 md:w-20" style={{ animationDelay: "1.2s" }} />
        <img src={flowerBlue} alt="" className="w-20 origin-bottom animate-swing md:w-28" />
        <img src={flowerImg} alt="" className="w-14 origin-bottom animate-swing opacity-80 md:w-20" style={{ animationDelay: "0.8s" }} />
        <img src={flowerImg} alt="" className="w-10 origin-bottom animate-swing opacity-60 md:w-14" style={{ animationDelay: "1.5s" }} />
      </div>
    </div>
  );
};

export default OurStory;
