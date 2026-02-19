import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import dinoLogo from "@/assets/dino-logo.png";

const navLinks = [
  { to: "/resources", label: "Resources" },
  { to: "/hotlines", label: "Hotlines" },
  { to: "/our-story", label: "Our Story" },
  { to: "/get-involved", label: "Get Involved" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <img src={dinoLogo} alt="Dino Initiative logo" className="h-9 w-9 object-contain" />
          <span className="hidden sm:inline">Dino Initiative</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeClassName="text-foreground bg-accent"
            >
              {link.label}
            </NavLink>
          ))}
          <Button asChild size="sm" className="ml-2 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90">
            <Link to="/hotlines">Get help now</Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t px-6 pb-6 pt-4 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeClassName="text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild size="sm" variant="outline" className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/hotlines" onClick={() => setOpen(false)}>Get help now</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
