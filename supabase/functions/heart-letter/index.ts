import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { letter_id } = await req.json();
    if (!letter_id) {
      return new Response(JSON.stringify({ error: "letter_id required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Get current hearts
    const { data: letter, error: fetchError } = await supabase
      .from("kindness_letters")
      .select("hearts")
      .eq("id", letter_id)
      .eq("status", "approved")
      .single();

    if (fetchError || !letter) {
      return new Response(JSON.stringify({ error: "Letter not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { error } = await supabase
      .from("kindness_letters")
      .update({ hearts: letter.hearts + 1 })
      .eq("id", letter_id);

    if (error) throw error;

    return new Response(JSON.stringify({ hearts: letter.hearts + 1 }), {
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
