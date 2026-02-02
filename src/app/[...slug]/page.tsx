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

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const uri = `/${resolvedParams.slug.join("/")}/`;
  
  const { contentNode } = await fetchGraphQL<{ contentNode: any }>(
    print(PAGE_QUERY),
    { uri }
  );

  if (!contentNode) return { title: "Page Not Found" };
  return setSeoData({ seo: contentNode.seo });
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const uri = `/${resolvedParams.slug.join("/")}/`;

  const { contentNode } = await fetchGraphQL<{ contentNode: any }>(
    print(PAGE_QUERY),
    { uri }
  );

  // --- DEBUG LOG START ---
  // This will show up in your VS Code terminal when you visit the page
  console.log(`--- DEBUG FOR URI: ${uri} ---`);
  console.log("DATA RECEIVED:", JSON.stringify(contentNode, null, 2));
  // --- DEBUG LOG END ---

  if (!contentNode) return notFound();

  return (
    <main className="w-full min-h-screen">
      <div className="w-full">
        {/* Note: If your BlockRenderer uses structured blocks, 
            passing htmlContent might still result in a blank screen.
            We are passing contentNode.content (the raw HTML string).
        */}
        <BlockRenderer htmlContent={contentNode.content} />
      </div>
    </main>
  );
}