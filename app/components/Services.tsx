import {
  Wrench,
  Laptop,
  Cpu,
  HardDrive,
  Shield,
  Monitor,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "PC Troubleshooting",
  },
  {
    icon: Laptop,
    title: "Laptop Repair",
  },
  {
    icon: Cpu,
    title: "Custom PC Building",
  },
  {
    icon: HardDrive,
    title: "SSD & RAM Upgrades",
  },
  {
    icon: Shield,
    title: "Virus Removal",
  },
  {
    icon: Monitor,
    title: "Windows Installation",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-zinc-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
            >
              <service.icon className="text-blue-400 mb-4" size={40} />

              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}