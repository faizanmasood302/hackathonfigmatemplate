import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value; // Get the auth token from cookies
  const isAuthenticated = !!token; // Check if the user is authenticated

  const protectedRoutes = ["/shoppingcart", "/shippingcart"]; // Add more protected routes if needed

  // If the user is not authenticated and tries to access a protected route, redirect to login
  if (!isAuthenticated && protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname); // Store the intended URL
    return NextResponse.redirect(new URL(`/signin?callbackUrl=${callbackUrl}`, req.url));
  }

  return NextResponse.next();
}

// Apply middleware to protected routes
export const config = {
  matcher: ["/cart", "/checkout"], // Add more protected routes as needed
};