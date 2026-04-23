// File: src/lib/wordpress.ts

// 1. URL FIX: Pulls from Vercel settings so you can change it anytime.
const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string;

// 2. SECURITY FIX: Pulls credentials from Vercel settings, hiding them from the public.
const WP_USERNAME = process.env.WP_USERNAME as string; 
const WP_APP_PASSWORD = process.env.WP_APP_PASSWORD as string; 

export async function fetchGraphQL(query: string, variables?: any) {
  try {
    const auth = btoa(`${WP_USERNAME}:${WP_APP_PASSWORD}`);

    console.log(`🌐 Fetching from: ${WP_GRAPHQL_URL}`); 

    const res = await fetch(WP_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${auth}`, 
        "User-Agent": "NextJS-Dev-Server/1.0", 
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      // 3. SPEED FIX: Replaced 'cache: no-store' with this. 
      // Builds a fast static page, checks for new posts every 1 hour (3600 seconds).
      next: { revalidate: 3600 }, 
    });

    const text = await res.text();

    // Safety Check
    if (text.trim().startsWith('<') || !text.trim().startsWith('{')) {
      console.error("❌ FIREWALL ERROR. Server returned HTML.");
      console.error("👇 ERROR PREVIEW 👇");
      console.error(text.slice(0, 500)); 
      throw new Error("Firewall blocked request");
    }

    const json = JSON.parse(text);

    if (json.errors) {
      console.error("❌ GRAPHQL ERROR:", JSON.stringify(json.errors, null, 2));
      throw new Error("WordPress API returned an error");
    }

    return json.data;

  } catch (error) {
    console.error("❌ Fetch Failed:", error);
    throw error;
  }
}