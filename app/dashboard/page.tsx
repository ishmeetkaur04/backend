"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import {
  Send,
  ArrowDownLeft,
  LayoutDashboard,
  Wallet,
  CreditCard,
} from "lucide-react";

export default function Dashboard() {

  const [balance, setBalance] = useState(24500);

  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {

    fetchData();

    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval);

  }, []);

const fetchData = async () => {

  try {

    // Fetch users
    const userRes = await fetch("/api/users");

    const users = await userRes.json();

    if (users.length > 0) {

      setBalance(users[0].balance);

    }

    // Fetch transactions
    const txnRes = await fetch("/api/transactions");

    const txnData = await txnRes.json();

    setTransactions(txnData);

  } catch (error) {

    console.log(error);

  }
};

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6">

        <h2 className="text-2xl font-bold text-blue-700 mb-10">
          PayForge
        </h2>

        <div className="flex flex-col gap-6">

          <Link
            href="/dashboard"
            className="flex items-center gap-3 hover:text-blue-600"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            href="/send"
            className="flex items-center gap-3 hover:text-blue-600"
          >
            <Send size={20} />
            Send Money
          </Link>

          <Link
            href="/transactions"
            className="flex items-center gap-3 hover:text-blue-600"
          >
            <ArrowDownLeft size={20} />
            Transactions
          </Link>

          <Link
            href="/cards"
            className="flex items-center gap-3 hover:text-blue-600"
          >
            <CreditCard size={20} />
            Cards
          </Link>

        </div>

      </div>

      {/* Main */}
      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-8">
          Dashboard
        </h1>

        {/* Balance Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg w-80 mb-10">

          <p className="text-sm opacity-80">
            Wallet Balance
          </p>

          <h2 className="text-3xl font-bold mt-2">
            ₹{balance}
          </h2>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Send Money */}
          <Link href="/send">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex items-center gap-4 cursor-pointer">

              <Send className="text-blue-600" size={30} />

              <div>

                <p className="font-semibold text-lg">
                  Send Money
                </p>

                <p className="text-sm text-gray-500">
                  Transfer instantly
                </p>

              </div>

            </div>

          </Link>

          {/* Receive Money */}
          <Link href="/receive">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex items-center gap-4 cursor-pointer">

              <ArrowDownLeft
                className="text-green-600"
                size={30}
              />

              <div>

                <p className="font-semibold text-lg">
                  Receive Money
                </p>

                <p className="text-sm text-gray-500">
                  Accept payments
                </p>

              </div>

            </div>

          </Link>

          {/* Cards */}
          <Link href="/cards">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex items-center gap-4 cursor-pointer">

              <Wallet
                className="text-purple-600"
                size={30}
              />

              <div>

                <p className="font-semibold text-lg">
                  Cards
                </p>

                <p className="text-sm text-gray-500">
                  Manage cards
                </p>

              </div>

            </div>

          </Link>

        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-semibold mb-4">
            Recent Transactions
          </h2>

          {transactions.length === 0 ? (

            <p>No Transactions</p>

          ) : (

            transactions.map((tx: any, index) => (

              <div
                key={index}
                className="flex justify-between border-b py-3"
              >

                <div>

                  <p className="font-semibold">
                    {tx.user}
                  </p>

                  <p className="text-sm text-gray-500">

                    {tx.createdAt
                      ? new Date(
                          tx.createdAt
                        ).toLocaleString()
                      : ""}

                  </p>

                </div>

                <p className="text-red-500 font-semibold">
                  -₹{tx.amount}
                </p>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}