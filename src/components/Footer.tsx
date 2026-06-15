import { Link } from "react-router-dom";
import dinoLogo from "@/assets/dino-logo.png";

const groups: { title: string; links: { to: string; label: string; external?: boolean }[] }[] = [
  {
    title: "Product",
    links: [
      { to: "/app", label: "The App" },
      { to: "/stories", label: "Dino Stories" },
      { to: "/quiz", label: "Daily Quiz" },
      { to: "/kindness", label: "Kindness Letters" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/resources", label: "Resources" },
      { to: "/hotlines", label: "Crisis Hotlines" },
      { to: "/support", label: "Support" },
    ],
  },
  {
    title: "About",
    links: [
      { to: "/our-story", label: "Our Story" },
      { to: "/partners", label: "Partners & Investors" },
      { to: "/get-involved", label: "Get Involved" },
      { to: "/privacy", label: "Privacy & Safety" },
      { to: "/copyright", label: "Copyright" },
    ],
  },
];

const Footer = () => (
  <footer className="border-t bg-background">
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <img src={dinoLogo} alt="Dino Initiative logo" className="h-9 w-9 object-contain" />
            <span className="text-base font-semibold tracking-tight">Dino Initiative</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A gentle place to check in. Free mental wellness resources, made with care.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Press &amp; partnerships:{" "}
            <a
              href="mailto:Dinoinitiativesupport@gmail.com"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Dinoinitiativesupport@gmail.com
            </a>
          </p>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">
              {g.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {g.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t pt-6">
        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          Dino Initiative does not provide medical advice, diagnosis, or treatment. If you are in
          crisis, please{" "}
          <Link to="/hotlines" className="underline underline-offset-4 hover:text-foreground">
            contact a crisis hotline
          </Link>{" "}
          or local emergency services.
        </p>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dino Initiative · Made with care
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
