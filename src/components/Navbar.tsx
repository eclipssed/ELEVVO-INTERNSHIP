import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-pink-600 to-purple-400 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">Elevvo Internship</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link href="#tasks" className="hover:text-yellow-300 transition">
            Tasks
          </Link>
          <Link href="#about" className="hover:text-yellow-300 transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
