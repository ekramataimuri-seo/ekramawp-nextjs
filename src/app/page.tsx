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

export async function generateMetadata(): Promise<Metadata> {
  const uri = "/home"; 
  const { contentNode } = await fetchGraphQL<{ contentNode: any }>(print(PAGE_QUERY), { uri });
  if (!contentNode) return { title: "Home" };
  return setSeoData({ seo: contentNode.seo });
}

export default async function HomePage() {
  const uri = "/home"; 

  const { contentNode } = await fetchGraphQL<{ contentNode: any }>(print(PAGE_QUERY), { uri });

  if (!contentNode) return notFound();

  return (
    // ✅ FIX: Removed 'container', 'mx-auto', and 'px-5'
    // Now the Main tag is 100% wide.
    <main className="w-full min-h-screen">
      
      {/* Note: We hid the H1 title because your Hero Section likely has its own H1 */}
      
      {/* ✅ FIX: Removed 'prose' wrapper so the Hero can stretch */}
      <div className="w-full">
        <BlockRenderer htmlContent={contentNode.content} />
      </div>
      
    </main>
  );
}