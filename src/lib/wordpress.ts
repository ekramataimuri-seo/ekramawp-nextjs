// File: src/lib/wordpress.ts
const WP_GRAPHQL_URL = "https://admin.wpfedev.com/graphql";

export async function fetchGraphQL(query: string, variables?: any) {
  const url = new URL(WP_GRAPHQL_URL);
  url.searchParams.append("query", query);
  if (variables) url.searchParams.append("variables", JSON.stringify(variables));

  try {
    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/121.0.0.0 Safari/537.36",
        "Content-Type": "application/json",
      },
      cache: 'no-store'
    });

    const text = await res.text();

    // 1. Safety Check for HTML/Firewall errors
    if (text.trim().startsWith('<')) {
      console.error("❌ FIREWALL ERROR: Received HTML.");
      throw new Error("Firewall blocked request");
    }

    const json = JSON.parse(text);

    // 2. CRITICAL: Check for GraphQL Errors
    if (json.errors) {
      console.error("❌ GRAPHQL ERROR:", JSON.stringify(json.errors, null, 2));
      throw new Error("WordPress API returned an error");
    }

    // 3. Return the data
    return json.data;

  } catch (error) {
    console.error("❌ Fetch Failed:", error);
    throw error;
  }
}