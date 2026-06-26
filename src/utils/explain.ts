//  All AI Explanation Logic Is Here 
        // Right now the explain button is in the affilate and agent nodes. The logic is spelled out in both spots, combine into 1 component to keep things DRY later.
        // Ask leadership what type of explanation is desired right now. It'll probs affect the variables/calculations even collected...then combine explain feature logic. 

// Explain.ts only ever receives the pre-computed payload object, so the AI can never start mathin' or inventing things off the ol nogin. 
// It can only NARRATE based off values precalculated fields we provide

export interface ExplainPayload {
  kind: "agent" | "affiliate" | "carrier" | "root";
  [key: string]: unknown;
}

const SYSTEM_PROMPT = `You are an analyst assistant inside an insurance agent-hierarchy explorer.
You will receive a JSON object describing ONE selected node (an agent, affiliate, carrier, or the root org).
Write a concise 2-3 sentence plain-English summary a sales executive could read at a glance.

Hard rules:
- Only state facts present in the JSON. Do not invent names, numbers, or relationships.
- Do NOT perform arithmetic or recompute totals. Use the numbers exactly as given.
- If a field is null or missing, simply omit it — never guess.
- Plain, professional tone. No bullet points, no preamble like "Here is a summary".`;

export async function explainNode(payload: ExplainPayload): Promise<string> {
  const key = import.meta.env.VITE_GROQ_API_KEY;
  if (!key) throw new Error("Missing VITE_GROQ_API_KEY in .env.local");

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",    // llama-3.3-70b-versatile" for safe, quality or "llama-3.1-8b-instant" for speed
      temperature: 0.3,                 // Low temp = more factual, less creative 
      max_tokens: 220,                  // Keeps response short
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: JSON.stringify(payload) },
      ],
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Groq ${res.status}: ${detail.slice(0, 200)}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() ?? "(no response)";
}