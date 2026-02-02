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

async function getPageData(uri: string) {
  const { contentNode } = await fetchGraphQL<{ contentNode: any }>(
    print(PAGE_QUERY),
    { uri }
  );
  return contentNode;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug.join("/");
  const uri = `/${slugPath}/`;
  
  let contentNode = await getPageData(uri);
  
  // Fallback for metadata if trailing slash fails
  if (!contentNode) {
    contentNode = await getPageData(`/${slugPath}`);
  }

  if (!contentNode) return { title: "Page Not Found" };
  return setSeoData({ seo: contentNode.seo });
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug.join("/");
  
  // 1. Try with trailing slash (Matching your WordPress settings)
  const uriWithSlash = `/${slugPath}/`;
  let contentNode = await getPageData(uriWithSlash);

  // 2. Fallback: Try without trailing slash if first attempt returns null
  if (!contentNode) {
    console.log(`Retrying without slash for: /${slugPath}`);
    contentNode = await getPageData(`/${slugPath}`);
  }

  // --- DEBUG LOG ---
  console.log(`--- FETCHING CONTENT FOR: ${slugPath} ---`);
  console.log("FINAL RESULT:", contentNode ? "✅ DATA FOUND" : "❌ STILL NULL");

  if (!contentNode) return notFound();

  return (
    <main className="w-full min-h-screen bg-[#0a192f]">
      <div className="w-full">
        {/* We pass the content string to your updated BlockRenderer with Fallback support */}
        <BlockRenderer htmlContent={contentNode.content} />
      </div>
    </main>
  );
}