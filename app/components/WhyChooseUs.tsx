import {
  Clock3,
  ShieldCheck,
  Car,
  Wrench,
} from "lucide-react";

const reasons = [
  {
    icon: Car,
    title: "We Come To You",
    description:
      "No need to transport your desktop or laptop anywhere.",
  },
  {
    icon: Clock3,
    title: "Fast Response",
    description:
      "Quick troubleshooting and same-day service whenever possible.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Service",
    description:
      "Professional handling of your hardware and software.",
  },
  {
    icon: Wrench,
    title: "Experienced Repairs",
    description:
      "From gaming PCs to laptops and office systems.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Why Choose PCM Maintenance?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <reason.icon
                className="text-blue-500 mb-4"
                size={36}
              />

              <h3 className="text-xl font-semibold mb-3">
                {reason.title}
              </h3>

              <p className="text-zinc-400">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}