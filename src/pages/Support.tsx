import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, AlertTriangle, Phone } from "lucide-react";

const Support = () => {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <h1 className="mb-2 text-3xl font-bold md:text-4xl">Dino Support</h1>
      <p className="mb-8 text-muted-foreground leading-relaxed">
        Need help with the Dino app? We’re here to help.
      </p>

      <div className="space-y-8">
        {/* Contact */}
        <section>
          <p className="mb-4 leading-relaxed">
            For app support, bug reports, feedback, account questions, or safety concerns, contact us at:
          </p>
          <a
            href="mailto:Dinoinitiativesupport@gmail.com"
            className="mb-4 inline-flex items-center gap-2 text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
          >
            <Mail className="h-5 w-5" />
            Dinoinitiativesupport@gmail.com
          </a>
          <div>
            <Button asChild className="mt-2">
              <a href="mailto:Dinoinitiativesupport@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Support
              </a>
            </Button>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="rounded-lg border border-border/60 bg-secondary/40 p-5">
          <div className="mb-2 flex items-center gap-2 font-medium">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Important Note
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Dino is not a replacement for therapy, medical advice, emergency care, or professional mental health treatment. Dino is designed as a gentle emotional wellness companion for reflection, comfort, and daily self-care.
          </p>
        </section>

        {/* Crisis */}
        <section className="rounded-lg border border-destructive/20 bg-destructive/5 p-5">
          <div className="mb-2 flex items-center gap-2 font-medium text-destructive">
            <Phone className="h-5 w-5" />
            If you are in crisis
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            If you are in immediate danger or experiencing a mental health crisis, please contact local emergency services or a crisis hotline in your country right away.
          </p>
          <div className="mt-3">
            <Button asChild variant="outline" size="sm">
              <Link to="/hotlines">Find Crisis Hotlines</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support;
