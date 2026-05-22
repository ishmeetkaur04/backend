export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">PayForge</h1>

      <div className="space-x-4">
        <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="/sign-up" className="text-gray-700 hover:text-blue-600">Sign Up</a>
        <a href="/sign-in" className="text-gray-700 hover:text-blue-600">Login</a>
      </div>
    </nav>
  );
}