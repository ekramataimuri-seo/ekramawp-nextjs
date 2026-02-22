// File: src/proxy.ts
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  if (!process.env.WP_USER || !process.env.WP_APP_PASS) {
    return NextResponse.next();
  }

  if (
    request.nextUrl.pathname.startsWith('/_next') || 
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const basicAuth = `${process.env.WP_USER}:${process.env.WP_APP_PASS}`;
  const pathnameWithoutTrailingSlash = request.nextUrl.pathname.replace(/\/$/, "");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/redirection/v1/redirect/?filterBy%5Burl-match%5D=plain&filterBy%5Burl%5D=${pathnameWithoutTrailingSlash}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(basicAuth).toString("base64")}`,
          "Content-Type": "application/json",
        },
        // 👇 THIS LINE SAVES THE DATA FOR 1 HOUR (3600 seconds)
        next: { revalidate: 3600 }, 
      }
    );

    const data = await response.json();

    if (data?.items?.length > 0) {
      const redirect = data.items.find(
        (item: any) => item.url === pathnameWithoutTrailingSlash
      );

      if (redirect) {
        const newUrl = new URL(
          redirect.action_data.url,
          process.env.NEXT_PUBLIC_BASE_URL
        ).toString();

        return NextResponse.redirect(newUrl, {
          status: redirect.action_code === 301 ? 308 : 307,
        });
      }
    }
  } catch (error) {
    console.error("Proxy Redirection Error:", error);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};