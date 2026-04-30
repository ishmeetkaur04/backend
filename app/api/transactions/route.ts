import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Transaction from "@/models/Transaction";

export async function GET() {
  await connectDB();

  const data = await Transaction.find().sort({ createdAt: -1 });

  return NextResponse.json(data);
}