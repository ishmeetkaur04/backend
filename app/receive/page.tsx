"use client";

import { Copy, QrCode } from "lucide-react";

export default function ReceiveMoney() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">

      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Receive Money
      </h1>

      {/* Wallet Card */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg mb-8">
        <p className="text-sm opacity-80">Your UPI ID</p>
        <h2 className="text-xl font-bold mt-1">payforge@upi</h2>
      </div>

      {/* QR Section */}
      <div className="bg-white p-8 rounded-xl shadow mb-8 flex flex-col items-center">

        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <QrCode size={120} />
        </div>

        <p className="text-gray-600 mb-4">
          Let others scan this QR to pay you
        </p>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          <Copy size={18} />
          Copy UPI ID
        </button>

      </div>

      {/* Request Payment */}
      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-semibold mb-4">
          Request Payment
        </h2>

        <input
          type="text"
          placeholder="Enter payer name"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="number"
          placeholder="Enter amount"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          Send Payment Request
        </button>

      </div>

    </div>
  );
}