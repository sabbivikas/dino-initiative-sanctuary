import { useState, useEffect, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Question, SCALE_LABELS, SAFETY_QUESTION } from "@/lib/quizData";
import { hasCompletedToday, selectDailyQuestions, generateAIQuestions, computeResult, saveResult } from "@/lib/quizUtils";
import { AlertTriangle, Lock, ArrowRight, Heart, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Quiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [locked, setLocked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [phase, setPhase] = useState<"quiz" | "safety">("quiz");
  const [showCrisis, setShowCrisis] = useState(false);
  const [aiGenerated, setAiGenerated] = useState(false);

  useEffect(() => {
    if (hasCompletedToday()) {
      setLocked(true);
      setLoading(false);
      return;
    }

    const loadQuestions = async () => {
      setLoading(true);
      try {
        const aiQuestions = await generateAIQuestions();
        if (aiQuestions) {
          setQuestions(aiQuestions);
          setAnswers(new Array(aiQuestions.length).fill(-1));
          setAiGenerated(true);
        } else {
          // Fallback to static bank
          const selected = selectDailyQuestions();
          setQuestions(selected);
          setAnswers(new Array(selected.length).fill(-1));
        }
      } catch {
        const selected = selectDailyQuestions();
        setQuestions(selected);
        setAnswers(new Array(selected.length).fill(-1));
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, []);

  const handleAnswer = useCallback((value: number) => {
    const next = [...answers];
    next[currentIndex] = value;
    setAnswers(next);

    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex((i) => i + 1), 200);
    } else {
      // Move to safety question
      setTimeout(() => setPhase("safety"), 200);
    }
  }, [answers, currentIndex, questions.length]);

  const handleSafety = (option: string) => {
    if (option !== "No") {
      setShowCrisis(true);
      return;
    }
    finishQuiz();
  };

  const finishQuiz = () => {
    const result = computeResult(questions, answers);
    saveResult(result);
    navigate("/report");
  };

  // Locked state
  if (locked) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-20 text-center md:py-32">
        <Lock className="mb-6 h-12 w-12 text-muted-foreground" />
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">Come back tomorrow</h1>
        <p className="mb-8 text-muted-foreground">
          You've already completed today's check-in. Your daily quiz resets at midnight.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="outline">
            <Link to="/resources">Explore resources</Link>
          </Button>
          <Button asChild>
            <Link to="/hotlines">Get help now</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/report">View last report</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Crisis panel
  if (showCrisis) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-20 text-center md:py-32">
        <div className="mb-6 rounded-2xl border-2 border-destructive bg-destructive/5 p-8">
          <AlertTriangle className="mx-auto mb-4 h-10 w-10 text-destructive" />
          <h2 className="mb-3 text-2xl font-bold">You're not alone</h2>
          <p className="mb-4 text-base text-muted-foreground">
            If you're having thoughts of harming yourself, please reach out to a trained counselor right now. Immediate help is available.
          </p>
          <Button asChild size="lg" className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90">
            <Link to="/hotlines">
              <Heart className="mr-2 h-4 w-4" />
              Get help now
            </Link>
          </Button>
        </div>
        <Button variant="ghost" className="mt-4 text-sm text-muted-foreground" onClick={finishQuiz}>
          Continue to my report
        </Button>
      </div>
    );
  }

  // Safety question
  if (phase === "safety") {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-20 md:py-32">
        <p className="mb-2 text-sm text-muted-foreground">One more question</p>
        <Card className="w-full">
          <CardContent className="p-6 md:p-8">
            <p className="mb-6 text-center text-lg font-medium md:text-xl">{SAFETY_QUESTION.prompt}</p>
            <div className="flex flex-col gap-3">
              {SAFETY_QUESTION.options.map((opt) => (
                <Button
                  key={opt}
                  variant="outline"
                  className="h-auto min-h-[2.75rem] w-full justify-start whitespace-normal px-4 py-3 text-left text-base"
                  onClick={() => handleSafety(opt)}
                >
                  {opt}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          This question is not scored. Your answer helps us provide the right support.
        </p>
      </div>
    );
  }

  // Loading
  if (loading || questions.length === 0) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-32 text-center">
        <Loader2 className="mb-4 h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground">Generating your personalized quiz…</p>
      </div>
    );
  }

  const question = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-16 md:py-24">
      {/* Progress */}
      <div className="mb-8 w-full">
        <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span className="text-xs uppercase tracking-wide">{question.category}</span>
        </div>
        <Progress value={progress} className="h-1.5" />
      </div>

      {/* Question */}
      <Card className="w-full">
        <CardContent className="p-6 md:p-8">
          <p className="mb-8 text-center text-lg font-medium leading-relaxed md:text-xl">
            {question.prompt}
          </p>

          <div className="flex flex-col gap-2">
            {SCALE_LABELS.map((label, value) => (
              <Button
                key={value}
                variant={answers[currentIndex] === value ? "default" : "outline"}
                className="h-auto min-h-[2.75rem] w-full justify-between whitespace-normal px-4 py-3 text-left text-base"
                onClick={() => handleAnswer(value)}
              >
                <span>{label}</span>
                <span className="ml-2 text-xs text-muted-foreground">{value}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 flex flex-col items-center gap-1">
        {aiGenerated && (
          <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
            ✨ AI-generated · research-backed
          </span>
        )}
        <p className="text-center text-xs text-muted-foreground">
          This quiz is not a diagnosis. It's a guide to help you find support.
        </p>
      </div>
    </div>
  );
};

export default Quiz;
