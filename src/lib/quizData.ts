export type Category = "Mood" | "Anxiety" | "Stress" | "Sleep" | "Social" | "SelfWorth" | "Focus";

export interface Question {
  id: number;
  category: Category;
  prompt: string;
}

export const CATEGORIES: Category[] = ["Mood", "Anxiety", "Stress", "Sleep", "Social", "SelfWorth", "Focus"];

export const CATEGORY_LABELS: Record<Category, string> = {
  Mood: "Mood",
  Anxiety: "Anxiety",
  Stress: "Stress",
  Sleep: "Sleep",
  Social: "Social Connection",
  SelfWorth: "Self-Worth",
  Focus: "Focus",
};

export const CATEGORY_ANCHORS: Record<Category, string> = {
  Mood: "#mood",
  Anxiety: "#anxiety",
  Stress: "#stress",
  Sleep: "#sleep",
  Social: "#social",
  SelfWorth: "#selfworth",
  Focus: "#focus",
};

export const SCALE_LABELS = ["Not at all", "A little", "Some days", "Often", "Nearly every day"] as const;

export const SAFETY_QUESTION = {
  prompt: "Have you had thoughts of harming yourself?",
  options: ["No", "Yes, sometimes", "Yes, often"] as const,
};

export const QUESTION_BANK: Question[] = [
  // Mood (9)
  { id: 1, category: "Mood", prompt: "I have felt down, sad, or hopeless." },
  { id: 2, category: "Mood", prompt: "I have lost interest in things I usually enjoy." },
  { id: 3, category: "Mood", prompt: "I have felt emotionally flat or numb." },
  { id: 4, category: "Mood", prompt: "I have cried more easily than usual." },
  { id: 5, category: "Mood", prompt: "I have felt a general sense of dissatisfaction." },
  { id: 6, category: "Mood", prompt: "I have had trouble feeling positive about the future." },
  { id: 7, category: "Mood", prompt: "I have felt irritable or easily frustrated." },
  { id: 8, category: "Mood", prompt: "I have felt a lack of motivation to start the day." },
  { id: 9, category: "Mood", prompt: "I have felt trapped in negative thought patterns." },

  // Anxiety (9)
  { id: 10, category: "Anxiety", prompt: "I have felt nervous, anxious, or on edge." },
  { id: 11, category: "Anxiety", prompt: "I have not been able to stop or control worrying." },
  { id: 12, category: "Anxiety", prompt: "I have worried too much about different things." },
  { id: 13, category: "Anxiety", prompt: "I have had trouble relaxing." },
  { id: 14, category: "Anxiety", prompt: "I have felt restless or unable to sit still." },
  { id: 15, category: "Anxiety", prompt: "I have felt afraid something awful might happen." },
  { id: 16, category: "Anxiety", prompt: "I have experienced a racing heartbeat without physical exertion." },
  { id: 17, category: "Anxiety", prompt: "I have avoided situations because of fear or worry." },
  { id: 18, category: "Anxiety", prompt: "I have had intrusive 'what if' thoughts." },

  // Stress (9)
  { id: 19, category: "Stress", prompt: "I have felt overwhelmed by my responsibilities." },
  { id: 20, category: "Stress", prompt: "I have felt unable to cope with the things I had to do." },
  { id: 21, category: "Stress", prompt: "I have felt tense or physically tight (jaw, shoulders, back)." },
  { id: 22, category: "Stress", prompt: "I have felt rushed or pressed for time." },
  { id: 23, category: "Stress", prompt: "I have had difficulty unwinding at the end of the day." },
  { id: 24, category: "Stress", prompt: "I have felt emotionally drained by daily demands." },
  { id: 25, category: "Stress", prompt: "I have snapped at others or overreacted to small things." },
  { id: 26, category: "Stress", prompt: "I have felt like I can't keep up with everything." },
  { id: 27, category: "Stress", prompt: "I have neglected self-care because I was too busy." },

  // Sleep (9)
  { id: 28, category: "Sleep", prompt: "I have had trouble falling asleep." },
  { id: 29, category: "Sleep", prompt: "I have woken up during the night and struggled to fall back asleep." },
  { id: 30, category: "Sleep", prompt: "I have felt tired even after a full night's sleep." },
  { id: 31, category: "Sleep", prompt: "I have relied on screens or scrolling to fall asleep." },
  { id: 32, category: "Sleep", prompt: "I have had restless or disturbing dreams." },
  { id: 33, category: "Sleep", prompt: "I have slept much more than usual to escape how I feel." },
  { id: 34, category: "Sleep", prompt: "I have had an inconsistent sleep schedule." },
  { id: 35, category: "Sleep", prompt: "I have felt groggy or unfocused in the morning." },
  { id: 36, category: "Sleep", prompt: "I have used substances (caffeine, alcohol) to manage sleep." },

  // Social (9)
  { id: 37, category: "Social", prompt: "I have felt lonely or disconnected from others." },
  { id: 38, category: "Social", prompt: "I have withdrawn from social activities or plans." },
  { id: 39, category: "Social", prompt: "I have felt like I have no one to talk to." },
  { id: 40, category: "Social", prompt: "I have felt misunderstood by the people around me." },
  { id: 41, category: "Social", prompt: "I have felt uncomfortable in social situations." },
  { id: 42, category: "Social", prompt: "I have avoided reaching out even when I wanted connection." },
  { id: 43, category: "Social", prompt: "I have felt like a burden to others." },
  { id: 44, category: "Social", prompt: "I have compared myself negatively to others on social media." },
  { id: 45, category: "Social", prompt: "I have felt excluded or left out." },

  // SelfWorth (9)
  { id: 46, category: "SelfWorth", prompt: "I have felt bad about myself or that I'm a failure." },
  { id: 47, category: "SelfWorth", prompt: "I have doubted my abilities or skills." },
  { id: 48, category: "SelfWorth", prompt: "I have been overly critical of myself." },
  { id: 49, category: "SelfWorth", prompt: "I have felt unworthy of good things happening to me." },
  { id: 50, category: "SelfWorth", prompt: "I have struggled to accept compliments." },
  { id: 51, category: "SelfWorth", prompt: "I have felt ashamed of who I am." },
  { id: 52, category: "SelfWorth", prompt: "I have felt like I'm not doing enough." },
  { id: 53, category: "SelfWorth", prompt: "I have avoided looking in the mirror or photos of myself." },
  { id: 54, category: "SelfWorth", prompt: "I have felt my voice or opinions don't matter." },

  // Focus (8)
  { id: 55, category: "Focus", prompt: "I have had trouble concentrating on tasks." },
  { id: 56, category: "Focus", prompt: "I have felt mentally foggy or unclear." },
  { id: 57, category: "Focus", prompt: "I have been easily distracted." },
  { id: 58, category: "Focus", prompt: "I have procrastinated more than usual." },
  { id: 59, category: "Focus", prompt: "I have had difficulty making decisions." },
  { id: 60, category: "Focus", prompt: "I have felt like my mind is always somewhere else." },
  { id: 61, category: "Focus", prompt: "I have started tasks but struggled to finish them." },
  { id: 62, category: "Focus", prompt: "I have forgotten things more often than usual." },
  { id: 63, category: "Focus", prompt: "I have felt unable to think clearly under pressure." },
];
