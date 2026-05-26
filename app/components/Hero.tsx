"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-linear-to-b from-black via-zinc-950 to-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl lg:text-7xl font-black leading-tight"
          >
            PC & Laptop Repair
            <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"> At Your Doorstep</span>
          </motion.h1>

          <p className="mt-6 text-zinc-400 text-lg max-w-xl">
            PCM Maintenance provides professional PC repair,
            laptop troubleshooting, upgrades, and custom builds
            all around Beirut.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="https://wa.me/96178972520?text=Hello%20PCM%20Maintenance,%20I%20need%20help%20with%20my%20PC."
              target="_blank"
              className="bg-red-500 hover:bg-red-400 shadow-[0_0_25px_rgba(239,68,68,0.5)] text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              Contact on WhatsApp
            </a>

            <a
              href="#services"
              className="border border-zinc-700 px-6 py-3 rounded-xl"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
            alt="Gaming PC"
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}