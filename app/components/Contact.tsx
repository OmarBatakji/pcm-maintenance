export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">
          Need Your PC Fixed?
        </h2>

        <p className="text-zinc-400 mt-4">
          Contact us and we’ll come directly to you anywhere in Beirut.
        </p>

        <a
          href="https://wa.me/96178972520"
          target="_blank"
          className="inline-block mt-8 bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-2xl font-bold"
        >
          Message on WhatsApp
        </a>
      </div>
    </section>
  );
}