"use client";

import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

export default function Transactions() {

  const transactions = [
    { name: "Rahul Sharma", type: "sent", amount: "₹500", date: "Today" },
    { name: "Anita Verma", type: "received", amount: "₹1200", date: "Yesterday" },
    { name: "Karan Singh", type: "sent", amount: "₹350", date: "2 days ago" },
    { name: "Priya Kapoor", type: "received", amount: "₹900", date: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-8">
        Transaction History
      </h1>

      <div className="bg-white rounded-xl shadow">

        {transactions.map((tx, index) => (

          <div
            key={index}
            className="flex items-center justify-between p-6 border-b last:border-none"
          >

            <div className="flex items-center gap-4">

              <div className={`p-3 rounded-full ${
                tx.type === "sent" ? "bg-red-100" : "bg-green-100"
              }`}>

                {tx.type === "sent"
                  ? <ArrowUpRight className="text-red-600" />
                  : <ArrowDownLeft className="text-green-600" />
                }

              </div>

              <div>
                <p className="font-semibold">{tx.name}</p>
                <p className="text-sm text-gray-500">{tx.date}</p>
              </div>

            </div>

            <p className={`font-bold ${
              tx.type === "sent" ? "text-red-600" : "text-green-600"
            }`}>
              {tx.type === "sent" ? "-" : "+"}{tx.amount}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}