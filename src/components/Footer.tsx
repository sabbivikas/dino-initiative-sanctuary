import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t">
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-6 py-8 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <Link to="/app" className="transition-colors hover:text-foreground">
          The App
        </Link>
        <Link to="/privacy" className="transition-colors hover:text-foreground">
          Privacy &amp; Safety
        </Link>
        <Link to="/support" className="transition-colors hover:text-foreground">
          Support
        </Link>
      </div>
      <span>© {new Date().getFullYear()} Dino Initiative</span>
    </div>
  </footer>
);

export default Footer;
