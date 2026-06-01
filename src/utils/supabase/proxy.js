import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function updateSession(request) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet, headers) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
          Object.entries(headers).forEach(([key, value]) =>
            supabaseResponse.headers.set(key, value),
          );
        },
      },
    },
  );

  // getUser() validates the user securely and triggers the session refresh
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Handle global route protection based on authentication status
  const isAuthRoute = request.nextUrl.pathname.startsWith("/auth");
  const isProtectedRoute = request.nextUrl.pathname.startsWith("/browse");

  let redirectUrl = null;
  if (!user && isProtectedRoute) {
    redirectUrl = new URL("/auth/login", request.url);
  } else if (user && isAuthRoute) {
    redirectUrl = new URL("/browse", request.url);
  }

  if (redirectUrl) {
    const redirectResponse = NextResponse.redirect(redirectUrl);

    // Crucial: Copy the refreshed cookies to the new redirect response
    supabaseResponse.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie.name, cookie.value, cookie);
    });

    return redirectResponse;
  }

  return supabaseResponse;
}
