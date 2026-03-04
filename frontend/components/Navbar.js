export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">QuickHire</h1>
      <div className="space-x-4">
        <button className="bg-white text-blue-600 px-3 py-1 rounded">Login</button>
        <button className="bg-white text-blue-600 px-3 py-1 rounded">Register</button>
      </div>
    </nav>
  );
}