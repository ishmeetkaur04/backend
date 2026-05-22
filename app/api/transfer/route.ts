import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Transaction from "@/models/Transaction";
import User from "@/models/User";

export async function POST(req: Request) {

  try {

    await connectDB();

    const body = await req.json();

    const { receiver, amount } = body;

    const transferAmount = Number(amount);

    // Find sender user
    const sender = await User.findOne();

    if (!sender) {

      return NextResponse.json({
        success: false,
        message: "User not found",
      });

    }

    // Check balance
    if (sender.balance < transferAmount) {

      return NextResponse.json({
        success: false,
        message: "Insufficient Balance",
      });

    }

    // Deduct balance
    sender.balance =
      sender.balance - transferAmount;

    await sender.save();

    // Save transaction
    const newTransaction =
      await Transaction.create({

        user: receiver,

        amount: transferAmount,

        type: "sent",
      });

    return NextResponse.json({
      success: true,
      transaction: newTransaction,
      balance: sender.balance,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Transfer Failed",
    });

  }
}