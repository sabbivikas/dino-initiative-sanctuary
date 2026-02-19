import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const topics = [
  {
    title: "Anxiety",
    anchor: "anxiety",
    tools: [
      "Try box breathing: inhale 4 seconds, hold 4, exhale 4, hold 4.",
      "Ground yourself with the 5-4-3-2-1 technique: name 5 things you see, 4 you hear, 3 you can touch, 2 you smell, 1 you taste.",
      "Write down your worries and set a 10-minute 'worry window' — then set them aside.",
    ],
    prompt: "What does safety feel like in my body? When was the last time I felt it?",
    reach: "If anxiety is affecting your sleep, appetite, or ability to work for more than two weeks, consider speaking with a mental health professional.",
  },
  {
    title: "Low mood",
    anchor: "mood",
    tools: [
      "Step outside for a 10-minute walk, even if you don't feel like it.",
      "Reach out to one person today — a text counts.",
      "Do one small thing that used to bring you joy, without pressure to enjoy it.",
    ],
    prompt: "What would I say to a friend feeling the way I feel right now?",
    reach: "If low mood persists most days for two weeks or more, or if you have thoughts of self-harm, please reach out to a professional or crisis line.",
  },
  {
    title: "Stress",
    anchor: "stress",
    tools: [
      "Identify one thing you can control right now and take a small action on it.",
      "Try a body scan meditation — slowly check in from head to toe.",
      "Break your to-do list into three: must do, could do, can wait.",
    ],
    prompt: "Where in my life am I saying yes when I want to say no?",
    reach: "If stress is causing physical symptoms like headaches, chest tightness, or stomach issues regularly, speak with a healthcare provider.",
  },
  {
    title: "Loneliness",
    anchor: "social",
    tools: [
      "Send a short message to someone you haven't spoken to in a while.",
      "Visit a public space — a library, park, or café — even without plans to socialise.",
      "Join an online community around a hobby or interest.",
    ],
    prompt: "What kind of connection am I really longing for right now?",
    reach: "If loneliness feels overwhelming or leads to hopelessness, talking to a counselor can help you find paths to connection.",
  },
  {
    title: "Sleep",
    anchor: "sleep",
    tools: [
      "Set a consistent bedtime and wake time — even on weekends.",
      "Avoid screens for 30 minutes before bed; try reading or stretching instead.",
      "Write a short list of tomorrow's tasks before bed to clear your mind.",
    ],
    prompt: "What thoughts tend to visit me at night? What are they trying to tell me?",
    reach: "If sleep issues persist beyond a few weeks or you feel exhausted despite rest, consult a healthcare professional.",
  },
  {
    title: "Grief",
    anchor: "grief",
    tools: [
      "Allow yourself to feel without judging the emotion.",
      "Create a small ritual to honour what you've lost — light a candle, write a letter.",
      "Talk about the person or thing you've lost with someone who understands.",
    ],
    prompt: "What do I wish I could say that I haven't said yet?",
    reach: "If grief feels stuck or is interfering with daily life after several months, a therapist specialising in grief can offer support.",
  },
  {
    title: "Self-Worth",
    anchor: "selfworth",
    tools: [
      "Write down one thing you're genuinely proud of — no matter how small.",
      "Replace one self-critical thought today with something kinder.",
      "Accept the next compliment you receive without deflecting it.",
    ],
    prompt: "If I spoke to myself the way I speak to my best friend, what would I say?",
    reach: "If persistent feelings of worthlessness are affecting your daily life or relationships, a therapist can help you rebuild a healthier self-image.",
  },
  {
    title: "Focus",
    anchor: "focus",
    tools: [
      "Use a 25-minute focus timer with a 5-minute break (Pomodoro).",
      "Close unnecessary tabs and silence notifications for 30 minutes.",
      "Write the single most important task for today and start there.",
    ],
    prompt: "What is stealing my attention, and what would I rather give it to?",
    reach: "If focus difficulties are chronic and impact work, school, or relationships, consider an assessment for attention-related conditions.",
  },
];

const Resources = () => (
  <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
    <h1 className="mb-2 text-3xl font-bold md:text-4xl">Resources</h1>
    <p className="mb-10 text-muted-foreground">
      Explore topics at your own pace. Each section includes practical tools, a journaling prompt, and guidance on when to seek more support.
    </p>

    <Accordion type="single" collapsible className="w-full">
      {topics.map((topic) => (
        <AccordionItem key={topic.title} value={topic.title} id={topic.anchor}>
          <AccordionTrigger className="text-lg">{topic.title}</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-5 pb-2">
              <div>
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">Coping tools</h3>
                <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed">
                  {topic.tools.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">Journaling prompt</h3>
                <p className="text-sm italic leading-relaxed">"{topic.prompt}"</p>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">When to reach out</h3>
                <p className="text-sm leading-relaxed">{topic.reach}</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default Resources;
