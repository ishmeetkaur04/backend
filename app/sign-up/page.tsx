export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">

      <div className="bg-white p-10 rounded-xl shadow-xl w-[400px]">

        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Create PayForge Account
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg">
          Create Account
        </button>

      </div>

    </div>
  );
}