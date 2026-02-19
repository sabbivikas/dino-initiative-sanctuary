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
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link to="/" className="fixed top-4 left-4 z-50 flex items-center gap-2 text-lg font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <img src={dinoLogo} alt="Dino Initiative logo" className="h-8 w-8 object-contain" />
          Dino Initiative
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeClassName="text-foreground"
            >
              {link.label}
            </NavLink>
          ))}
          <Button asChild size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/hotlines">Get help now</Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
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
