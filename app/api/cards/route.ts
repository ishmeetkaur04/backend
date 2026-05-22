import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Card from "@/models/Card";

export async function GET() {
  await connectDB();

  const data = await Card.find();

  return NextResponse.json(data);
}