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
  const [open, setOpen] = useState(false);
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
            <ul className="space-y-3 text-gray-300">
              <li><b>Charlas inspiradoras</b></li>
              <li><b>Talleres prácticos</b></li>
              <li><b>Networking</b></li>
            </ul>
            <div>
              <Image
                src="/Agenda.png"
                alt="Agenda"
                width={400}
                height={200}
                className="rounded-xl mx-auto my-6 cursor-pointer hover:scale-105 transition"
                onClick={() => setOpen(true)}
              />
              {open && (
                <div
                  className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src="/Agenda.png"
                    alt="Agenda ampliada"
                    width={1200}
                    height={1600}
                    className="max-w-full max-h-[90vh] rounded-xl object-contain"
                  />
                </div>
              )}
            </div>
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