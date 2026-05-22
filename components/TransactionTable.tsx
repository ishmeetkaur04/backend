export default function TransactionTable() {

  const transactions = [
    { name: "Amazon", amount: "-$120", date: "12 Mar" },
    { name: "Salary", amount: "+$2500", date: "10 Mar" },
    { name: "Netflix", amount: "-$15", date: "08 Mar" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">

      <h2 className="text-xl font-semibold mb-4">
        Recent Transactions
      </h2>

      <table className="w-full text-left">

        <thead className="text-gray-500">
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t, i) => (
            <tr key={i} className="border-t">
              <td className="py-3">{t.name}</td>
              <td>{t.amount}</td>
              <td>{t.date}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}