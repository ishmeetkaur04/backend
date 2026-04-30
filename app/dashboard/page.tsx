// "use client";

// import Link from "next/link";
// import { Send, ArrowDownLeft, LayoutDashboard, Wallet } from "lucide-react";

// export default function Dashboard() {

//   const transactions = [
//     { name: "Rahul Sharma", amount: 500 },
//     { name: "Priya Kapoor", amount: 1200 },
//     { name: "Karan Singh", amount: 300 }
//   ];

//   return (

//     <div className="flex min-h-screen bg-gray-100">

//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-md p-6">

//         <h2 className="text-2xl font-bold text-blue-700 mb-10">
//           PayForge
//         </h2>

//         <div className="flex flex-col gap-6">

//           <Link href="/dashboard" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
//             <LayoutDashboard size={20}/>
//             Dashboard
//           </Link>

//           <Link href="/send" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
//             <Send size={20}/>
//             Send Money
//           </Link>

//           <Link href="/transactions" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
//             <ArrowDownLeft size={20}/>
//             Transactions
//           </Link>

//         </div>

//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-10">

//         <h1 className="text-3xl font-bold mb-8">
//           Dashboard
//         </h1>

//         {/* Wallet Card */}
//         <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg w-80 mb-10">
//           <p className="text-sm opacity-80">Wallet Balance</p>
//           <h2 className="text-3xl font-bold mt-2">₹24,500</h2>
//         </div>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-3 gap-6 mb-10">

//           <Link href="/send">
//             <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer flex items-center gap-4">
//               <Send className="text-blue-600"/>
//               <div>
//                 <p className="font-semibold">Send Money</p>
//                 <p className="text-sm text-gray-500">Transfer instantly</p>
//               </div>
//             </div>
//           </Link>
// <Link href="/receive">
//   <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer flex items-center gap-4">
//     <ArrowDownLeft className="text-green-600"/>
//     <div>
//       <p className="font-semibold">Receive Money</p>
//       <p className="text-sm text-gray-500">Accept payments</p>
//     </div>
//   </div>
// </Link>

//           <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
//             <Wallet className="text-purple-600"/>
//             <div>
//               <p className="font-semibold">Wallet</p>
//               <p className="text-sm text-gray-500">Manage balance</p>
//             </div>
//           </div>

//         </div>

//         {/* Recent Transactions */}
//         <div className="bg-white p-6 rounded-xl shadow">

//           <h2 className="text-xl font-semibold mb-4">
//             Recent Transactions
//           </h2>

//           {transactions.map((t, i) => (
//             <div key={i} className="flex justify-between border-b py-3">

//               <p>{t.name}</p>

//               <p className="text-red-500">
//                 -₹{t.amount}
//               </p>

//             </div>
//           ))}

//         </div>

//       </div>

//     </div>

//   );
// }

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
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchDashboardData();

    // auto refresh every 3 sec (optional live updates)
    const interval = setInterval(fetchDashboardData, 3000);

    return () => clearInterval(interval);
  }, []);

  const fetchDashboardData = async () => {
    try {
      // fetch users
      const userRes = await fetch("/api/users");
      const users = await userRes.json();

      if (users.length > 0) {
        setBalance(users[0].balance || 0);
      }

      // fetch transactions
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
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            href="/send"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
          >
            <Send size={20} />
            Send Money
          </Link>

          <Link
            href="/transactions"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
          >
            <ArrowDownLeft size={20} />
            Transactions
          </Link>

          <Link
            href="/cards"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
          >
            <CreditCard size={20} />
            Cards
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">
          Dashboard
        </h1>

        {/* Wallet Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg w-80 mb-10">
          <p className="text-sm opacity-80">Wallet Balance</p>
          <h2 className="text-3xl font-bold mt-2">
            ₹{balance}
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <Link href="/send">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer flex items-center gap-4">
              <Send className="text-blue-600" />
              <div>
                <p className="font-semibold">Send Money</p>
                <p className="text-sm text-gray-500">
                  Transfer instantly
                </p>
              </div>
            </div>
          </Link>

          <Link href="/receive">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer flex items-center gap-4">
              <ArrowDownLeft className="text-green-600" />
              <div>
                <p className="font-semibold">Receive Money</p>
                <p className="text-sm text-gray-500">
                  Accept payments
                </p>
              </div>
            </div>
          </Link>

          <Link href="/cards">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer flex items-center gap-4">
              <Wallet className="text-purple-600" />
              <div>
                <p className="font-semibold">Cards</p>
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
            transactions.map((t: any, i) => (
              <div
                key={i}
                className="flex justify-between border-b py-3"
              >
                <p>{t.user}</p>

                <p className="text-red-500">
                  -₹{t.amount}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}