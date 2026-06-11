export default function About() {
  return (
    <section id="about"
    className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
    
        <div className="relative w-full max-w-lg mx-auto">
            <img
                src="/images/omar.jpg"
                alt="Founder of PCM Maintenance"
                className="rounded-3xl border border-zinc-800 shadow-2xl"
            />
            
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
            on-site technical support across Beirut and Barja, allowing
            customers to get professional help without needing
            to transport their systems.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            With a background in Computer Engineering and years
            of hands-on experience working with hardware and
            software systems, I focus on delivering reliable,
            transparent, and professional service for every client.
          </p>
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-6">
              Credentials & Certifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <a
                href="/certificates/diploma.jpg"
                target="_blank"
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 hover:border-blue-500 transition"
              >
                <img
                  src="/certificates/diploma.jpg"
                  alt="Computer Engineering Diploma"
                  className="rounded-xl mb-3"
                />

                <p className="font-semibold">
                  Computer Engineering Diploma
                </p>
              </a>

            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-5">
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
                Computer Engineering
              </h3>

              <p className="text-zinc-400 mt-2">
                Major
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}