"use client";

import { useState } from "react";
import {
  Wrench,
  Laptop,
  Cpu,
  HardDrive,
  Shield,
  Monitor,
} from "lucide-react";

const [openService, setOpenService] =
  useState<string | null>(null);

const services = [
  {
    icon: Wrench,
    title: "PC Troubleshooting",
    description:
      "Diagnosis and repair of desktop PC issues including boot failures, no display, blue screens, performance problems, driver issues, and software troubleshooting."
  },
  {
    icon: Laptop,
    title: "Laptop Repair",
    description:
      "Laptop diagnostics, overheating solutions, hardware replacement, software repairs, upgrades, and general troubleshooting."
  },
  {
    icon: Cpu,
    title: "Custom PC Building",
    description:
      "Full PC assembly, cable management, component installation, BIOS setup, testing, and optimization."
  },
  {
    icon: HardDrive,
    title: "SSD & RAM Upgrades",
    description:
      "Upgrade, Add, or Remove HDDs, SSDs, NVMe's, and RAM Sticks on both laptops and desktops."
  },
  {
    icon: Shield,
    title: "Virus Removal",
    description:
      "Help get rid of installed viruses while maintaining drive integrity."
  
  },
  {
    icon: Monitor,
    title: "Windows Installation",
    description:
      "Install full Activated Windows (10/11), Activate pre-installed Windows on Laptops and Desktops."
  
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
              onClick={() =>
                setOpenService(
                  openService === service.title
                    ? null
                    : service.title
                )
              }
              className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-2xl
                p-8
                cursor-pointer
                hover:border-blue-500
                transition-all
              "
            >
              <service.icon className="text-blue-400 mb-4" size={40} />

              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>
              {openService === service.title && (
              <div className="mt-4">
                <p className="text-zinc-400">
                  {service.description}
                </p>
              </div>
              )}
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}