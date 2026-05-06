import DocTemplate from "@/components/DocTemplate";

// We use 'async' because Next.js 16 requires us to await the URL params
export default async function ArchitecturalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // This sends the slug to your Vercel-style template
  return <DocTemplate slug={slug} />;
}