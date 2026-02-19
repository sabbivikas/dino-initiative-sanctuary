import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Send, X } from "lucide-react";
import heartStamp from "@/assets/heart-stamp.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { formatDistanceToNow } from "date-fns";

interface KindnessLetter {
  id: string;
  message: string;
  tag: string | null;
  signature: string | null;
  region: string | null;
  hearts: number;
  created_at: string;
}

const PAGE_SIZE = 12;

const ENVELOPE_COLORS = [
  "bg-rose-50 border-rose-200",
  "bg-sky-50 border-sky-200",
  "bg-amber-50 border-amber-200",
  "bg-emerald-50 border-emerald-200",
  "bg-violet-50 border-violet-200",
  "bg-pink-50 border-pink-200",
  "bg-teal-50 border-teal-200",
  "bg-orange-50 border-orange-200",
  "bg-indigo-50 border-indigo-200",
  "bg-lime-50 border-lime-200",
];

const FLAP_COLORS = [
  "from-rose-100 to-rose-50",
  "from-sky-100 to-sky-50",
  "from-amber-100 to-amber-50",
  "from-emerald-100 to-emerald-50",
  "from-violet-100 to-violet-50",
  "from-pink-100 to-pink-50",
  "from-teal-100 to-teal-50",
  "from-orange-100 to-orange-50",
  "from-indigo-100 to-indigo-50",
  "from-lime-100 to-lime-50",
];

const STAGGER_DELAYS = [
  "0ms", "80ms", "160ms", "240ms", "320ms",
  "400ms", "120ms", "200ms", "280ms", "360ms", "440ms", "60ms",
];

const KindnessFeed = () => {
  const [letters, setLetters] = useState<KindnessLetter[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState<"all" | "loved">("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [heartedIds, setHeartedIds] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem("dino_hearted_letters");
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch { return new Set(); }
  });

  const fetchLetters = async (pageNum: number, reset = false) => {
    setLoading(true);
    const query = supabase
      .from("kindness_letters")
      .select("id, message, tag, signature, region, hearts, created_at")
      .eq("status", "approved" as any)
      .range(pageNum * PAGE_SIZE, (pageNum + 1) * PAGE_SIZE - 1);

    if (filter === "loved") {
      query.order("hearts", { ascending: false });
    } else {
      query.order("created_at", { ascending: false });
    }

    const { data, error } = await query;
    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }
    const typed = (data || []) as unknown as KindnessLetter[];
    setLetters(prev => reset ? typed : [...prev, ...typed]);
    setHasMore(typed.length === PAGE_SIZE);
    setLoading(false);
  };

  useEffect(() => {
    setPage(0);
    fetchLetters(0, true);
  }, [filter]);

  const loadMore = () => {
    const next = page + 1;
    setPage(next);
    fetchLetters(next);
  };

  const handleHeart = async (e: React.MouseEvent, letterId: string) => {
    e.stopPropagation();
    if (heartedIds.has(letterId)) return;
    try {
      const res = await supabase.functions.invoke("heart-letter", {
        body: { letter_id: letterId },
      });
      if (res.data?.hearts !== undefined) {
        setLetters(prev => prev.map(l => l.id === letterId ? { ...l, hearts: res.data.hearts } : l));
        const newSet = new Set(heartedIds);
        newSet.add(letterId);
        setHeartedIds(newSet);
        localStorage.setItem("dino_hearted_letters", JSON.stringify([...newSet]));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleReport = async (e: React.MouseEvent, letterId: string) => {
    e.stopPropagation();
    await supabase.from("letter_reports").insert({ letter_id: letterId, reason: "User reported" } as any);
    alert("Thank you. This letter has been reported for review.");
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
      <section className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">Kindness Letters</h1>
        <p className="text-muted-foreground">Anonymous letters of kindness, traveling across the world.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild>
            <Link to="/kindness/new">
              <Send className="mr-2 h-4 w-4" /> Leave a letter
            </Link>
          </Button>
        </div>
      </section>

      {/* Filter */}
      <div className="mb-8 flex items-center justify-center gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-full px-4 py-1.5 text-sm transition-colors ${filter === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}
        >
          All letters
        </button>
        <button
          onClick={() => setFilter("loved")}
          className={`rounded-full px-4 py-1.5 text-sm transition-colors ${filter === "loved" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}
        >
          Most loved
        </button>
      </div>

      {/* Feed */}
      <div className="grid gap-6 sm:grid-cols-2">
        {letters.map((letter, idx) => {
          const colorIdx = idx % ENVELOPE_COLORS.length;
          const isOpen = openId === letter.id;
          const delay = STAGGER_DELAYS[idx % STAGGER_DELAYS.length];

          return (
            <article
              key={letter.id}
              onClick={() => setOpenId(isOpen ? null : letter.id)}
              className={`group relative cursor-pointer rounded-xl border-2 shadow-sm transition-all duration-500 hover:shadow-lg ${ENVELOPE_COLORS[colorIdx]} ${isOpen ? "row-span-1" : ""}`}
              style={{ animationDelay: delay }}
            >
              {/* Envelope flap (visible when closed) */}
              <div
                className={`absolute inset-x-0 top-0 z-10 h-16 origin-top rounded-t-xl bg-gradient-to-b transition-transform duration-500 ease-in-out ${FLAP_COLORS[colorIdx]} ${isOpen ? "[transform:rotateX(180deg)] opacity-0" : "[transform:rotateX(0deg)]"}`}
                style={{ perspective: "800px", backfaceVisibility: "hidden" }}
              />

              {/* Heart stamp on envelope */}
              <img
                src={heartStamp}
                alt=""
                className={`absolute right-4 top-2 z-20 h-10 w-10 object-contain transition-all duration-500 ${isOpen ? "scale-75 opacity-30 top-1 right-2" : "opacity-80 hover:scale-110"}`}
              />

              {/* Envelope front (closed state) */}
              <div className={`relative z-0 px-5 pb-4 pt-20 transition-all duration-500 ${isOpen ? "pt-6" : ""}`}>
                {!isOpen && (
                  <div className="animate-fade-in">
                    {letter.tag && (
                      <Badge variant="secondary" className="mb-2 text-xs">{letter.tag}</Badge>
                    )}
                    <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-foreground/80">
                      {letter.message.slice(0, 80)}…
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{letter.signature || "Anonymous"}</span>
                      <span>{formatDistanceToNow(new Date(letter.created_at), { addSuffix: true })}</span>
                    </div>
                  </div>
                )}

                {/* Letter content (open state) */}
                {isOpen && (
                  <div className="animate-fade-in">
                    <div className="mb-4 flex items-center justify-between">
                      {letter.tag && (
                        <Badge variant="secondary" className="text-xs">{letter.tag}</Badge>
                      )}
                      <button
                        onClick={(e) => { e.stopPropagation(); setOpenId(null); }}
                        className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mb-4 rounded-lg bg-background/60 p-4">
                      <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">
                        {letter.message}
                      </p>
                    </div>

                    <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {letter.signature || "Anonymous"} · {formatDistanceToNow(new Date(letter.created_at), { addSuffix: true })}
                      </span>
                      {letter.region && (
                        <span className="italic">Sent to: {letter.region}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 border-t border-current/10 pt-3">
                      <button
                        onClick={(e) => handleHeart(e, letter.id)}
                        className={`flex items-center gap-1.5 text-xs transition-all ${heartedIds.has(letter.id) ? "text-primary scale-110" : "text-muted-foreground hover:text-primary hover:scale-105"}`}
                      >
                        <img src={heartStamp} alt="heart" className={`h-5 w-5 object-contain transition-opacity ${heartedIds.has(letter.id) ? "" : "opacity-40"}`} />
                        {letter.hearts}
                      </button>
                      <Link
                        to={`/kindness/${letter.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-muted-foreground hover:text-foreground"
                      >
                        View
                      </Link>
                      <button
                        onClick={(e) => handleReport(e, letter.id)}
                        className="ml-auto text-xs text-muted-foreground hover:text-destructive"
                      >
                        Report
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {loading && <p className="mt-8 text-center text-sm text-muted-foreground">Loading…</p>}
      {!loading && letters.length === 0 && (
        <p className="mt-8 text-center text-muted-foreground">No letters yet. Be the first to leave one!</p>
      )}
      {!loading && hasMore && letters.length > 0 && (
        <div className="mt-8 text-center">
          <Button variant="outline" onClick={loadMore}>Load more</Button>
        </div>
      )}
    </div>
  );
};

export default KindnessFeed;
