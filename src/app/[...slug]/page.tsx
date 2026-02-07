import { notFound } from "next/navigation";
import { print } from "graphql/language/printer";
import gql from "graphql-tag";
import { fetchGraphQL } from "@/lib/wordpress";
import { BlockRenderer } from "@/components/BlockRenderer";
import { Metadata } from "next";

// 1. DYNAMIC QUERY
const PAGE_QUERY = gql`
  query PageQuery($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        title
        content
        slug
        seo {
            fullHead
            title
            metaDesc
        }
      }
    }
  }
`;

// 2. FIXED INTERFACE: params is now a Promise
type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // 3. FIXED: Await params before using slug
  const { slug } = await params; 
  const uri = `/${slug.join("/")}/`; 
  
  const data = await fetchGraphQL(print(PAGE_QUERY), { uri });
  
  if (!data?.nodeByUri?.seo) return { title: "Ekrama" };
  return {
    title: data.nodeByUri.seo.title,
    description: data.nodeByUri.seo.metaDesc,
  };
}

export default async function DynamicPage({ params }: Props) {
  // 4. FIXED: Await params here too
  const { slug } = await params;
  const uri = `/${slug.join("/")}/`;

  const data = await fetchGraphQL(print(PAGE_QUERY), { uri });

  if (!data || !data.nodeByUri) return notFound();

  // ⚠️ CRITICAL FIX: Handle null content
  // If WordPress returns null for content, we default to an empty string ""
  // This prevents the "First argument must be a string" crash.
  const safeContent = data.nodeByUri.content || "";

  return (
    <main className="w-full min-h-screen bg-[#0E1623]">
      <div className="w-full">
        {/* Pass the safe, non-null content string */}
        <BlockRenderer htmlContent={safeContent} />
      </div>
    </main>
  );
}