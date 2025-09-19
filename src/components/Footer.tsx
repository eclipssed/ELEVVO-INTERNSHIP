const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-600 to-black text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} Elevvo Internship Portfolio. Built with
        Next.js & Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
