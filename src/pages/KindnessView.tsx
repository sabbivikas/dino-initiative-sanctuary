import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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

const KindnessView = () => {
  const { id } = useParams<{ id: string }>();
  const [letter, setLetter] = useState<KindnessLetter | null>(null);
  const [loading, setLoading] = useState(true);
  const [hearted, setHearted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("dino_hearted_letters");
    if (stored && id) {
      setHearted(JSON.parse(stored).includes(id));
    }
  }, [id]);

  useEffect(() => {
    if (!id) return;
    supabase
      .from("kindness_letters")
      .select("id, message, tag, signature, region, hearts, created_at")
      .eq("id", id)
      .eq("status", "approved" as any)
      .single()
      .then(({ data, error }) => {
        if (!error && data) setLetter(data as unknown as KindnessLetter);
        setLoading(false);
      });
  }, [id]);

  const handleHeart = async () => {
    if (hearted || !letter) return;
    const res = await supabase.functions.invoke("heart-letter", {
      body: { letter_id: letter.id },
    });
    if (res.data?.hearts !== undefined) {
      setLetter({ ...letter, hearts: res.data.hearts });
      setHearted(true);
      const stored = JSON.parse(localStorage.getItem("dino_hearted_letters") || "[]");
      stored.push(letter.id);
      localStorage.setItem("dino_hearted_letters", JSON.stringify(stored));
    }
  };

  if (loading) return <p className="py-20 text-center text-muted-foreground">Loading…</p>;
  if (!letter) return (
    <div className="py-20 text-center">
      <p className="mb-4 text-muted-foreground">Letter not found.</p>
      <Button asChild variant="outline"><Link to="/kindness">Back to letters</Link></Button>
    </div>
  );

  return (
    <div className="mx-auto max-w-lg px-6 py-12 md:py-20">
      <Link to="/kindness" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> All letters
      </Link>

      <article className="rounded-xl border border-border/60 bg-card p-8 shadow-sm">
        <div className="mb-4 flex items-start justify-between">
          {letter.tag && <Badge variant="secondary">{letter.tag}</Badge>}
          <img src={heartStamp} alt="" className="h-10 w-10 object-contain opacity-60" />
        </div>

        <p className="mb-6 whitespace-pre-wrap leading-relaxed text-foreground">{letter.message}</p>

        <div className="flex items-center justify-between border-t border-border/40 pt-4 text-xs text-muted-foreground">
          <span>{letter.signature || "Anonymous"} · {formatDistanceToNow(new Date(letter.created_at), { addSuffix: true })}</span>
          {letter.region && <span className="italic">Sent to: {letter.region}</span>}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={handleHeart}
            className={`flex items-center gap-1 text-sm transition-colors ${hearted ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
          >
            <img src={heartStamp} alt="heart" className={`h-5 w-5 object-contain ${hearted ? "" : "opacity-40"}`} />
            {letter.hearts}
          </button>
        </div>
      </article>
    </div>
  );
};

export default KindnessView;
