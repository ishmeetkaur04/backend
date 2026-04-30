"use client"

import { QrCode, Send, Building2, Smartphone } from "lucide-react"

export default function MoneyPage() {
  const contacts = ["Sneha", "Harjinder", "Zeeya", "Yuvraj", "Amrit", "Drishti"]

  const bills = [
    "Mobile recharge",
    "DTH / Cable",
    "Electricity",
    "FASTag",
    "Postpaid mobile",
    "Broadband",
    "Credit cards",
    "Insurance",
  ]

  return (
    <div className="min-h-screen bg-black text-white p-4">

      {/* Search Bar */}
      <div className="bg-gray-800 rounded-full px-4 py-3 flex items-center mb-6">
        <input
          placeholder="Pay by name or phone number"
          className="bg-transparent outline-none flex-1"
        />
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold">
          Protect your money with UPI Safety Shield tips
        </h2>
        <button className="mt-3 bg-white text-blue-600 px-4 py-2 rounded-full text-sm">
          Watch video →
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4 mb-8 text-center">

        <div className="flex flex-col items-center">
          <div className="bg-blue-600 p-4 rounded-xl">
            <QrCode />
          </div>
          <p className="text-sm mt-2">Scan QR</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-blue-600 p-4 rounded-xl">
            <Send />
          </div>
          <p className="text-sm mt-2">Pay anyone</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-blue-600 p-4 rounded-xl">
            <Building2 />
          </div>
          <p className="text-sm mt-2">Bank transfer</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-blue-600 p-4 rounded-xl">
            <Smartphone />
          </div>
          <p className="text-sm mt-2">Recharge</p>
        </div>

      </div>

      {/* People */}
      <h3 className="text-lg font-semibold mb-4">People</h3>

      <div className="flex gap-4 overflow-x-auto mb-8">

        {contacts.map((name, i) => (
          <div key={i} className="flex flex-col items-center">

            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-lg">
              {name[0]}
            </div>

            <p className="text-xs mt-2">{name}</p>

          </div>
        ))}

      </div>

      {/* Bills Section */}
      <h3 className="text-lg font-semibold mb-4">Bills & recharges</h3>

      <div className="grid grid-cols-4 gap-4 text-center">

        {bills.map((bill, i) => (
          <div key={i} className="flex flex-col items-center">

            <div className="bg-blue-600 p-4 rounded-full w-14 h-14 flex items-center justify-center">
              ₹
            </div>

            <p className="text-xs mt-2">{bill}</p>

          </div>
        ))}

      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 flex justify-around py-4">

        <button>Home</button>
        <button>Money</button>
        <button>You</button>

      </div>

    </div>
  )
}