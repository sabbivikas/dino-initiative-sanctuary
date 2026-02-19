import { Button } from "@/components/ui/button";

const GetInvolved = () => {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24 text-center">
      <h1 className="mb-4">Get Involved</h1>
      <p className="mb-10 text-muted-foreground">
        Join our community on Discord to connect, share, and support one another.
      </p>
      <Button asChild size="lg" className="text-lg px-8 py-6">
        <a href="https://discord.gg/rpCFuAXH" target="_blank" rel="noopener noreferrer">
          Join our Discord
        </a>
      </Button>
    </div>
  );
};

export default GetInvolved;
