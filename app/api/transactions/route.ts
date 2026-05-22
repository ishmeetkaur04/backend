import { NextResponse } from "next/server";

import {connectDB} from "@/lib/mongodb";
import Transaction from "@/models/Transaction";

export async function GET() {

  try {

    await connectDB();

    const transactions = await Transaction
      .find()
      .sort({ createdAt: -1 });

    return NextResponse.json(transactions);

  } catch (error) {

    console.log(error);

    return NextResponse.json([]);
  }
}