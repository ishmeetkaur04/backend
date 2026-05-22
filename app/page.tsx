
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">

      <Navbar />

      <div className="flex flex-col items-center justify-center text-center mt-32 px-6">

        <h1 className="text-6xl font-bold text-blue-700 mb-6">
          PayForge
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-xl">
          The smarter way to send, receive and manage your money.
          Fast, secure and built for modern digital payments.
        </p>

        <div className="flex gap-6">

          <a
            href="/sign-up"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg shadow-lg"
          >
            Create Account
          </a>

          <a
            href="/sign-in"
            className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-xl text-lg shadow-lg"
          >
            Login
          </a>

        </div>

      </div>

    </main>
  );
}