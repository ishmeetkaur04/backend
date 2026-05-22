import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jwt from "jsonwebtoken";

const SECRET = "examsecret";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // apply only to protected route
  if (path.startsWith("/api/jwt/protected")) {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        { message: "No token (middleware)" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    try {
      jwt.verify(token, SECRET);
      return NextResponse.next(); // allow request
    } catch {
      return NextResponse.json(
        { message: "Invalid token (middleware)" },
        { status: 403 }
      );
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/api/jwt/protected"],
};