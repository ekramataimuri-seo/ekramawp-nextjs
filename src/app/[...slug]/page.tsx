// 👇 1. FORCE DYNAMIC: This tells Vercel "Never cache this page, always check WordPress"
export const dynamic = 'force-dynamic';

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { print } from "graphql/language/printer";
import gql from "graphql-tag";

import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { setSeoData } from "@/utils/seoData";
import BlockRenderer from "@/components/BlockRenderer";

const PAGE_QUERY = gql`
  query PageQuery($uri: ID!) {
    contentNode(id: $uri, idType: URI) {
      ... on Page {
        id
        title
        content
        seo {
          fullHead
          title
          metaDesc
        }
      }
    }
  }
`;

// Helper function with anti-cache settings
async function getPageData(uri: string) {
  const { contentNode } = await fetchGraphQL<{ contentNode: any }>(
    print(PAGE_QUERY),
    { 
      uri,
      // 👇 2. CACHE BUSTER: Ensures the API request itself isn't cached
      next: { revalidate: 0 } 
    }
  );
  return contentNode;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug.join("/");
  
  // Try with slash first
  let contentNode = await getPageData(`/${slugPath}/`);
  
  // Fallback
  if (!contentNode) {
    contentNode = await getPageData(`/${slugPath}`);
  }

  if (!contentNode) return { title: "Page Not Found" };
  return setSeoData({ seo: contentNode.seo });
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug.join("/");
  
  // --- DEBUG LOG START ---
  console.log(`\n⚡️ STARTING FRESH FETCH FOR: ${slugPath}`);

  // 1. Try with trailing slash (Standard WordPress)
  const uriWithSlash = `/${slugPath}/`;
  let contentNode = await getPageData(uriWithSlash);

  // 2. Fallback: Try without trailing slash
  if (!contentNode) {
    console.log(`⚠️  Null with slash. Retrying clean URI: /${slugPath}`);
    contentNode = await getPageData(`/${slugPath}`);
  }

  // --- DEBUG LOG RESULT ---
  console.log(`🏁 FINAL RESULT for ${slugPath}:`, contentNode ? "✅ DATA FOUND" : "❌ STILL NULL");
  
  if (!contentNode) return notFound();

  return (
    <main className="w-full min-h-screen bg-[#0a192f]">
      <div className="w-full">
        <BlockRenderer htmlContent={contentNode.content} />
      </div>
    </main>
  );
}