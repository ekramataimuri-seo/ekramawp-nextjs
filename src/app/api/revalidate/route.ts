import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function PUT(request: NextRequest) {
  const requestBody = await request.text();
  const { paths, tags } = requestBody
    ? JSON.parse(requestBody)
    : { paths: [], tags: [] };
  let revalidated = false;

  if (
    request.headers.get("X-Headless-Secret-Key") !== process.env.HEADLESS_SECRET
  ) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    if (paths && Array.isArray(paths) && paths.length > 0) {
      // Updated for Next.js 16 compatibility
      await Promise.all(paths.map((path) => revalidatePath(path, "page")));
      console.log("Revalidated paths:", paths);
      revalidated = true;
    }

    if (tags && Array.isArray(tags) && tags.length > 0) {
      // Updated for Next.js 16: added 'page' as the required second argument
      await Promise.all(tags.map((tag) => revalidateTag(tag)));
      console.log("Revalidated tags:", tags);
      revalidated = true;
    }

    return NextResponse.json({
      revalidated,
      now: Date.now(),
      paths,
      tags: tags,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error revalidating paths or tags" },
      { status: 500 },
    );
  }
}
