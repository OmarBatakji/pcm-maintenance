export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-white font-bold text-xl">
          PCM Maintenance
        </h1>

        <div className="hidden md:flex gap-8 text-zinc-300">
          <a href="#services" className="hover:text-white">
            Services
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}