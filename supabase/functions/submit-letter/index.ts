import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const REGIONS = [
  "North America", "South America", "Europe", "Africa",
  "Asia", "Oceania", "Middle East", "Southeast Asia",
];

const MODERATION_PROMPT = `You are a content safety moderator for anonymous kindness letters on a mental health website for young people. 
Evaluate the following letter and respond with ONLY "safe" or "unsafe".
Mark as "unsafe" if the letter contains ANY of the following:
- Hate speech, harassment, or bullying
- Explicit sexual content
- Personal information or doxxing (real names, addresses, phone numbers, social media handles)
- Self-harm instructions or encouragement
- Threats of violence
- Spam, advertising, or links
- Profanity or slurs
Otherwise respond "safe". Only respond with that single word.

Letter:
"""
{MESSAGE}
"""`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, tag, signature } = await req.json();

    // Validate
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (message.length > 600) {
      return new Response(JSON.stringify({ error: "Message too long (max 600 chars)" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (signature && signature.length > 24) {
      return new Response(JSON.stringify({ error: "Signature too long (max 24 chars)" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const validTags = ["Encouragement", "Gratitude", "Hope", "Comfort", "Celebration"];
    if (tag && !validTags.includes(tag)) {
      return new Response(JSON.stringify({ error: "Invalid tag" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // AI moderation
    let isSafe = true;
    try {
      const moderationRes = await fetch(
        `https://gjzrgxwbmlfbpwgertyc.supabase.co/functions/v1/ai-gateway`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")}`,
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash-lite",
            messages: [
              { role: "user", content: MODERATION_PROMPT.replace("{MESSAGE}", message.trim()) },
            ],
          }),
        }
      );
      const moderationData = await moderationRes.json();
      const verdict = moderationData?.choices?.[0]?.message?.content?.trim().toLowerCase();
      if (verdict === "unsafe") {
        isSafe = false;
      }
    } catch (e) {
      console.error("Moderation check failed, allowing through as pending:", e);
    }

    if (!isSafe) {
      return new Response(
        JSON.stringify({
          error: "flagged",
          message: "This letter can't be posted. Please keep it kind and safe.",
        }),
        { status: 422, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Insert letter
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const region = REGIONS[Math.floor(Math.random() * REGIONS.length)];

    const { data, error } = await supabase.from("kindness_letters").insert({
      message: message.trim(),
      tag: tag || null,
      signature: signature?.trim() || null,
      region,
      status: "pending",
    }).select("id").single();

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Error:", e);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
