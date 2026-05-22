"use client";

import { useEffect, useState } from "react";

type Contact = {
  id: number;
  name: string;
  phone: string;
};

export default function SendPage() {

  // Amount state
  const [amount, setAmount] = useState<string>("");

  // Balance state
  const [balance, setBalance] = useState<number>(0);

  // Selected user
  const [selectedUser, setSelectedUser] =
    useState<Contact | null>(null);

  // Fetch balance on page load
  useEffect(() => {

    fetchBalance();

  }, []);

  // Fetch balance function
  const fetchBalance = async () => {

    try {

      const res = await fetch("/api/users");

      const data = await res.json();

      if (data.length > 0) {

        setBalance(data[0].balance);

      }

    } catch (error) {

      console.log(error);

    }
  };

  // Dummy contacts
  const contacts: Contact[] = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Anita Verma",
      phone: "9123456780",
    },
    {
      id: 3,
      name: "Karan Singh",
      phone: "9988776655",
    },
    {
      id: 4,
      name: "Priya Kapoor",
      phone: "9012345678",
    },
  ];

  // Transfer function
  const handleTransfer = async () => {

    if (!amount || !selectedUser) {

      alert("Please enter amount and select user");

      return;

    }

    try {

      const response = await fetch("/api/transfer", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          receiver: selectedUser.name,

          amount: amount,

        }),

      });

      const data = await response.json();

      if (data.success) {

        // Update balance instantly
        setBalance(data.balance);

        alert("Money Sent Successfully");

        // Reset fields
        setAmount("");
        setSelectedUser(null);

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }
  };

  return (

    <div className="min-h-screen bg-blue-50 p-8">

      {/* Heading */}
      <h1 className="text-5xl font-bold text-blue-700 mb-8">
        Send Money
      </h1>

      {/* Balance Card */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-800 text-white p-8 rounded-2xl shadow-lg mb-10">

        <p className="text-lg">
          Available Balance
        </p>

        <h2 className="text-5xl font-bold mt-2">
          ₹{balance}
        </h2>

      </div>

      {/* Amount Input */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">

        <label className="block text-lg font-medium mb-4">
          Enter Amount
        </label>

        <input
          type="number"
          placeholder="₹0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border-2 border-gray-300 p-4 rounded-xl text-2xl"
        />

      </div>

      {/* Selected User */}
      {selectedUser && (

        <div className="bg-white p-6 rounded-2xl shadow mb-10">

          <h2 className="text-2xl font-bold mb-2">
            Sending To
          </h2>

          <p className="text-xl">
            {selectedUser.name}
          </p>

          <p className="text-gray-500">
            {selectedUser.phone}
          </p>

          <button
            onClick={handleTransfer}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
          >
            Confirm Transfer
          </button>

        </div>

      )}

      {/* Contacts */}
      <div className="bg-white p-8 rounded-2xl shadow">

        <h2 className="text-3xl font-bold mb-8">
          Pay to Contacts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {contacts.map((contact) => (

            <div
              key={contact.id}
              className="flex justify-between items-center bg-gray-100 p-6 rounded-xl"
            >

              <div>

                <h3 className="text-xl font-semibold">
                  {contact.name}
                </h3>

                <p className="text-gray-500">
                  {contact.phone}
                </p>

              </div>

              <button
                onClick={() => setSelectedUser(contact)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
              >
                Send
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}