import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { users } from "../data";

const SECRET = "examsecret";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = users.find((u) => u.email === email);

  if (!user) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    );
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json(
      { message: "Wrong password" },
      { status: 401 }
    );
  }

  const token = jwt.sign(
    { email: user.email },
    SECRET,
    { expiresIn: "1h" }
  );

  return NextResponse.json({
    message: "Login successful",
    token,
  });
}