// File: src/lib/wordpress.ts

// 👇 THIS IS THE KEY FIX: Point directly to index.php
// This bypasses the Nginx 405 error completely.
const WP_GRAPHQL_URL = "https://admin.wpfedev.com/index.php?graphql";

// Credentials
const WP_USERNAME = "ekrama.taimuri"; 
const WP_APP_PASSWORD = "stgp Se7X oe81 Mak9 A64W GO9y"; 

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
      cache: 'no-store', 
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