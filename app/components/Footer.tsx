import { Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-500 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p>
          © 2026 PCM Maintenance. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="https://instagram.com/pcm.maintenance/"
            target="_blank"
            className="hover:text-white"
          >
            <Camera />
          </a>

          <a
            href="https://tiktok.com/@pcm.maintenance"
            target="_blank"
            className="hover:text-white"
          >
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}