import { CATEGORIES, Category, QUESTION_BANK, Question, CATEGORY_LABELS, CATEGORY_ANCHORS } from "./quizData";

// ---------- localStorage keys ----------
const KEY_LAST_DATE = "dino_lastQuizCompletedDate";
const KEY_HISTORY = "dino_quizHistory";
const KEY_RECENT_IDS = "dino_recentQuestionIds";
const KEY_LAST_RESULT = "dino_lastQuizResult";

// ---------- Types ----------
export interface CategoryScore { category: Category; label: string; score: number; max: number }
export interface QuizResult {
  date: string;
  overallScore0to100: number;
  band: string;
  categoryScores: CategoryScore[];
  topThemes: { category: Category; label: string; anchor: string }[];
}

// ---------- Daily lockout ----------
export function hasCompletedToday(): boolean {
  const last = localStorage.getItem(KEY_LAST_DATE);
  return last === todayStr();
}

export function markCompletedToday(): void {
  localStorage.setItem(KEY_LAST_DATE, todayStr());
}

function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// ---------- Question selection ----------
export function selectDailyQuestions(): Question[] {
  const recentIds: number[] = JSON.parse(localStorage.getItem(KEY_RECENT_IDS) || "[]");
  const recentSet = new Set(recentIds);

  const selected: Question[] = [];

  for (const cat of CATEGORIES) {
    const pool = QUESTION_BANK.filter((q) => q.category === cat);
    const preferred = pool.filter((q) => !recentSet.has(q.id));
    const source = preferred.length >= 2 ? preferred : pool;
    // pick 2 random
    const shuffled = [...source].sort(() => Math.random() - 0.5);
    selected.push(shuffled[0], shuffled[1]);
  }

  // shuffle overall order
  selected.sort(() => Math.random() - 0.5);

  // update recent ids
  const newRecent = [...recentIds, ...selected.map((q) => q.id)].slice(-50);
  localStorage.setItem(KEY_RECENT_IDS, JSON.stringify(newRecent));

  return selected;
}

// ---------- Scoring ----------
export function computeResult(questions: Question[], answers: number[]): QuizResult {
  const date = todayStr();
  const catMap: Record<Category, number> = {} as any;
  CATEGORIES.forEach((c) => (catMap[c] = 0));

  questions.forEach((q, i) => {
    catMap[q.category] += answers[i];
  });

  const total = answers.reduce((a, b) => a + b, 0);
  const overallScore0to100 = Math.round((total / 56) * 100);

  const band = overallScore0to100 <= 25 ? "Low" : overallScore0to100 <= 50 ? "Mild" : overallScore0to100 <= 75 ? "Moderate" : "High";

  const categoryScores: CategoryScore[] = CATEGORIES.map((c) => ({
    category: c,
    label: CATEGORY_LABELS[c],
    score: catMap[c],
    max: 8, // 2 questions * 4 max
  }));

  const sorted = [...categoryScores].sort((a, b) => b.score - a.score);
  const topThemes = sorted.slice(0, 2).map((s) => ({
    category: s.category,
    label: s.label,
    anchor: CATEGORY_ANCHORS[s.category],
  }));

  return { date, overallScore0to100, band, categoryScores, topThemes };
}

// ---------- History ----------
export function saveResult(result: QuizResult): void {
  markCompletedToday();
  localStorage.setItem(KEY_LAST_RESULT, JSON.stringify(result));
  const history: QuizResult[] = JSON.parse(localStorage.getItem(KEY_HISTORY) || "[]");
  history.push(result);
  if (history.length > 14) history.splice(0, history.length - 14);
  localStorage.setItem(KEY_HISTORY, JSON.stringify(history));
}

export function getLastResult(): QuizResult | null {
  const raw = localStorage.getItem(KEY_LAST_RESULT);
  return raw ? JSON.parse(raw) : null;
}

export function getHistory(): QuizResult[] {
  return JSON.parse(localStorage.getItem(KEY_HISTORY) || "[]");
}

// ---------- Improvement actions ----------
interface Action { text: string; link?: string }

const ACTION_POOL: Record<Category, { today: Action[]; week: Action[] }> = {
  Mood: {
    today: [
      { text: "Step outside for a 10-minute walk, even if you don't feel like it.", link: "/resources#mood" },
      { text: "Write down three things — no matter how small — that went okay today.", link: "/resources#mood" },
      { text: "Reach out to one person with a short message.", link: "/resources#mood" },
    ],
    week: [
      { text: "Do one small thing that used to bring you joy each day this week.", link: "/resources#mood" },
      { text: "Try a daily gratitude journal — just one sentence per day.", link: "/resources#mood" },
      { text: "Schedule one enjoyable activity, even a brief one.", link: "/resources#mood" },
    ],
  },
  Anxiety: {
    today: [
      { text: "Try box breathing: inhale 4s, hold 4s, exhale 4s, hold 4s.", link: "/resources#anxiety" },
      { text: "Use the 5-4-3-2-1 grounding technique right now.", link: "/resources#anxiety" },
      { text: "Write down your worries and set a 10-minute 'worry window'.", link: "/resources#anxiety" },
    ],
    week: [
      { text: "Practice a 5-minute guided meditation each morning.", link: "/resources#anxiety" },
      { text: "Identify and challenge one anxious thought daily.", link: "/resources#anxiety" },
      { text: "Limit caffeine intake and notice the effect on your anxiety.", link: "/resources#anxiety" },
    ],
  },
  Stress: {
    today: [
      { text: "Identify one thing you can control right now and act on it.", link: "/resources#stress" },
      { text: "Do a 3-minute body scan from head to toe.", link: "/resources#stress" },
      { text: "Break your to-do list into must, could, and can-wait.", link: "/resources#stress" },
    ],
    week: [
      { text: "Say no to one non-essential obligation this week.", link: "/resources#stress" },
      { text: "Schedule 15 minutes of unstructured downtime each day.", link: "/resources#stress" },
      { text: "Try progressive muscle relaxation before bed.", link: "/resources#stress" },
    ],
  },
  Sleep: {
    today: [
      { text: "Set a consistent bedtime for tonight and stick to it.", link: "/resources#sleep" },
      { text: "Put screens away 30 minutes before bed — read or stretch instead.", link: "/resources#sleep" },
      { text: "Write tomorrow's top three tasks to clear your mind before sleep.", link: "/resources#sleep" },
    ],
    week: [
      { text: "Keep a consistent sleep/wake schedule all week, including weekends.", link: "/resources#sleep" },
      { text: "Create a calming wind-down ritual each night.", link: "/resources#sleep" },
      { text: "Track your sleep duration and quality in a simple log.", link: "/resources#sleep" },
    ],
  },
  Social: {
    today: [
      { text: "Send a short message to someone you haven't spoken to in a while.", link: "/resources#social" },
      { text: "Visit a public space — a library, park, or café.", link: "/resources#social" },
      { text: "Compliment one person genuinely today.", link: "/resources#social" },
    ],
    week: [
      { text: "Join an online community around a hobby or interest.", link: "/resources#social" },
      { text: "Plan one social activity, even a brief coffee chat.", link: "/resources#social" },
      { text: "Practice one conversation starter each day.", link: "/resources#social" },
    ],
  },
  SelfWorth: {
    today: [
      { text: "Write one thing you're proud of accomplishing recently.", link: "/resources#selfworth" },
      { text: "Replace one self-critical thought with a kinder alternative.", link: "/resources#selfworth" },
      { text: "Accept the next compliment you receive without deflecting.", link: "/resources#selfworth" },
    ],
    week: [
      { text: "Keep a daily 'wins' journal — even tiny wins count.", link: "/resources#selfworth" },
      { text: "Unfollow one social media account that triggers comparison.", link: "/resources#selfworth" },
      { text: "Set one small, achievable goal and celebrate completing it.", link: "/resources#selfworth" },
    ],
  },
  Focus: {
    today: [
      { text: "Use a 25-minute focus timer with a 5-minute break.", link: "/resources#focus" },
      { text: "Close all unnecessary tabs and notifications for 30 minutes.", link: "/resources#focus" },
      { text: "Write down the single most important task for today.", link: "/resources#focus" },
    ],
    week: [
      { text: "Designate a 'deep work' block each day — no interruptions.", link: "/resources#focus" },
      { text: "Practice a brief mindfulness exercise before starting work.", link: "/resources#focus" },
      { text: "Break large projects into smaller, concrete next steps.", link: "/resources#focus" },
    ],
  },
};

export function getImprovementPlan(topThemes: { category: Category }[]): { today: Action[]; week: Action[] } {
  const today: Action[] = [];
  const week: Action[] = [];

  for (const theme of topThemes) {
    const pool = ACTION_POOL[theme.category];
    if (pool) {
      today.push(pool.today[Math.floor(Math.random() * pool.today.length)]);
      week.push(pool.week[Math.floor(Math.random() * pool.week.length)]);
    }
  }

  // Fill remaining slots if needed
  const otherCats = CATEGORIES.filter((c) => !topThemes.some((t) => t.category === c));
  while (today.length < 3 && otherCats.length) {
    const cat = otherCats.shift()!;
    today.push(ACTION_POOL[cat].today[0]);
  }
  while (week.length < 3 && otherCats.length) {
    const cat = otherCats.shift()!;
    week.push(ACTION_POOL[cat].week[0]);
  }

  return { today: today.slice(0, 3), week: week.slice(0, 3) };
}
