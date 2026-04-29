import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { users } from "../data";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // check if user already exists
  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    email,
    password: hashedPassword,
  });

  return NextResponse.json({
    message: "User registered successfully",
  });
}