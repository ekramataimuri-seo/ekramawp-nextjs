import { notFound } from "next/navigation";
import { print } from "graphql/language/printer";
import gql from "graphql-tag";
import { fetchGraphQL } from "@/lib/wordpress";
import { BlockRenderer } from "@/components/BlockRenderer";
import { Metadata } from "next";

// 1. TARGET THE EXACT HOME PAGE (ID 8)
// We stop guessing slugs or URIs. We ask for ID 8 directly.
const HOME_QUERY = gql`
  query HomePageExact {
    page(id: "8", idType: DATABASE_ID) {
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
`;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchGraphQL(print(HOME_QUERY));
  if (!data?.page?.seo) return { title: "Home" };
  
  return {
    title: data.page.seo.title,
    description: data.page.seo.metaDesc,
  };
}

export default async function Home() {
  const data = await fetchGraphQL(print(HOME_QUERY));

  if (!data || !data.page) {
    console.error("❌ ERROR: Page 8 not found. Make sure it is Published in WordPress.");
    return notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#0E1623]">
      <BlockRenderer htmlContent={data.page.content} />
    </main>
  );
}