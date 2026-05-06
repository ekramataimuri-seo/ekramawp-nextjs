import DocTemplate from "@/components/DocTemplate";

// 1. Update the type to be a Promise
export default async function APIDocsPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. You MUST 'await' the params before extracting the slug in Next.js 16+
  const { slug } = await params;
  
  return <DocTemplate slug={slug} />;
}