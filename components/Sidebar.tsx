import { Home, CreditCard, Send, History } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-10">PayForge</h1>

      <nav className="space-y-6">

        <a href="/dashboard" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <Home size={20} /> Dashboard
        </a>

        <a href="/cards" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <CreditCard size={20} /> Cards
        </a>

        <a href="/send" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <Send size={20} /> Send Money
        </a>

        <a href="/transactions" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <History size={20} /> Transactions
        </a>

      </nav>
    </div>
  );
}