import { geolocation } from "@vercel/functions";
import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "user-country";
const MAX_AGE_SECONDS = 30 * 24 * 60 * 60; // 30 days

// Default fallback for local dev or when geolocation is unavailable
const DEFAULT_COUNTRY = process.env.DEFAULT_COUNTRY || "GB";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Don't overwrite if cookie already set
  if (request.cookies.has(COOKIE_NAME)) {
    return response;
  }

  // Read country from Vercel's geolocation
  const geo = geolocation(request);
  const country = geo?.country || DEFAULT_COUNTRY;

  response.cookies.set(COOKIE_NAME, country, {
    maxAge: MAX_AGE_SECONDS,
    path: "/",
    sameSite: "lax",
    httpOnly: false, // Needs to be readable by client-side JS
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Run on all routes except:
     * - _next (static files, HMR)
     * - images, favicon, robots, sitemap
     * - API routes
     */
    "/((?!_next|api|favicon\\.ico|robots\\.txt|sitemap\\.xml|images/).*)",
  ],
};
