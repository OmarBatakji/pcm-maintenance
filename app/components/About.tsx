export default function About() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
    
        <div className="relative w-full max-w-lg mx-auto">
            <img
                src="/images/omar.jpg"
                alt="Founder of PCM Maintenance"
                className="rounded-3xl border border-zinc-800 shadow-2xl"
            />
            <div className="absolute lg:-bottom-10 lg:-right-10 mt-6 lg:mt-0 bg-zinc-900 border border-zinc-800 rounded-2xl p-3 shadow-2xl w-56">
                
                <img
                src="/images/diploma.jpg"
                alt="Computer Engineering Diploma"
                className="rounded-xl mb-3"
                />

                <p className="text-sm text-zinc-300 font-semibold">
                Computer Engineering Diploma
                </p>

                <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />

                <p className="text-xs text-zinc-500">
                    Verified Technical Background
                </p>
                </div>
            </div>
        </div>

        <div>
          <p className="text-red-500 font-semibold mb-3">
            ABOUT PCM MAINTENANCE
          </p>

          <h2 className="text-5xl font-black mb-6">
            Hi, I’m Omar —
            <span className="text-blue-500">
              {" "}Founder of PCM Maintenance
            </span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            I'm a Computer Engineer specialized in PC and laptop troubleshooting,
            maintenance, upgrades, and custom gaming PC builds.
            PCM Maintenance was created to provide convenient
            on-site technical support across Beirut, allowing
            customers to get professional help without needing
            to transport their systems.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            With a background in Computer Engineering and years
            of hands-on experience working with hardware and
            software systems, I focus on delivering reliable,
            transparent, and professional service for every client.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
              <h3 className="text-3xl font-bold text-blue-500">
                5+
              </h3>

              <p className="text-zinc-400 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
              <h3 className="text-3xl font-bold text-red-500">
                CE
              </h3>

              <p className="text-zinc-400 mt-2">
                Computer Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}