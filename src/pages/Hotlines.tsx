import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Hotline = { name: string; phone: string; text?: string; hours: string };

const data: Record<string, Hotline[]> = {
  "United States": [
    { name: "988 Suicide & Crisis Lifeline", phone: "988", text: "Text 988", hours: "24/7" },
    { name: "Crisis Text Line", phone: "N/A", text: "Text HOME to 741741", hours: "24/7" },
  ],
  "United Kingdom": [
    { name: "Samaritans", phone: "116 123", hours: "24/7" },
    { name: "SHOUT", phone: "N/A", text: "Text SHOUT to 85258", hours: "24/7" },
  ],
  Canada: [
    { name: "Talk Suicide Canada", phone: "1-833-456-4566", text: "Text 45645", hours: "24/7" },
  ],
  Australia: [
    { name: "Lifeline Australia", phone: "13 11 14", text: "Text 0477 13 11 14", hours: "24/7" },
    { name: "Beyond Blue", phone: "1300 22 4636", hours: "24/7" },
  ],
};

const countries = Object.keys(data);

const Hotlines = () => {
  const [country, setCountry] = useState(countries[0]);

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <h1 className="mb-2 text-3xl font-bold md:text-4xl">Crisis Hotlines</h1>
      <p className="mb-8 text-muted-foreground leading-relaxed">
        If you or someone you know is in immediate danger, please call your local emergency number. The lines below connect you with trained counselors who are ready to listen.
      </p>

      <div className="mb-10">
        <label htmlFor="country-select" className="mb-2 block text-sm font-medium">
          Select your country
        </label>
        <Select value={country} onValueChange={setCountry}>
          <SelectTrigger id="country-select" className="w-full max-w-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {countries.map((c) => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-6">
        {data[country].map((h) => (
          <div key={h.name} className="border-b pb-5 last:border-b-0">
            <h3 className="mb-1 font-medium">{h.name}</h3>
            <div className="space-y-0.5 text-sm text-muted-foreground">
              {h.phone !== "N/A" && <p>Phone: {h.phone}</p>}
              {h.text && <p>{h.text}</p>}
              <p>Hours: {h.hours}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotlines;
