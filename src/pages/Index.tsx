import { ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { APP_STORE_URL } from "@/lib/appStore";

import dinoComfort from "@/assets/dino-comfort.png";
import dinoMeditation from "@/assets/dino-meditation.png";
import dinoFlowers from "@/assets/dino-flowers.png";
import flowerYellow from "@/assets/flower-smile-yellow.png";
import flowerBlue from "@/assets/flower-smile-blue.png";
import heartStamp from "@/assets/heart-stamp.png";
import screen01 from "@/assets/app-screen-01.png";
import screen02 from "@/assets/app-screen-02.png";
import screen03 from "@/assets/app-screen-03.png";

/* ---------------- small building blocks ---------------- */

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="eyebrow mb-5">{children}</p>
);

const Source = ({ children }: { children: ReactNode }) => (
  <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80 font-sans-soft">
    source · {children}
  </p>
);

const Annotation = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <span className={`font-hand text-primary/80 text-lg ${className}`}>{children}</span>
);

const AppStoreButton = () => (
  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-background font-sans-soft text-sm transition-opacity hover:opacity-90"
  >
    <svg viewBox="0 0 384 512" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM260 110.3c25.1-29.8 22.8-56.9 22-66.3-22.1 1.3-47.7 15.1-62.3 32-16.1 18.1-25.6 40.5-23.6 65.8 23.9 1.9 45.7-10.4 63.9-31.5z" />
    </svg>
    <span className="flex flex-col items-start leading-tight">
      <span className="text-[10px] uppercase tracking-wide opacity-70">Download on the</span>
      <span className="text-sm font-medium">App Store</span>
    </span>
  </a>
);

/* ---------------- scenic pieces ---------------- */

const Sky = ({ warm = true, className = "" }: { warm?: boolean; className?: string }) => (
  <div
    aria-hidden
    className={`absolute inset-0 ${className}`}
    style={{
      background: warm
        ? "linear-gradient(180deg, #f5ead1 0%, #f2dfc5 35%, #e9ccb1 70%, #cbb69b 100%)"
        : "linear-gradient(180deg, #d9dfe7 0%, #c9cfd8 45%, #b8bdc7 100%)",
    }}
  />
);

const Cloud = ({ style }: { style: React.CSSProperties }) => (
  <svg viewBox="0 0 200 80" className="absolute opacity-70" style={style} aria-hidden>
    <path
      d="M30 55c-14 0-25-9-25-22s11-22 25-22c4 0 8 1 11 3 5-9 15-14 26-14 15 0 27 10 29 24 2-1 5-1 7-1 12 0 22 9 22 20s-10 20-22 20H30z"
      fill="#ffffff"
    />
  </svg>
);

const Fireflies = ({ count = 14 }: { count?: number }) => (
  <div className="pointer-events-none absolute inset-0" aria-hidden>
    {Array.from({ length: count }).map((_, i) => (
      <span
        key={i}
        className="absolute h-1.5 w-1.5 rounded-full bg-yellow-200 shadow-[0_0_8px_2px_rgba(255,236,150,0.7)] animate-firefly"
        style={{
          top: `${(i * 37) % 90 + 5}%`,
          left: `${(i * 53) % 92 + 4}%`,
          animationDelay: `${(i % 7) * 0.4}s`,
        }}
      />
    ))}
  </div>
);

const Lantern = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`} aria-hidden>
    <div className="animate-lantern">
      <div className="mx-auto h-1 w-px bg-foreground/40" />
      <div className="relative mx-auto h-16 w-12 rounded-[10px] border border-foreground/40 bg-gradient-to-b from-amber-100 to-amber-300 shadow-[0_0_40px_10px_rgba(251,191,36,0.35)]">
        <div className="absolute inset-1 rounded-[6px] bg-amber-200/70" />
      </div>
    </div>
  </div>
);

const Grass = () => (
  <svg viewBox="0 0 1440 120" className="absolute bottom-0 left-0 w-full" aria-hidden preserveAspectRatio="none">
    <path d="M0 80 Q 200 40 400 70 T 800 60 T 1200 75 T 1440 60 L1440 120 L0 120 Z" fill="#7a8f6b" opacity="0.85" />
    <path d="M0 100 Q 300 70 600 90 T 1200 85 T 1440 95 L1440 120 L0 120 Z" fill="#5f7554" />
  </svg>
);

/* ---------------- Chapter 1: regional divergence globe ---------------- */

const RegionGlobe = () => {
  // 8 regions as glowing dots on an abstract circle. Four "Western" dim.
  const regions = [
    { name: "South Asia", up: true, x: 62, y: 40 },
    { name: "East Asia", up: true, x: 78, y: 32 },
    { name: "Southeast Asia", up: true, x: 74, y: 55 },
    { name: "Latin America", up: true, x: 30, y: 60 },
    { name: "Sub-Saharan Africa", up: true, x: 50, y: 65 },
    { name: "Middle East / N. Africa", up: true, x: 55, y: 45 },
    { name: "CIS / E. Europe", up: true, x: 58, y: 25 },
    { name: "Western Europe", up: false, x: 44, y: 30 },
    { name: "North America", up: false, x: 20, y: 35 },
    { name: "Australia / NZ", up: false, x: 85, y: 72 },
  ];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="globeG" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#f4e9d3" />
            <stop offset="60%" stopColor="#d9c7ab" />
            <stop offset="100%" stopColor="#8a9a86" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="42" fill="url(#globeG)" opacity="0.85" />
        <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--foreground))" strokeOpacity="0.25" strokeWidth="0.3" />
        {[10, 20, 30].map((r) => (
          <ellipse key={r} cx="50" cy="50" rx="42" ry={r} fill="none" stroke="hsl(var(--foreground))" strokeOpacity="0.12" strokeWidth="0.25" />
        ))}
        {regions.map((r, i) => (
          <g key={r.name} style={{ transformOrigin: `${r.x}% ${r.y}%` }}>
            <circle
              cx={r.x}
              cy={r.y}
              r={r.up ? 1.6 : 1.2}
              fill={r.up ? "#f5c05d" : "#6b7683"}
              opacity={r.up ? 0.95 : 0.55}
              style={{
                filter: r.up ? "drop-shadow(0 0 3px #f5c05d)" : "none",
                animation: `${r.up ? "twinkle" : "glow-pulse"} ${3 + (i % 4)}s ease-in-out infinite`,
              }}
            />
            <text x={r.x + 2.5} y={r.y + 0.8} fontSize="1.9" fill="hsl(var(--foreground))" opacity="0.6" fontFamily="Inter">
              {r.name}
            </text>
          </g>
        ))}
      </svg>
      <div className="pointer-events-none absolute bottom-2 left-0 right-0 text-center">
        <span className="eyebrow">2006–2010  ›  2023–2025</span>
      </div>
    </div>
  );
};

/* ---------------- Chapter 2: two environments ---------------- */

const EnvironmentA = () => {
  // endless comparison feed
  const [rows] = useState(() => Array.from({ length: 30 }));
  return (
    <div className="relative h-[360px] w-full max-w-[240px] overflow-hidden rounded-[24px] border border-foreground/20 bg-slate-100 shadow-md">
      <div className="absolute inset-x-0 top-0 h-6 border-b border-foreground/10 bg-white/60 backdrop-blur-sm" />
      <div className="absolute inset-0 pt-6" style={{ animation: "loop-dash 0s" }}>
        <div className="animate-[drift-x_18s_linear_infinite] absolute inset-0" style={{ animationName: "none" }}>
          <div className="flex flex-col gap-2 p-2" style={{ animation: "scrollUp 18s linear infinite" }}>
            {rows.map((_, i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg bg-white/80 p-2 text-[10px]">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-pink-300 to-purple-300" />
                <div className="flex-1">
                  <div className="h-1.5 w-2/3 rounded bg-slate-300" />
                  <div className="mt-1 h-1.5 w-1/2 rounded bg-slate-200" />
                </div>
                <span className="text-slate-400">♡ {(i * 137) % 999}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes scrollUp { from { transform: translateY(0);} to { transform: translateY(-50%);} }`}</style>
    </div>
  );
};

const EnvironmentB = () => (
  <div className="relative h-[360px] w-full max-w-[240px] overflow-hidden rounded-[24px] border border-foreground/20 bg-[#f5ecd9] shadow-md">
    <div className="absolute inset-x-0 top-0 h-6 border-b border-foreground/10 bg-white/50" />
    <div className="flex h-full flex-col justify-end gap-3 p-4 pt-10">
      <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[12px]">
        thinking of you today
      </div>
      <div className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-primary/90 px-3 py-2 text-[12px] text-primary-foreground">
        that made my morning ✿
      </div>
      <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[12px]">
        tea later?
      </div>
      <div className="mt-2 text-center text-[10px] text-foreground/50">— quiet since 3:14pm —</div>
    </div>
  </div>
);

/* ---------------- Chapter 4: the loop ---------------- */

const CompareLoop = () => {
  const steps = ["see other lives", "compare", "feel behind", "withdraw", "scroll again", "see more"];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="hsl(var(--foreground))" opacity="0.5" />
          </marker>
        </defs>
        <circle cx="100" cy="100" r="72" fill="none" stroke="hsl(var(--foreground))" strokeOpacity="0.35" strokeWidth="0.6" className="dash-loop" markerEnd="url(#arrow)" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="hsl(var(--foreground))" strokeOpacity="0.25" strokeWidth="0.5" className="dash-loop" style={{ animationDuration: "3s" }} />
        <circle cx="100" cy="100" r="40" fill="none" stroke="hsl(var(--foreground))" strokeOpacity="0.15" strokeWidth="0.4" className="dash-loop" style={{ animationDuration: "4s" }} />
      </svg>
      {steps.map((s, i) => {
        const angle = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
        const r = 40;
        const x = 50 + Math.cos(angle) * r;
        const y = 50 + Math.sin(angle) * r;
        return (
          <span
            key={s}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-sans-soft text-foreground/80 shadow-sm"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            {s}
          </span>
        );
      })}
    </div>
  );
};

/* ---------------- Chapter 5: the curve ---------------- */

const UsageCurve = () => (
  <div className="mx-auto w-full max-w-[620px]">
    <svg viewBox="0 0 400 180" className="w-full">
      <defs>
        <linearGradient id="hill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e6d6b5" />
          <stop offset="100%" stopColor="#c9b98f" />
        </linearGradient>
      </defs>
      <path d="M0 140 Q 120 30 200 40 T 400 150 L400 180 L0 180 Z" fill="url(#hill)" />
      <path d="M0 140 Q 120 30 200 40 T 400 150" fill="none" stroke="hsl(var(--foreground))" strokeOpacity="0.3" strokeWidth="1" />
      {/* markers */}
      <g fontFamily="Inter" fontSize="9" fill="hsl(var(--foreground))" opacity="0.7">
        <circle cx="15" cy="140" r="3" fill="#8a9a86" />
        <text x="15" y="160" textAnchor="middle">none</text>
        <circle cx="200" cy="40" r="4" fill="#f5c05d" />
        <text x="200" y="24" textAnchor="middle">&lt; 1 hr / day</text>
        <circle cx="380" cy="150" r="3" fill="#6b7683" />
        <text x="380" y="168" textAnchor="middle">heavy, passive</text>
      </g>
    </svg>
    <p className="mt-2 text-center eyebrow">illustrative pattern based on report findings</p>
  </div>
);

/* ---------------- Chapter 6: explorable world ---------------- */

type Spot = { id: string; x: number; y: number; label: string; line: string; icon: ReactNode };

const DinoWorld = () => {
  const [active, setActive] = useState<string | null>(null);
  const spots: Spot[] = [
    { id: "lantern", x: 18, y: 55, label: "lantern", line: "small rituals and memories, kept warm.", icon: <span>🏮</span> },
    { id: "weather", x: 78, y: 22, label: "weather", line: "how today feels, without a number.", icon: <span>☁️</span> },
    { id: "globe", x: 84, y: 68, label: "globe", line: "a reminder that other people are feeling things too.", icon: <span>🌍</span> },
    { id: "journal", x: 32, y: 78, label: "keepsake", line: "the things Dino remembers about you.", icon: <span>📓</span> },
    { id: "dino", x: 52, y: 60, label: "Dino", line: "the character that carries the relationship.", icon: <span>🦕</span> },
  ];
  return (
    <div className="relative mx-auto aspect-[16/10] w-full max-w-[900px] overflow-hidden rounded-[28px] border border-foreground/10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.3)]">
      <Sky warm />
      <Cloud style={{ top: "10%", left: "-5%", width: 140 }} />
      <Cloud style={{ top: "18%", left: "40%", width: 90, opacity: 0.5 }} />
      <Fireflies count={10} />
      <img src={dinoComfort} alt="" className="absolute bottom-[8%] left-1/2 w-40 -translate-x-1/2" />
      <Grass />
      {spots.map((s) => (
        <button
          key={s.id}
          onClick={() => setActive(active === s.id ? null : s.id)}
          onMouseEnter={() => setActive(s.id)}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/20 bg-background/80 px-3 py-1.5 text-[12px] font-sans-soft shadow-sm backdrop-blur transition hover:scale-105"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          aria-label={s.label}
        >
          <span className="mr-1.5">{s.icon}</span>
          {s.label}
        </button>
      ))}
      {active && (
        <div className="absolute bottom-4 left-1/2 max-w-[80%] -translate-x-1/2 rounded-2xl bg-background/95 px-5 py-3 text-center text-sm text-foreground shadow-lg backdrop-blur">
          {spots.find((s) => s.id === active)?.line}
          <button
            onClick={() => setActive(null)}
            className="ml-3 text-xs text-muted-foreground underline"
            aria-label="Close"
          >
            close
          </button>
        </div>
      )}
    </div>
  );
};

/* ---------------- Chapter 7: signals drifting inward ---------------- */

const Notices = () => {
  const signals = ["check-ins", "writing", "recurring feelings", "personal patterns", "helpful moments"];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      {signals.map((s, i) => {
        const angle = (i / signals.length) * Math.PI * 2;
        const x = 50 + Math.cos(angle) * 40;
        const y = 50 + Math.sin(angle) * 40;
        return (
          <span
            key={s}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/15 bg-background/90 px-3 py-1 text-[11px] font-sans-soft text-foreground/70 shadow-sm"
            style={{ left: `${x}%`, top: `${y}%`, animation: `float ${5 + i}s ease-in-out infinite` }}
          >
            {s}
          </span>
        );
      })}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 bg-primary/10 px-5 py-3 text-center text-sm font-sans-soft">
        <div className="text-foreground/80">does this person need something,</div>
        <div className="text-foreground/60">or are they okay?</div>
      </div>
    </div>
  );
};

/* ---------------- Chapter 9: real today ---------------- */

const RealToday = () => {
  const items = [
    { t: "available", d: "on the App Store", tag: "shipped" },
    { t: "five languages", d: "supported today", tag: "shipped" },
    { t: "27 countries", d: "in the crisis directory", tag: "shipped" },
    { t: "multilingual", d: "crisis-keyword detection", tag: "shipped" },
    { t: "pattern-based", d: "reaching out is live", tag: "shipped" },
    { t: "personal patterns", d: "and weekly rhythms", tag: "shipped" },
    { t: "quiet by default", d: "when nothing calls for it", tag: "shipped" },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((it, i) => (
        <Reveal key={it.t} delay={i * 60} className="flex items-start gap-3 rounded-2xl border border-foreground/10 bg-background/70 p-4">
          <img src={heartStamp} alt="" className="mt-0.5 h-6 w-6 flex-none" />
          <div>
            <div className="text-sm text-foreground/85"><span className="font-editorial italic">{it.t}</span> {it.d}</div>
            <div className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground/70">{it.tag}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

/* ---------------- top mini-nav (chapters) ---------------- */

const ChapterNav = () => (
  <div className="pointer-events-none fixed left-0 right-0 top-16 z-30 hidden justify-center md:flex">
    <div className="pointer-events-auto flex items-center gap-4 rounded-full border border-foreground/10 bg-background/70 px-5 py-1.5 font-sans-soft text-[11px] text-muted-foreground backdrop-blur">
      <a href="#dino" className="hover:text-foreground">Dino</a>
      <span className="opacity-40">·</span>
      <a href="#problem" className="hover:text-foreground">the problem</a>
      <span className="opacity-40">·</span>
      <a href="#how" className="hover:text-foreground">how Dino works</a>
      <span className="opacity-40">·</span>
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">download</a>
    </div>
  </div>
);

/* ---------------- sources drawer ---------------- */

const SourcesDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-auto max-w-3xl px-6 pb-16 font-sans-soft">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full rounded-2xl border border-foreground/15 bg-background/60 px-5 py-4 text-left text-sm text-foreground/80 transition hover:bg-background"
      >
        <span className="mr-2 text-muted-foreground">{open ? "−" : "+"}</span> sources and context
      </button>
      {open && (
        <div className="mt-3 space-y-3 rounded-2xl border border-foreground/10 bg-background/60 p-5 text-sm text-foreground/75">
          <p>
            World Happiness Report 2026 · Gallup World Poll ·{" "}
            <a className="underline" href="https://worldhappiness.report/" target="_blank" rel="noopener noreferrer">worldhappiness.report</a>
          </p>
          <p>Regional and cohort trends in youth life evaluation (2006–2010 vs 2023–2025).</p>
          <p>WHR 2026 chapter on internet use, trust, social connections and emotional bonds — cross-regional patterns of digital use and youth wellbeing.</p>
          <p>OECD PISA data across 47 countries — adolescent social-media intensity and life satisfaction.</p>
          <p className="text-xs text-muted-foreground">
            The report presents associations, not verified causal claims. Regional and gender variation apply throughout.
          </p>
        </div>
      )}
    </div>
  );
};

/* ---------------- HERO ---------------- */

const Hero = () => {
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setCursor({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={ref} id="dino" className="relative min-h-[92vh] w-full overflow-hidden">
      <Sky warm />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(255,236,180,0.35), transparent 40%)`,
          transition: "background 200ms ease-out",
        }}
      />
      <Cloud style={{ top: "12%", left: "-8%", width: 160 }} />
      <div className="absolute top-[18%] left-0 right-0 animate-drift-slow">
        <Cloud style={{ position: "relative", width: 120, opacity: 0.6 }} />
      </div>
      <div className="absolute top-[8%] left-0 right-0 animate-drift">
        <Cloud style={{ position: "relative", width: 90, opacity: 0.5 }} />
      </div>
      <Fireflies count={16} />

      <Lantern className="absolute right-[10%] top-[22%] hidden md:block" />
      <Lantern className="absolute left-[8%] top-[35%] hidden lg:block" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-4xl flex-col items-center justify-center px-6 pt-24 text-center">
        <Reveal>
          <p className="eyebrow">Dino</p>
        </Reveal>
        <Reveal delay={140}>
          <h1 className="mt-4">personal intelligence for everyone</h1>
        </Reveal>
        <Reveal delay={320}>
          <p className="lede mx-auto mt-6 max-w-xl text-foreground/75">
            A small character that gets to know you, notices when something changes,
            and knows when to stay quiet.
          </p>
        </Reveal>
        <Reveal delay={520}>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#the-world"
              className="rounded-full bg-foreground px-6 py-3 font-sans-soft text-sm text-background transition hover:opacity-90"
            >
              Meet Dino
            </a>
            <a
              href="#problem"
              className="font-sans-soft text-sm text-foreground/70 underline underline-offset-4 hover:text-foreground"
            >
              Why does this need to exist?
            </a>
          </div>
        </Reveal>
      </div>

      {/* Landscape */}
      <div className="absolute bottom-0 left-0 right-0">
        <Grass />
      </div>

    </section>
  );
};

/* ---------------- Transition band ---------------- */

const Transition = () => (
  <section className="relative min-h-[60vh] w-full overflow-hidden">
    <div
      aria-hidden
      className="absolute inset-0"
      style={{ background: "linear-gradient(180deg, #cbb69b 0%, #a9b0b8 60%, #8f97a3 100%)" }}
    />
    <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <Reveal>
        <p className="font-editorial italic text-2xl text-foreground/75 md:text-3xl">
          something unusual is happening to young people in part of the Western world.
        </p>
      </Reveal>
      <Reveal delay={400}>
        <p className="mt-5 eyebrow">scroll gently</p>
      </Reveal>
    </div>
  </section>
);

/* ============================================================ */
/*                             PAGE                             */
/* ============================================================ */

const Index = () => {
  return (
    <div className="story-page">
      <SEO
        title="Dino — personal intelligence for your everyday life"
        description="A character-led personal intelligence that gets to know you, notices when something changes, and knows when to stay quiet. Starting with mental wellbeing."
      />
      <ChapterNav />

      {/* HERO */}
      <Hero />

      {/* TRANSITION */}
      <Transition />

      {/* CHAPTER 1 */}
      <section id="problem" className="relative w-full bg-[#eef1f4]">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>01 / something changed</Eyebrow>
            <Reveal><h2>young people are not getting unhappier everywhere.</h2></Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-foreground/75">
                Across most of the world, life evaluations among people under 25 have improved over
                the past twenty years. In eight of ten global regions, representing roughly 90% of
                the world's population, young people report higher life evaluations now than in
                2006–2010, either in absolute terms or relative to adults. In 85 of 136 countries,
                people under 25 are happier now than they were about twenty years ago.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-5 text-foreground/75">
                The clear exceptions are the United States, Canada, Australia, New Zealand and
                Western Europe. Across the first four, happiness among people under 25 fell by an
                average of 0.86 points on a zero-to-ten scale between 2006–2010 and 2023–2025.
              </p>
            </Reveal>
            <Source>World Happiness Report 2026, Gallup World Poll</Source>
          </div>
          <Reveal delay={200}>
            <RegionGlobe />
          </Reveal>
        </div>

        <div className="mx-auto max-w-3xl px-6 pb-24 text-center">
          <Reveal><p className="lede text-foreground/80">this is not a story about every young person becoming unhappier.</p></Reveal>
          <Reveal delay={200}><p className="lede mt-4 text-foreground/80">it is a regional divergence.</p></Reveal>
          <Reveal delay={400}>
            <p className="mt-6 text-foreground/70">
              While youth wellbeing improved across much of the world, it declined sharply in a
              small group of wealthy Western regions.
            </p>
          </Reveal>
          <Reveal delay={600}>
            <p className="font-editorial italic mt-10 text-xl text-foreground/70">
              the question is not "why is everyone unhappy?"
            </p>
          </Reveal>
          <Reveal delay={900}>
            <p className="font-editorial italic mt-4 text-xl text-foreground/85">
              the question is "what happened here?"
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHAPTER 2 */}
      <section className="relative w-full bg-[#e7ecef]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <Eyebrow>02 / not just screen time</Eyebrow>
            <Reveal><h2>young people elsewhere use the internet too.</h2></Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-foreground/75">
                The World Happiness Report found surprisingly similar patterns of internet and
                social-media use across global regions. That means the Western decline cannot be
                explained only by hours online. The relationship depends on which platforms,
                whether use is active or passive, whether it supports communication or comparison,
                on age, gender, and existing social connection.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 sm:items-center sm:justify-items-center">
            <Reveal>
              <div className="flex flex-col items-center gap-3">
                <EnvironmentA />
                <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
                  passive · visual · algorithmic · endless
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-col items-center gap-3">
                <EnvironmentB />
                <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
                  communicative · relational · finite · human
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-center">
            <Reveal>
              <p className="text-foreground/75">
                The research found more negative associations for algorithmic, influencer-focused
                environments, while communication-oriented uses can have more positive or neutral
                relationships with wellbeing.
              </p>
            </Reveal>
            <Source>World Happiness Report 2026, chapter on internet use and wellbeing</Source>
          </div>
        </div>
      </section>

      {/* CHAPTER 3 */}
      <section className="relative w-full overflow-hidden bg-[#dfe4ea]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-5">
          <div className="md:col-span-2">
            <Eyebrow>03 / what disappeared</Eyebrow>
            <Reveal><h2>the deeper change happened between people.</h2></Reveal>
            <Reveal delay={160}>
              <ul className="mt-8 space-y-4 text-foreground/75">
                <li className="border-l-2 border-foreground/20 pl-4">interpersonal trust declined.</li>
                <li className="border-l-2 border-foreground/20 pl-4">institutional trust declined.</li>
                <li className="border-l-2 border-foreground/20 pl-4">perceived social activity declined.</li>
                <li className="border-l-2 border-foreground/20 pl-4">in-person meeting frequency declined.</li>
              </ul>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-6 text-sm text-foreground/70">
                These declines were particularly pronounced among younger Europeans, especially in
                Western Europe. The largest deterioration appeared among Gen Z and millennial
                women. Perceived social activity — how socially active someone feels compared with
                people their age — declined broadly and strongly predicted wellbeing losses.
              </p>
            </Reveal>
            <Source>WHR 2026, chapter on trust, connection and emotional bonds</Source>
          </div>

          <div className="md:col-span-3">
            <Reveal>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-foreground/10 bg-[#c9d1d9]">
                <svg viewBox="0 0 400 300" className="h-full w-full">
                  {/* first: connected */}
                  {[
                    [80, 90], [160, 70], [230, 110], [300, 90],
                    [110, 190], [200, 210], [280, 200],
                  ].map(([x, y], i) => (
                    <g key={i}>
                      <circle cx={x} cy={y} r="5" fill="#5f7554" />
                      {i > 0 && (
                        <line x1={x} y1={y} x2={80 + ((i * 47) % 220)} y2={90 + ((i * 31) % 120)} stroke="#5f7554" strokeOpacity={0.15} strokeWidth="1" />
                      )}
                    </g>
                  ))}
                  {/* mirror */}
                  <rect x="330" y="130" width="40" height="60" rx="8" fill="none" stroke="#6b7683" strokeWidth="1.5" />
                  <line x1="335" y1="140" x2="365" y2="140" stroke="#6b7683" strokeOpacity="0.4" strokeWidth="1" />
                  <line x1="335" y1="150" x2="360" y2="150" stroke="#6b7683" strokeOpacity="0.4" strokeWidth="1" />
                  <line x1="335" y1="160" x2="365" y2="160" stroke="#6b7683" strokeOpacity="0.4" strokeWidth="1" />
                </svg>
                <p className="absolute bottom-3 left-4 font-hand text-lg text-foreground/60">paths that stopped crossing</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p className="lede mt-8 text-foreground/80">
                the digital environment did not merely take time.
              </p>
              <p className="lede mt-3 text-foreground/80">
                it changed how people saw themselves relative to everyone else.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHAPTER 4 */}
      <section className="relative w-full overflow-hidden bg-[#d6dae0]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <Reveal><CompareLoop /></Reveal>
          <div>
            <Eyebrow>04 / the loop</Eyebrow>
            <Reveal><h2>comparison creates a loop that is difficult to leave.</h2></Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-foreground/75">
                The evidence links heavy use, passive consumption, influencer-focused environments
                and online comparison with lower wellbeing, particularly among girls and young
                people in Western and English-speaking countries.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="font-editorial italic mt-6 text-lg text-foreground/80">
                the product feels social, while the person becomes less socially connected.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <p className="mt-5 text-foreground/70">
                The environment substitutes the appearance of connection for the experience of
                being known.
              </p>
            </Reveal>
            <Source>WHR 2026 · associational findings, not sole cause</Source>
          </div>
        </div>
      </section>

      {/* CHAPTER 5 - warming */}
      <section className="relative w-full" style={{ background: "linear-gradient(180deg, #d6dae0 0%, #ead9bd 100%)" }}>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <Eyebrow>05 / not zero</Eyebrow>
          <Reveal><h2>leaving the internet completely is not the answer either.</h2></Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-foreground/75">
              Across international adolescent data, light social-media users — using it for less
              than one hour per day — reported the highest average life satisfaction. Higher on
              average than for non-users, and substantially higher than for very heavy users.
              Results varied by gender and region, and non-users and heavy users showed greater
              variation. This is a pattern, not a guaranteed formula.
            </p>
          </Reveal>
          <div className="mt-14">
            <Reveal><UsageCurve /></Reveal>
          </div>
          <Source>WHR 2026 · OECD PISA data across 47 countries</Source>

          <Reveal delay={200}>
            <p className="lede mt-16 text-foreground/80">the useful digital presence is not endless.</p>
          </Reveal>
          <Reveal delay={400}>
            <p className="lede mt-3 text-foreground/85">it is small, warm, intentional, and easy to leave.</p>
          </Reveal>
        </div>
      </section>

      {/* CHAPTER 6 - Dino */}
      <section id="the-world" className="relative w-full overflow-hidden">
        <Sky warm className="absolute inset-0" />
        <Fireflies count={14} />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 text-center">
          <Reveal>
            <p className="font-editorial italic text-xl text-foreground/70 md:text-2xl">
              what if personal technology was built around less contact, not more?
            </p>
          </Reveal>
        </div>
      </section>

      <section id="how" className="relative w-full bg-[#f2e6cd]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <Eyebrow>06 / a different kind of presence</Eyebrow>
            <Reveal><h2>Dino is personal intelligence for your everyday life.</h2></Reveal>
            <Reveal delay={140}>
              <p className="lede mt-5 text-foreground/80">
                Not a chatbot with a mascot. A character, in a world, that gets to know you.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-6 text-foreground/75">
                You do not arrive at an empty text field. You visit a place. There is a character
                with a personality. There is weather, a globe, lanterns, rituals, memories, and
                signs of life. The intelligence exists underneath that relationship.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <p className="mt-4 text-foreground/75">
                Dino learns from the things a person chooses to share: check-ins, writing,
                recurring feelings, and what has helped before. Sleep and movement are signals
                Dino is being built to understand, not universal features today. It reads those
                signals against a person's own baseline, not a generic average.
              </p>
            </Reveal>
          </div>

          <div className="mt-14">
            <Reveal><DinoWorld /></Reveal>
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-center">
            <Reveal><p className="lede text-foreground/85">the whimsy is not decoration.</p></Reveal>
            <Reveal delay={200}>
              <p className="mt-3 text-foreground/70">
                it is how intelligence becomes something a person can actually form a relationship
                with.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHAPTER 7 */}
      <section className="relative w-full bg-[#ede0c4]">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>07 / intelligence that notices</Eyebrow>
            <Reveal><h2>everyone else built intelligence that waits to be asked.</h2></Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-foreground/75">
                People going through a difficult period do not always ask. Dino is designed to
                notice meaningful patterns, compare them against a person's own baseline, and
                decide whether anything is needed.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-4 text-foreground/75">
                Most of the time, the answer is: they are okay. Sometimes it is a small warm
                action — a gentle check-in, a relevant reflection, a breathing moment, a
                supportive reminder.
              </p>
            </Reveal>
            <p className="mt-6 font-hand text-lg text-primary/80">no alarms. no medical monitoring.</p>
          </div>
          <Reveal delay={100}><Notices /></Reveal>
        </div>
      </section>

      {/* CHAPTER 8 */}
      <section className="relative w-full bg-[#e6d6b5]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <Eyebrow>08 / designed to stay quiet</Eyebrow>
          <Reveal><h2>Dino also knows when to leave you alone.</h2></Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-foreground/75">
              Most digital products are rewarded when someone returns more often, stays longer, and
              generates more activity. Dino is being designed around a different outcome. It can
              decide nothing needs to happen. It can stay quiet. When it does appear, the moment
              should feel relevant and considered.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="font-editorial italic mt-8 text-xl text-foreground/85">
              restraint is part of the product architecture.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 flex max-w-md flex-wrap justify-center gap-2">
            {["ping", "streak", "reminder", "badge", "nudge", "digest", "alert", "prompt", "checkin"].map((n, i) => (
              <span
                key={n}
                className="rounded-full border border-foreground/15 bg-background/60 px-3 py-1 text-xs text-foreground/60"
                style={{ opacity: i === 4 ? 1 : 0.25 }}
              >
                {n}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">most quietly disappear.</p>
        </div>
      </section>

      {/* CHAPTER 9 */}
      <section className="relative w-full bg-[#f2ead6]">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-center">
            <Eyebrow>09 / already living</Eyebrow>
            <Reveal><h2>this is not only an idea.</h2></Reveal>
          </div>
          <div className="mt-12">
            <RealToday />
          </div>
          <Reveal delay={200}>
            <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-foreground/10 bg-background/60 p-6 text-center">
              <p className="eyebrow mb-3">where this is going</p>
              <p className="text-foreground/75">
                Helping Dino understand changes earlier, and become useful before someone has to
                explain everything from the beginning.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CHAPTER 10 */}
      <section className="relative w-full bg-[#ead9bd]">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="relative">
              <img src={dinoFlowers} alt="Dino, surrounded by flowers" className="mx-auto w-72" />
              <img src={flowerYellow} alt="" className="absolute -left-2 top-8 h-10 w-10 animate-float" />
              <img src={flowerBlue} alt="" className="absolute -right-2 bottom-8 h-10 w-10 animate-float-slow" />
            </div>
          </Reveal>
          <div>
            <Eyebrow>10 / why Dino</Eyebrow>
            <Reveal><h2>people trusted the character before there was an app.</h2></Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-foreground/75">
                A community of 358,000 people connected with Dino through illustrations and
                stories before a product existed. Dino did not begin as an AI interface. It began
                as a character people already visited for warmth, recognition, and a sense of
                being understood.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-4 text-foreground/75">
                The product is being built underneath an existing relationship, rather than
                manufacturing one after the technology.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHAPTER 11 */}
      <section className="relative w-full bg-[#e2d3b3]">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <Eyebrow>11 / beyond one category</Eyebrow>
          <Reveal><h2>mental wellbeing is where Dino begins.</h2></Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 text-foreground/75">
              It is the starting point because it is where context, trust, restraint, and being
              known matter most. But Dino's larger direction is personal intelligence that can
              live with someone over time. Not a tool that forgets the person after answering.
              Not an assistant that exists only inside a text box.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="font-editorial italic mt-10 text-xl text-foreground/70">
              the World Happiness Report measures countries.
            </p>
          </Reveal>
          <Reveal delay={500}>
            <p className="font-editorial italic mt-3 text-xl text-foreground/90">
              Dino is being built for the person inside the number.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL SCENE */}
      <section className="relative w-full overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, #2a2f3a 0%, #3d3a4a 40%, #5a5462 80%, #7d6f65 100%)" }}
        />
        <Fireflies count={22} />
        <div className="absolute right-[10%] top-[18%]">
          <Lantern />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-3xl flex-col items-center justify-center px-6 py-32 text-center">
          <img src={dinoMeditation} alt="Dino" className="mb-10 h-40 w-auto opacity-90" />
          <Reveal>
            <p className="font-editorial italic text-xl text-background/70 md:text-2xl">
              everyone else is building intelligence that waits to be asked.
            </p>
          </Reveal>
          <Reveal delay={600}>
            <p className="font-editorial mt-10 text-3xl text-background md:text-4xl">
              Dino is intelligence that notices.
            </p>
          </Reveal>
          <Reveal delay={1100}>
            <div className="mt-14 flex flex-col items-center gap-3">
              <div className="inline-flex">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-background px-6 py-3 text-foreground font-sans-soft text-sm transition-opacity hover:opacity-90"
                >
                  <svg viewBox="0 0 384 512" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM260 110.3c25.1-29.8 22.8-56.9 22-66.3-22.1 1.3-47.7 15.1-62.3 32-16.1 18.1-25.6 40.5-23.6 65.8 23.9 1.9 45.7-10.4 63.9-31.5z" />
                  </svg>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase tracking-wide opacity-70">Download on the</span>
                    <span className="text-sm font-medium">App Store</span>
                  </span>
                </a>
              </div>
              <p className="text-xs text-background/60">Personal intelligence for your everyday life.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SAFETY & SOURCES */}
      <section className="relative w-full bg-background pt-16">
        <div className="mx-auto max-w-3xl px-6 pb-10 text-center">
          <p className="text-sm text-foreground/70 font-sans-soft">
            If you or someone you know is in crisis, please reach a real person.{" "}
            <Link to="/hotlines" className="underline underline-offset-4">
              See crisis hotlines
            </Link>
            .
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Dino Initiative does not provide medical advice.
          </p>
        </div>
        <SourcesDrawer />
      </section>
    </div>
  );
};

export default Index;
