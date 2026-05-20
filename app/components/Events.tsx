"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const eventImages = [
  "/galeria2025/Lider.jpeg",
  "/galeria2025/imagen2.jpeg",
  "/galeria2025/agenda.jpg",
  "/galeria2025/adri.jpeg",
  "/galeria2025/pendon.jpg",
  "/galeria2025/mari.jpeg",
];

export default function Events() {

  const [days, setDays] = useState(0);

  useEffect(() => {
    const eventDate = new Date("2026-09-05"); // 🔥 fecha del evento

    const updateCountdown = () => {
      const today = new Date();
      const diff = eventDate.getTime() - today.getTime();

      const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDays(daysLeft > 0 ? daysLeft : 0);
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000 * 60 * 60); // cada hora

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <section id="eventos" className="px-6 py-16">
        <h3 className="text-3xl font-bold mb-6">Ubuntu Tech 2026</h3>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <ul className="space-y-3 text-gray-400">
              <li>Charlas inspiradoras</li>
              <li>Talleres prácticos</li>
              <li>Networking</li>
            </ul>
            <a
              href="/agenda-construccion.png"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-orange-500 px-6 py-3 rounded-xl text-black font-semibold hover:scale-105 transition"
            >
              Ver agenda
            </a>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl text-center">
            <p className="text-gray-400">Faltan</p>
            <p className="text-3xl font-bold text-orange-500">
              {days} días
            </p>
          </div>
        </div>
      </section>

      {/*  seccion del 2025 */}
      <section id="2026" className="px-6 py-16">
        <h3 className="text-3xl font-bold mb-10">Ubuntu Tech 2025</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {eventImages.map((src, i) => (
            <div
              key={i}
              className="relative w-full h-[520px] md:h-[560px] rounded-2xl overflow-hidden"
            >
              <Image
                src={src}
                alt="Evento Ubuntu Tech"
                fill
                sizes="(max-width: 768px) 200vw, 44vw"
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}