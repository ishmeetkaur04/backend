"use client";

import { CreditCard, Plus } from "lucide-react";

export default function Cards() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-8">
        Your Cards
      </h1>

      {/* Card Section */}
      <div className="grid grid-cols-2 gap-8">

        {/* Main Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg">

          <p className="opacity-80">PayForge Wallet</p>

          <h2 className="text-2xl font-bold mt-6">
            **** **** **** 4587
          </h2>

          <div className="flex justify-between mt-6">

            <div>
              <p className="text-sm opacity-80">Card Holder</p>
              <p className="font-semibold">Ishmeet Kaur</p>
            </div>

            <div>
              <p className="text-sm opacity-80">Expiry</p>
              <p className="font-semibold">12/28</p>
            </div>

          </div>

        </div>

        {/* Add Card */}
        <div className="bg-white flex flex-col items-center justify-center rounded-xl shadow hover:shadow-lg cursor-pointer">

          <Plus size={40} className="text-blue-600 mb-3" />

          <p className="text-lg font-semibold">
            Add New Card
          </p>

          <p className="text-gray-500 text-sm">
            Debit / Credit card
          </p>

        </div>

      </div>

      {/* Saved Cards */}
      <div className="mt-10 bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-semibold mb-4">
          Saved Cards
        </h2>

        <div className="flex items-center justify-between border-b py-4">

          <div className="flex items-center gap-4">
            <CreditCard className="text-blue-600" />
            <p>HDFC Debit Card •••• 2345</p>
          </div>

          <p className="text-green-600 font-semibold">
            Active
          </p>

        </div>

        <div className="flex items-center justify-between py-4">

          <div className="flex items-center gap-4">
            <CreditCard className="text-blue-600" />
            <p>SBI Credit Card •••• 9821</p>
          </div>

          <p className="text-green-600 font-semibold">
            Active
          </p>

        </div>

      </div>

    </div>
  );
}