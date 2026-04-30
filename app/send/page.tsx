"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function SendMoney() {
  const [amount, setAmount] = useState("");

  const contacts = [
    { name: "Rahul Sharma", phone: "9876543210" },
    { name: "Anita Verma", phone: "9123456780" },
    { name: "Karan Singh", phone: "9988776655" },
    { name: "Priya Kapoor", phone: "9012345678" },
  ];

  // ✅ SINGLE clean function
  const sendMoney = async (name: string) => {
    if (!amount) {
      alert("Enter amount first");
      return;
    }

    try {
      const res = await fetch("/api/send-money", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          amount: Number(amount),
        }),
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      alert(data.message);

      setAmount("");
    } catch (err: any) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">

      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Send Money
      </h1>

      {/* Wallet */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg mb-8">
        <p className="text-sm opacity-80">Available Balance</p>
        <h2 className="text-3xl font-bold mt-1">₹24,500</h2>
      </div>

      {/* Amount */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <label className="text-gray-600 text-sm">Enter Amount</label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="₹0"
          className="w-full border p-3 rounded-lg mt-2 text-xl"
        />
      </div>

      {/* Contacts */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Pay to Contacts
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-blue-50"
            >
              <div>
                <p className="font-medium">{contact.name}</p>
                <p className="text-sm text-gray-500">
                  {contact.phone}
                </p>
              </div>

              <button
                onClick={() => sendMoney(contact.name)}
                className="bg-blue-600 text-white p-2 rounded-lg"
              >
                <Send size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}