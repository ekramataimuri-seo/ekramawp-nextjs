import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function PUT(request: NextRequest) {
  const requestBody = await request.text();
  const { paths, tags } = requestBody ? JSON.parse(requestBody) : { paths: [], tags: [] };
  
  if (request.headers.get("X-Headless-Secret-Key") !== process.env.HEADLESS_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    if (paths) paths.forEach((path: string) => revalidatePath(path));
    // @ts-ignore
    if (tags) tags.forEach((tag: string) => revalidateTag(tag));

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
