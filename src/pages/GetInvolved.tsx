import { Button } from "@/components/ui/button";

const GetInvolved = () => {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24 text-center">
      <h1 className="mb-4">Get Involved</h1>
      <p className="mb-10 text-muted-foreground">
        Connect with us on Instagram, TikTok, Discord and more.
      </p>
      <Button asChild size="lg" className="text-lg px-8 py-6">
        <a href="https://tr.ee/nsRI_74XKw" target="_blank" rel="noopener noreferrer">
          Join Our Community
        </a>
      </Button>
    </div>
  );
};

export default GetInvolved;
