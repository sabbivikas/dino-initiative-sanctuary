import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { categories, recentPrompts } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are a clinical psychology research assistant specializing in validated mental health screening instruments. Your task is to generate original self-report screening questions modeled after validated tools like the PHQ-9, GAD-7, PSS-10, PSQI, UCLA Loneliness Scale, Rosenberg Self-Esteem Scale, and ASRS.

IMPORTANT RULES:
1. Generate exactly 2 original questions per category provided.
2. Each question must be a first-person statement (e.g., "I have felt...").
3. Questions must be grounded in clinical constructs from peer-reviewed research.
4. Questions are scored on a 0-4 Likert scale: Not at all / A little / Some days / Often / Nearly every day.
5. Avoid repeating or paraphrasing any of the "recent prompts" provided.
6. Keep language accessible for ages 13+, avoid clinical jargon.
7. Each question should target a distinct symptom or experience within its category.

Categories and their clinical basis:
- Mood: Based on PHQ-9 constructs (anhedonia, hopelessness, psychomotor changes, guilt, fatigue)
- Anxiety: Based on GAD-7 constructs (excessive worry, restlessness, muscle tension, irritability, catastrophizing)
- Stress: Based on PSS-10 constructs (perceived overwhelm, lack of control, coping difficulty, nervous feelings)
- Sleep: Based on PSQI constructs (sleep latency, sleep quality, daytime dysfunction, sleep disturbances)
- Social: Based on UCLA Loneliness Scale constructs (social isolation, belonging, relational closeness, companionship)
- SelfWorth: Based on Rosenberg Self-Esteem Scale constructs (self-acceptance, competence, self-respect, worthiness)
- Focus: Based on ASRS constructs (inattention, task completion, organization, distractibility, forgetfulness)

Respond ONLY with a valid JSON array of objects with this exact structure:
[{"category": "Mood", "prompt": "I have felt..."}, ...]

Do not include any other text, markdown, or explanation.`;

    const userPrompt = `Generate 2 original screening questions for each of these categories: ${categories.join(", ")}.

${recentPrompts && recentPrompts.length > 0 ? `AVOID repeating or paraphrasing these recent questions:\n${recentPrompts.map((p: string, i: number) => `${i + 1}. ${p}`).join("\n")}` : ""}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI usage limit reached. Please add credits." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";
    
    // Parse the JSON from the response, handling potential markdown code blocks
    let questions;
    try {
      const cleaned = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      questions = JSON.parse(cleaned);
    } catch {
      console.error("Failed to parse AI response:", content);
      throw new Error("Failed to parse AI-generated questions");
    }

    // Validate structure
    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error("Invalid questions format from AI");
    }

    // Add IDs
    const withIds = questions.map((q: any, i: number) => ({
      id: Date.now() + i,
      category: q.category,
      prompt: q.prompt,
    }));

    return new Response(JSON.stringify({ questions: withIds }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-quiz error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
