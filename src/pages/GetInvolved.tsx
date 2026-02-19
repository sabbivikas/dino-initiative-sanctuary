import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const skills = ["Writing", "Design", "Development", "Social media", "Counseling", "Translation"];

const emailSchema = z.string().trim().email("Please enter a valid email").max(255, "Email is too long");

const partnerSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  org: z.string().max(200, "Organization name is too long"),
  email: emailSchema,
  message: z.string().max(2000, "Message is too long"),
});

const volunteerSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: emailSchema,
  skills: z.array(z.enum(["Writing", "Design", "Development", "Social media", "Counseling", "Translation"])),
});

const GetInvolved = () => {
  const { toast } = useToast();
  const [supporterEmail, setSupporterEmail] = useState("");
  const [partner, setPartner] = useState({ name: "", org: "", email: "", message: "" });
  const [volunteer, setVolunteer] = useState({ name: "", email: "", skills: [] as string[] });

  const confirm = (msg: string) => {
    toast({ title: "Thank you", description: msg });
  };

  const showError = (msg: string) => {
    toast({ title: "Validation error", description: msg, variant: "destructive" });
  };

  const handleSupporter = (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(supporterEmail);
    if (!result.success) { showError(result.error.errors[0].message); return; }
    confirm("You've been added to our supporters list.");
    setSupporterEmail("");
  };

  const handlePartner = (e: React.FormEvent) => {
    e.preventDefault();
    const result = partnerSchema.safeParse(partner);
    if (!result.success) { showError(result.error.errors[0].message); return; }
    confirm("We've received your partner inquiry and will be in touch.");
    setPartner({ name: "", org: "", email: "", message: "" });
  };

  const handleVolunteer = (e: React.FormEvent) => {
    e.preventDefault();
    const result = volunteerSchema.safeParse(volunteer);
    if (!result.success) { showError(result.error.errors[0].message); return; }
    confirm("Your volunteer interest has been submitted!");
    setVolunteer({ name: "", email: "", skills: [] });
  };

  const toggleSkill = (skill: string) => {
    setVolunteer((v) => ({
      ...v,
      skills: v.skills.includes(skill)
        ? v.skills.filter((s) => s !== skill)
        : [...v.skills, skill],
    }));
  };

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <h1 className="mb-2 text-3xl font-bold md:text-4xl">Get Involved</h1>
      <p className="mb-12 text-muted-foreground">
        There are many ways to support Dino Initiative. Choose what feels right for you.
      </p>

      {/* Supporter */}
      <section className="mb-14">
        <h2 className="mb-1 text-xl font-semibold">Become a supporter</h2>
        <p className="mb-4 text-sm text-muted-foreground">Get updates as we grow.</p>
        <form onSubmit={handleSupporter} className="flex max-w-sm gap-3">
          <Input
            type="email"
            required
            placeholder="your@email.com"
            value={supporterEmail}
            onChange={(e) => setSupporterEmail(e.target.value)}
          />
          <Button type="submit">Join</Button>
        </form>
      </section>

      {/* Partner */}
      <section className="mb-14">
        <h2 className="mb-1 text-xl font-semibold">Partner with us</h2>
        <p className="mb-4 text-sm text-muted-foreground">Organizations and professionals — let's work together.</p>
        <form onSubmit={handlePartner} className="max-w-md space-y-4">
          <Input placeholder="Your name" required value={partner.name} onChange={(e) => setPartner({ ...partner, name: e.target.value })} />
          <Input placeholder="Organization" value={partner.org} onChange={(e) => setPartner({ ...partner, org: e.target.value })} />
          <Input type="email" placeholder="Email" required value={partner.email} onChange={(e) => setPartner({ ...partner, email: e.target.value })} />
          <Textarea placeholder="Tell us how you'd like to collaborate" value={partner.message} onChange={(e) => setPartner({ ...partner, message: e.target.value })} />
          <Button type="submit">Send inquiry</Button>
        </form>
      </section>

      {/* Volunteer */}
      <section>
        <h2 className="mb-1 text-xl font-semibold">Volunteer</h2>
        <p className="mb-4 text-sm text-muted-foreground">Share your skills with the community.</p>
        <form onSubmit={handleVolunteer} className="max-w-md space-y-4">
          <Input placeholder="Your name" required value={volunteer.name} onChange={(e) => setVolunteer({ ...volunteer, name: e.target.value })} />
          <Input type="email" placeholder="Email" required value={volunteer.email} onChange={(e) => setVolunteer({ ...volunteer, email: e.target.value })} />
          <fieldset>
            <legend className="mb-2 text-sm font-medium">Skills (select all that apply)</legend>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <label key={skill} className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={volunteer.skills.includes(skill)}
                    onCheckedChange={() => toggleSkill(skill)}
                  />
                  {skill}
                </label>
              ))}
            </div>
          </fieldset>
          <Button type="submit">Submit interest</Button>
        </form>
      </section>
    </div>
  );
};

export default GetInvolved;
