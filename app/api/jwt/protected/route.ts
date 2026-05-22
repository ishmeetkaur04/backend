import { NextResponse } from "next/server";
import * as jwt from "jsonwebtoken";

const SECRET = "examsecret";

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return NextResponse.json(
      { message: "No token provided" },
      { status: 401 }
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);

    return NextResponse.json({
      message: "Access granted",
      user: decoded,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid token" },
      { status: 403 }
    );
  }
}