import parse from "html-react-parser";

// 1. THE FETCHER
async function getDocData(slug: string) {
  const query = `
    query GetDoc($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        date
        content
        categories {
          nodes {
            name
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch("https://admin.wpfedev.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        "X-Forwarded-For": "66.249.66.1"
      },
      body: JSON.stringify({ query, variables: { slug } }),
      cache: "no-store", 
    });

    if (!res.ok) return null;
    const json = await res.json();
    return json.data?.post;

  } catch (error) {
    console.error("❌ Fetch failed:", error);
    return null;
  }
}

// 2. THE COMPONENT
export default async function DocTemplate({ slug }: { slug: string }) {
  const post = await getDocData(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <p className="text-white/50">Document not found in WordPress...</p>
      </div>
    );
  }

  // --- METADATA CALCULATIONS ---
  const textOnly = post.content ? post.content.replace(/<[^>]+>/g, "") : "";
  const wordCount = textOnly.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  const dateObj = new Date(post.date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const authorName = post.author?.node?.name || "Ekrama Taimuri";
  const avatarUrl = post.author?.node?.avatar?.url || `https://ui-avatars.com/api/?name=${authorName}&background=0D8B4E&color=fff`;
  
  // Grab the first category attached to the post (e.g., "API Documentation")
  const categoryName = post.categories?.nodes[0]?.name || "Documentation";

  return (
    <article className="w-full min-h-screen bg-transparent pt-12 pb-20 px-5 flex flex-col items-center">
      <div className="w-full max-w-[700px]">
        
        {/* --- 1. CATEGORY BADGE --- */}
        <div className="mb-4">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">
            {categoryName}
          </span>
        </div>

        {/* --- 2. THE OFFICIAL TITLE --- */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          {post.title}
        </h1>

        {/* --- 3. METADATA HEADER --- */}
        <div className="w-full flex flex-col mb-10 border-b border-white/10 pb-6">
          
          <div className="flex items-center gap-3 mb-6">
            <img src={avatarUrl} alt={authorName} className="w-10 h-10 rounded-full bg-white/10 object-cover" />
            <div className="flex flex-col justify-center">
              <span className="text-white font-medium leading-tight">{authorName}</span>
              <span className="text-white/50 text-sm">Author</span>
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-white/50 text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readTime} min read
              </span>
              
              <div className="flex items-center gap-2 text-blue-400 cursor-pointer hover:text-blue-300 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <span>Copy URL</span>
              </div>
            </div>
            <div><span>{formattedDate}</span></div>
          </div>
        </div>

        {/* --- 4. THE CONTENT --- */}
        <div className="prose prose-invert prose-lg max-w-none 
          prose-p:text-white/80 
          prose-headings:text-white 
          prose-a:text-emerald-400">
          {parse(post.content)}
        </div>
      </div>
    </article>
  );
}