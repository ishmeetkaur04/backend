export default function BalanceCard() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg w-full">

      <p className="text-sm opacity-80">Available Balance</p>

      <h2 className="text-3xl font-bold mt-2">
        $12,450
      </h2>

      <div className="mt-6 flex justify-between text-sm opacity-90">
        <span>**** 4589</span>
        <span>12/28</span>
      </div>

    </div>
  );
}