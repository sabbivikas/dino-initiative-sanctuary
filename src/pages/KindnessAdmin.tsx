import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

interface Letter {
  id: string;
  message: string;
  tag: string | null;
  signature: string | null;
  status: string;
  created_at: string;
  hearts: number;
}

const KindnessAdmin = () => {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [letters, setLetters] = useState<Letter[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<"pending" | "approved" | "rejected">("pending");
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const authenticate = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) {
      setAuthed(true);
      fetchLetters(password.trim());
    }
  };

  const fetchLetters = async (key: string) => {
    setLoading(true);
    const res = await supabase.functions.invoke("moderate-letter", {
      body: { action: "list", admin_key: key },
    });
    if (res.data?.letters) {
      setLetters(res.data.letters);
    }
    setLoading(false);
  };

  const handleAction = async (letterId: string, action: "approve" | "reject") => {
    setActionLoading(letterId);
    await supabase.functions.invoke("moderate-letter", {
      body: { action, letter_id: letterId, admin_key: password.trim() },
    });
    setLetters(prev => prev.map(l => l.id === letterId ? { ...l, status: action === "approve" ? "approved" : "rejected" } : l));
    setActionLoading(null);
  };

  const filtered = letters.filter(l => l.status === filter);

  if (!authed) {
    return (
      <div className="mx-auto flex max-w-sm flex-col items-center px-6 py-20">
        <h1 className="mb-4 text-xl font-bold">Moderation Access</h1>
        <form onSubmit={authenticate} className="flex w-full gap-2">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin key"
          />
          <Button type="submit">Enter</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-6 text-2xl font-bold">Kindness Letters — Moderation</h1>

      <div className="mb-6 flex gap-2">
        {(["pending", "approved", "rejected"] as const).map(s => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`rounded-full px-4 py-1.5 text-sm capitalize transition-colors ${filter === s ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}
          >
            {s} ({letters.filter(l => l.status === s).length})
          </button>
        ))}
      </div>

      {loading && <p className="text-muted-foreground">Loading…</p>}

      <div className="space-y-4">
        {filtered.map(letter => (
          <div key={letter.id} className="rounded-lg border border-border bg-card p-5">
            <div className="mb-2 flex items-center gap-2">
              {letter.tag && <Badge variant="secondary" className="text-xs">{letter.tag}</Badge>}
              <Badge variant={letter.status === "approved" ? "default" : letter.status === "rejected" ? "destructive" : "outline"} className="text-xs capitalize">
                {letter.status}
              </Badge>
            </div>
            <p className="mb-3 whitespace-pre-wrap text-sm">{letter.message}</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{letter.signature || "Anonymous"} · {new Date(letter.created_at).toLocaleDateString()}</span>
              <span>❤️ {letter.hearts}</span>
            </div>
            {letter.status === "pending" && (
              <div className="mt-3 flex gap-2">
                <Button
                  size="sm"
                  onClick={() => handleAction(letter.id, "approve")}
                  disabled={actionLoading === letter.id}
                >
                  {actionLoading === letter.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <><CheckCircle className="mr-1 h-4 w-4" /> Approve</>}
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleAction(letter.id, "reject")}
                  disabled={actionLoading === letter.id}
                >
                  <XCircle className="mr-1 h-4 w-4" /> Reject
                </Button>
              </div>
            )}
          </div>
        ))}
        {!loading && filtered.length === 0 && (
          <p className="text-center text-muted-foreground">No {filter} letters.</p>
        )}
      </div>
    </div>
  );
};

export default KindnessAdmin;
