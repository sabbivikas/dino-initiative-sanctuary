import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t">
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-6 py-8 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
      <Link to="/privacy" className="transition-colors hover:text-foreground">
        Privacy &amp; Safety
      </Link>
      <span>© {new Date().getFullYear()} Dino Initiative</span>
    </div>
  </footer>
);

export default Footer;
