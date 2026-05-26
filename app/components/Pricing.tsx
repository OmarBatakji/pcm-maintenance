const pricing = [
  {
    service: "PC Troubleshooting",
    price: "$15+",
  },
  {
    service: "Laptop Repair",
    price: "$20+",
  },
  {
    service: "Windows Installation",
    price: "$10+",
  },
  {
    service: "SSD/RAM Upgrade",
    price: "$10+",
  },
  {
    service: "Custom PC Building",
    price: "$25+",
  },
];

export default function Pricing() {
  return (
    <section className="bg-zinc-950 text-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Estimated Pricing
        </h2>

        <div className="space-y-4">
          {pricing.map((item) => (
            <div
              key={item.service}
              className="flex justify-between bg-zinc-900 border border-zinc-800 p-5 rounded-2xl"
            >
              <span>{item.service}</span>

              <span className="text-red-500 font-bold">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <p className="text-zinc-500 text-center mt-6">
          Final pricing depends on issue complexity and replacement parts.
        </p>
      </div>
    </section>
  );
}