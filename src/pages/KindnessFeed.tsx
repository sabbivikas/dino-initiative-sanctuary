import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";
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

const KindnessFeed = () => {
  const [letters, setLetters] = useState<KindnessLetter[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState<"all" | "loved">("all");
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

  const handleHeart = async (letterId: string) => {
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

  const handleReport = async (letterId: string) => {
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
      <div className="grid gap-5 sm:grid-cols-2">
        {letters.map((letter) => (
          <article
            key={letter.id}
            className="group relative rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <img src={heartStamp} alt="" className="absolute right-3 top-3 h-8 w-8 object-contain opacity-60" />
            {letter.tag && (
              <Badge variant="secondary" className="mb-3 text-xs">
                {letter.tag}
              </Badge>
            )}
            <p className="mb-4 text-sm leading-relaxed text-foreground">
              {letter.message.length > 160 ? letter.message.slice(0, 160) + "…" : letter.message}
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>
                {letter.signature || "Anonymous"} · {formatDistanceToNow(new Date(letter.created_at), { addSuffix: true })}
              </span>
              {letter.region && (
                <span className="italic">Sent to: {letter.region}</span>
              )}
            </div>
            <div className="mt-3 flex items-center gap-3 border-t border-border/40 pt-3">
              <button
                onClick={() => handleHeart(letter.id)}
                className={`flex items-center gap-1 text-xs transition-colors ${heartedIds.has(letter.id) ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
              >
                <img src={heartStamp} alt="heart" className={`h-4 w-4 object-contain ${heartedIds.has(letter.id) ? "" : "opacity-40"}`} />
                {letter.hearts}
              </button>
              <Link to={`/kindness/${letter.id}`} className="text-xs text-muted-foreground hover:text-foreground">
                Read
              </Link>
              <button onClick={() => handleReport(letter.id)} className="ml-auto text-xs text-muted-foreground hover:text-destructive">
                Report
              </button>
            </div>
          </article>
        ))}
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
