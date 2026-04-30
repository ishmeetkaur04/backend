import Link from "next/link";

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-3 gap-6">

      <Link href="/send">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
          <h2 className="text-xl font-semibold">Send Money</h2>
          <p className="text-gray-500">Transfer money instantly</p>
        </div>
      </Link>

      <Link href="/receive">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
          <h2 className="text-xl font-semibold">Receive Money</h2>
          <p className="text-gray-500">Request payments easily</p>
        </div>
      </Link>

      <Link href="/transactions">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
          <h2 className="text-xl font-semibold">Transactions</h2>
          <p className="text-gray-500">View your history</p>
        </div>
      </Link>

    </div>
  );
}