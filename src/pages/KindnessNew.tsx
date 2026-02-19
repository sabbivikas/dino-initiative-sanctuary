import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { Heart, CheckCircle, Loader2 } from "lucide-react";

const TAGS = ["Encouragement", "Gratitude", "Hope", "Comfort", "Celebration"];
const RATE_LIMIT_KEY = "dino_last_letter_time";

const KindnessNew = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [tag, setTag] = useState("");
  const [signature, setSignature] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!message.trim()) { setError("Please write your letter."); return; }
    if (message.length > 600) { setError("Letter is too long (max 600 characters)."); return; }
    if (signature.length > 24) { setError("Signature is too long (max 24 characters)."); return; }


    setSubmitting(true);
    try {
      const res = await supabase.functions.invoke("submit-letter", {
        body: { message: message.trim(), tag: tag || undefined, signature: signature.trim() || undefined },
      });

      if (res.error || res.data?.error) {
        const msg = res.data?.message || res.data?.error || "Something went wrong.";
        setError(msg);
        setSubmitting(false);
        return;
      }

      localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center px-6 py-20 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-primary" />
        <h1 className="mb-2 text-2xl font-bold">Your letter is on its way</h1>
        <p className="mb-6 text-muted-foreground">
          Your letter is now live in the feed. Thank you for spreading kindness.
        </p>
        <div className="flex gap-3">
          <Button asChild variant="outline">
            <Link to="/kindness">Back to letters</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-6 py-12 md:py-20">
      <div className="mb-8 text-center">
        <Heart className="mx-auto mb-3 h-8 w-8 text-primary" />
        <h1 className="mb-2 text-2xl font-bold md:text-3xl">
          Leave a message for someone on the other side of the world
        </h1>
        <p className="text-sm text-muted-foreground">Anonymous. Kind. Short is okay.</p>
      </div>

      {/* Rules */}
      <div className="mb-6 rounded-lg border border-border/60 bg-secondary/50 p-4 text-xs text-muted-foreground">
        <p className="mb-1 font-medium text-foreground">Guidelines</p>
        <p>Be kind. No personal information. No bullying. No threats.</p>
        <p className="mt-1">
          If you're in crisis, please use{" "}
          <Link to="/hotlines" className="text-primary underline underline-offset-2">Hotlines</Link>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="message">Your letter</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write something kind…"
            maxLength={600}
            className="mt-1.5 min-h-[140px]"
          />
          <p className="mt-1 text-right text-xs text-muted-foreground">{message.length}/600</p>
        </div>

        <div>
          <Label htmlFor="tag">Tone (optional)</Label>
          <Select value={tag} onValueChange={setTag}>
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Choose a tone…" />
            </SelectTrigger>
            <SelectContent>
              {TAGS.map(t => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="signature">Sign as (optional)</Label>
          <Input
            id="signature"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            placeholder="Anonymous"
            maxLength={24}
            className="mt-1.5"
          />
        </div>

        {error && (
          <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>
        )}

        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</> : "Send your letter"}
        </Button>
      </form>
    </div>
  );
};

export default KindnessNew;
