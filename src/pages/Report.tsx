import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getLastResult, getHistory, getImprovementPlan, QuizResult, CategoryScore } from "@/lib/quizUtils";
import { CATEGORY_LABELS, Category } from "@/lib/quizData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";
import { Download, ExternalLink, Heart, TrendingUp, Target, Calendar } from "lucide-react";

const BAND_COLORS: Record<string, string> = {
  Low: "text-green-600",
  Mild: "text-yellow-600",
  Moderate: "text-orange-600",
  High: "text-red-600",
};

const Report = () => {
  const navigate = useNavigate();
  const reportRef = useRef<HTMLDivElement>(null);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [history, setHistory] = useState<QuizResult[]>([]);
  const [plan, setPlan] = useState<{ today: any[]; week: any[] }>({ today: [], week: [] });
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    const r = getLastResult();
    if (!r) {
      navigate("/quiz");
      return;
    }
    setResult(r);
    setHistory(getHistory());
    setPlan(getImprovementPlan(r.topThemes));
  }, [navigate]);

  const handleExportPdf = async () => {
    if (!reportRef.current) return;
    setExporting(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");
      const canvas = await html2canvas(reportRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      let heightLeft = pdfHeight;
      let position = 0;
      const pageHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`dino-report-${result?.date || "today"}.pdf`);
    } catch (e) {
      console.error("PDF export failed:", e);
    } finally {
      setExporting(false);
    }
  };

  if (!result) return null;

  const barData = result.categoryScores.map((cs) => ({
    name: cs.label,
    score: cs.score,
    max: cs.max,
  }));

  const trendData = history.map((h) => ({
    date: h.date.slice(5), // MM-DD
    Overall: h.overallScore0to100,
    ...Object.fromEntries(
      h.categoryScores
        .filter((cs) => ["Mood", "Anxiety", "Stress", "Sleep"].includes(cs.category))
        .map((cs) => [cs.label, Math.round((cs.score / cs.max) * 100)])
    ),
  }));

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
      {/* Export button */}
      <div className="mb-6 flex justify-end">
        <Button onClick={handleExportPdf} disabled={exporting} variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          {exporting ? "Exporting…" : "Export as PDF"}
        </Button>
      </div>

      {/* Report content */}
      <div ref={reportRef} className="space-y-8 bg-background">
        {/* Header */}
        <header className="text-center">
          <h1 className="mb-1 text-3xl font-bold md:text-4xl">Daily Report</h1>
          <p className="text-sm text-muted-foreground">Dino Initiative · {result.date}</p>
        </header>

        {/* Summary tiles */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Target className="mb-2 h-6 w-6 text-primary" />
              <p className="text-3xl font-bold">{result.overallScore0to100}</p>
              <p className="text-sm text-muted-foreground">Overall Score</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <TrendingUp className={`mb-2 h-6 w-6 ${BAND_COLORS[result.band] || ""}`} />
              <p className={`text-3xl font-bold ${BAND_COLORS[result.band] || ""}`}>{result.band}</p>
              <p className="text-sm text-muted-foreground">Severity Band</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Calendar className="mb-2 h-6 w-6 text-primary" />
              <div className="text-center">
                {result.topThemes.map((t) => (
                  <p key={t.category} className="text-lg font-semibold">{t.label}</p>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Top Themes</p>
            </CardContent>
          </Card>
        </div>

        {/* Category breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 8]} tick={{ fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Trend chart */}
        {history.length > 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">14-Day Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "6px",
                        fontSize: "12px",
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="Overall" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="Mood" stroke="#6366f1" strokeWidth={1.5} dot={false} />
                    <Line type="monotone" dataKey="Anxiety" stroke="#f59e0b" strokeWidth={1.5} dot={false} />
                    <Line type="monotone" dataKey="Stress" stroke="#ef4444" strokeWidth={1.5} dot={false} />
                    <Line type="monotone" dataKey="Sleep" stroke="#8b5cf6" strokeWidth={1.5} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Improvement plan */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Your Improvement Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="mb-3 text-base font-semibold uppercase tracking-wide text-muted-foreground">Today</h3>
              <ul className="space-y-2">
                {plan.today.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span>
                      {a.text}
                      {a.link && (
                        <Link to={a.link} className="ml-1 inline-flex items-center text-primary hover:underline">
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-base font-semibold uppercase tracking-wide text-muted-foreground">This Week</h3>
              <ul className="space-y-2">
                {plan.week.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold">
                      {i + 1}
                    </span>
                    <span>
                      {a.text}
                      {a.link && (
                        <Link to={a.link} className="ml-1 inline-flex items-center text-primary hover:underline">
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <div className="space-y-3 rounded-lg border bg-muted/30 p-6 text-center text-sm text-muted-foreground">
          <p>This quiz is not a diagnosis. It's a guide to help you find support.</p>
          <p>
            If you need immediate help,{" "}
            <Link to="/hotlines" className="font-medium text-primary hover:underline">
              <Heart className="mr-1 inline h-3 w-3" />
              get help now
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Actions below the report */}
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button asChild variant="outline">
          <Link to="/resources">Explore resources</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/quiz">Back to quiz</Link>
        </Button>
      </div>
    </div>
  );
};

export default Report;
