import { Metadata } from "next";
import { notFound } from "next/navigation";
import { print } from "graphql/language/printer";
import gql from "graphql-tag";

import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { setSeoData } from "@/utils/seoData";
import BlockRenderer from "@/components/BlockRenderer";

// 👇 We explicitly ask for the URI "/home/"
const PAGE_QUERY = gql`
  query PageQuery {
    nodeByUri(uri: "/home/") {
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
  const { nodeByUri } = await fetchGraphQL<{ nodeByUri: any }>(print(PAGE_QUERY));
  if (!nodeByUri) return { title: "Home" };
  return setSeoData({ seo: nodeByUri.seo });
}

export default async function Home() {
  const { nodeByUri } = await fetchGraphQL<{ nodeByUri: any }>(print(PAGE_QUERY));

  if (!nodeByUri) return notFound();

  return (
    <main className="w-full min-h-screen">
      {/* Full Width Block Renderer */}
      <div className="w-full">
        <BlockRenderer htmlContent={nodeByUri.content} />
      </div>
    </main>
  );
}