import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-yellow-600 to-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        <Link href={"/"} className="flex gap-2 items-center justify-center">
          <Image src="/logo.png" alt="logo" width={64} height={64} />
          <h1 className="text-2xl font-bold md:block hidden">
            Elevvo Internship
          </h1>
        </Link>
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
