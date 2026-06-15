import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import dinoComfort from "@/assets/dino-comfort.png";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Page not found"
        description="That page wandered off. Head back home or visit our crisis hotlines."
        path={location.pathname}
      />
      <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
        <img
          src={dinoComfort}
          alt="Dino looking a bit lost"
          width={160}
          height={160}
          className="mb-6 h-32 w-32 object-contain"
        />
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">404</p>
        <h1 className="mb-3 text-4xl font-bold md:text-5xl">This page wandered off.</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Let&apos;s get you somewhere gentler.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link to="/">Back to home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/hotlines">Get help now</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
