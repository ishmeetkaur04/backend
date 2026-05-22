"use client";

import { useEffect, useState } from "react";

import {
  ArrowDownLeft,
  ArrowUpRight,
} from "lucide-react";

export default function Transactions() {

  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {

    fetchTransactions();

    const interval = setInterval(fetchTransactions, 3000);

    return () => clearInterval(interval);

  }, []);

  const fetchTransactions = async () => {

    try {

      const res = await fetch("/api/transactions");

      const data = await res.json();

      setTransactions(data);

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-8">
        Transaction History
      </h1>

      <div className="bg-white rounded-xl shadow">

        {transactions.length === 0 ? (

          <p className="p-6">
            No Transactions Found
          </p>

        ) : (

          transactions.map((tx: any, index) => (

            <div
              key={index}
              className="flex items-center justify-between p-6 border-b last:border-none"
            >

              <div className="flex items-center gap-4">

                <div className="p-3 rounded-full bg-red-100">

                  <ArrowUpRight className="text-red-600" />

                </div>

                <div>

                  <p className="font-semibold text-lg">
                    {tx.user}
                  </p>

                  <p className="text-sm text-gray-500">

                    {tx.createdAt
                      ? new Date(tx.createdAt).toLocaleString()
                      : ""}

                  </p>

                </div>

              </div>

              <p className="font-bold text-red-600 text-lg">
                -₹{tx.amount}
              </p>

            </div>

          ))

        )}

      </div>

    </div>
  );
}