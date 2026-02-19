import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dinoFlowers from "@/assets/dino-flowers-hotline.png";

type Hotline = { name: string; phone: string; text?: string; hours: string };

const data: Record<string, Hotline[]> = {
  Argentina: [
    { name: "Centro de Asistencia al Suicida", phone: "135", hours: "24/7" },
    { name: "SAPTEL Argentina", phone: "(011) 5275-1135", hours: "24/7" },
  ],
  Australia: [
    { name: "Lifeline Australia", phone: "13 11 14", text: "Text 0477 13 11 14", hours: "24/7" },
    { name: "Beyond Blue", phone: "1300 22 4636", hours: "24/7" },
  ],
  Bangladesh: [
    { name: "Kaan Pete Roi", phone: "01779-554391", hours: "6 PM – 10 PM (daily)" },
  ],
  Brazil: [
    { name: "CVV – Centro de Valorização da Vida", phone: "188", hours: "24/7" },
  ],
  Brunei: [
    { name: "Mental Health Helpline", phone: "145", hours: "24/7" },
  ],
  Cambodia: [
    { name: "Child Helpline Cambodia", phone: "1280", hours: "24/7" },
    { name: "TPO Cambodia", phone: "017-222-372", hours: "Office hours" },
  ],
  Canada: [
    { name: "Talk Suicide Canada", phone: "1-833-456-4566", text: "Text 45645", hours: "24/7" },
    { name: "Crisis Services Canada", phone: "1-833-456-4566", text: "Text 45645", hours: "24/7" },
  ],
  China: [
    { name: "Beijing Suicide Research and Prevention Center", phone: "010-82951332", hours: "24/7" },
    { name: "Lifeline Shanghai", phone: "400-161-9995", hours: "24/7" },
  ],
  Colombia: [
    { name: "Línea 106", phone: "106", hours: "24/7" },
  ],
  France: [
    { name: "SOS Amitié", phone: "09 72 39 40 50", hours: "24/7" },
    { name: "Fil Santé Jeunes", phone: "0 800 235 236", hours: "9 AM – 11 PM (daily)" },
  ],
  Germany: [
    { name: "Telefonseelsorge", phone: "0800 111 0 111", hours: "24/7" },
    { name: "Telefonseelsorge (alt)", phone: "0800 111 0 222", hours: "24/7" },
  ],
  "Hong Kong": [
    { name: "The Samaritans Hong Kong", phone: "2389 2222", hours: "24/7" },
    { name: "Suicide Prevention Services", phone: "2382 0000", hours: "24/7" },
  ],
  India: [
    { name: "iCall", phone: "9152987821", hours: "Mon–Sat 8 AM – 10 PM" },
    { name: "Vandrevala Foundation", phone: "1860-2662-345", hours: "24/7" },
    { name: "AASRA", phone: "91-22-27546669", hours: "24/7" },
  ],
  Indonesia: [
    { name: "Hotline 119 (ext. 8)", phone: "119 ext. 8", hours: "24/7" },
    { name: "Into The Light Indonesia", phone: "021-7884-5555", hours: "24/7" },
  ],
  Ireland: [
    { name: "Samaritans Ireland", phone: "116 123", hours: "24/7" },
    { name: "Pieta House", phone: "1800 247 247", text: "Text HELP to 51444", hours: "24/7" },
  ],
  Italy: [
    { name: "Telefono Amico", phone: "02 2327 2327", hours: "10 AM – 12 AM (daily)" },
    { name: "Telefono Azzurro", phone: "19696", hours: "24/7" },
  ],
  Japan: [
    { name: "TELL Lifeline", phone: "03-5774-0992", hours: "24/7" },
    { name: "Yorisoi Hotline", phone: "0120-279-338", hours: "24/7" },
  ],
  Kenya: [
    { name: "Befrienders Kenya", phone: "+254 722 178 177", hours: "24/7" },
  ],
  Laos: [
    { name: "Lao Women's Union Hotline", phone: "1362", hours: "Office hours" },
  ],
  Malaysia: [
    { name: "Befrienders KL", phone: "03-7627-2929", hours: "24/7" },
    { name: "MIASA Crisis Helpline", phone: "1-800-18-0066", hours: "24/7" },
  ],
  Mexico: [
    { name: "SAPTEL", phone: "55 5259-8121", hours: "24/7" },
    { name: "Línea de la Vida", phone: "800 911 2000", hours: "24/7" },
  ],
  Myanmar: [
    { name: "We Are All Ears", phone: "09-777-206-035", hours: "Check availability" },
  ],
  Nepal: [
    { name: "Mental Health Helpline Nepal", phone: "1166", hours: "24/7" },
  ],
  Netherlands: [
    { name: "113 Zelfmoordpreventie", phone: "0900-0113", hours: "24/7" },
    { name: "113 Online", phone: "113", text: "Chat at 113.nl", hours: "24/7" },
  ],
  "New Zealand": [
    { name: "Lifeline New Zealand", phone: "0800 543 354", hours: "24/7" },
    { name: "Need to Talk?", phone: "1737", text: "Text 1737", hours: "24/7" },
  ],
  Nigeria: [
    { name: "SURPIN", phone: "+234 806 210 6493", hours: "24/7" },
  ],
  Pakistan: [
    { name: "Umang Helpline", phone: "0311-7786264", hours: "24/7" },
  ],
  Philippines: [
    { name: "NCMH Crisis Hotline", phone: "1800-1888-1553", hours: "24/7" },
    { name: "HOPELINE", phone: "(02) 8804-4673", text: "Text 2919 (Globe/TM)", hours: "24/7" },
    { name: "In Touch Crisis Line", phone: "+63 2 8893 7603", hours: "24/7" },
  ],
  Singapore: [
    { name: "Samaritans of Singapore", phone: "1767", hours: "24/7" },
    { name: "Institute of Mental Health", phone: "6389 2222", hours: "24/7" },
  ],
  "South Africa": [
    { name: "SADAG", phone: "0800 567 567", hours: "24/7" },
    { name: "Lifeline South Africa", phone: "0861 322 322", hours: "24/7" },
  ],
  "South Korea": [
    { name: "Mental Health Crisis Hotline", phone: "1577-0199", hours: "24/7" },
    { name: "Suicide Prevention Hotline", phone: "1393", hours: "24/7" },
  ],
  Spain: [
    { name: "Teléfono de la Esperanza", phone: "717 003 717", hours: "24/7" },
  ],
  "Sri Lanka": [
    { name: "Sumithrayo", phone: "011-2682535", hours: "24/7" },
  ],
  Sweden: [
    { name: "Mind Självmordslinjen", phone: "90101", hours: "24/7" },
  ],
  Switzerland: [
    { name: "Die Dargebotene Hand", phone: "143", hours: "24/7" },
    { name: "Pro Juventute (youth)", phone: "147", hours: "24/7" },
  ],
  Taiwan: [
    { name: "Suicide Prevention Hotline", phone: "1925", hours: "24/7" },
    { name: "Teacher Chang Foundation", phone: "1980", hours: "24/7" },
  ],
  Thailand: [
    { name: "Samaritans of Thailand", phone: "02-713-6793", hours: "24/7" },
    { name: "Department of Mental Health Hotline", phone: "1323", hours: "24/7" },
  ],
  "United Arab Emirates": [
    { name: "Mental Health Helpline", phone: "800-HOPE (4673)", hours: "24/7" },
  ],
  "United Kingdom": [
    { name: "Samaritans", phone: "116 123", hours: "24/7" },
    { name: "SHOUT", phone: "N/A", text: "Text SHOUT to 85258", hours: "24/7" },
  ],
  "United States": [
    { name: "988 Suicide & Crisis Lifeline", phone: "988", text: "Text 988", hours: "24/7" },
    { name: "Crisis Text Line", phone: "N/A", text: "Text HOME to 741741", hours: "24/7" },
  ],
  Vietnam: [
    { name: "National Child Helpline", phone: "111", hours: "24/7" },
    { name: "HOPE Suicide Prevention", phone: "0865-044-400", hours: "Check availability" },
  ],
};

const countries = Object.keys(data);

const Hotlines = () => {
  const [country, setCountry] = useState(countries[0]);

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <div className="mb-6 flex justify-center">
        <img src={dinoFlowers} alt="Dino holding flowers" className="h-32 w-32 object-contain md:h-40 md:w-40" />
      </div>
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
