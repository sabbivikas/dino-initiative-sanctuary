import { Mail } from "lucide-react";

const Copyright = () => {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <h1 className="mb-2 text-3xl font-bold md:text-4xl">Copyright</h1>
      <p className="mb-10 text-muted-foreground leading-relaxed">
        © 2026 Vikas Sabbi. All rights reserved.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="mb-2 text-xl font-semibold">Ownership</h2>
          <p className="leading-relaxed text-muted-foreground">
            The Dino app, Dino Initiative branding, visual assets, written content, characters, illustrations, designs, and related digital experiences are owned by Vikas Sabbi unless otherwise stated.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">Usage</h2>
          <p className="leading-relaxed text-muted-foreground">
            You may not copy, reproduce, distribute, modify, or use Dino Initiative content, characters, artwork, app screenshots, designs, or written materials without written permission.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">Contact</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            For copyright questions, permissions, or concerns, contact:
          </p>
          <a
            href="mailto:Dinoinitiativesupport@gmail.com"
            className="inline-flex items-center gap-2 text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
          >
            <Mail className="h-5 w-5" />
            Dinoinitiativesupport@gmail.com
          </a>
        </section>
      </div>
    </div>
  );
};

export default Copyright;
