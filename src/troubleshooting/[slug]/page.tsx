import DocTemplate from "@/components/DocTemplate"; // NO curly braces!

export default async function TroubleshootingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // This pulls the specific "Troubleshooting" post from WordPress
  return <DocTemplate slug={slug} />;
}