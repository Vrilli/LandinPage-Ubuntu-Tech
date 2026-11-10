"use client";

import Image from "next/image";
import { useState } from "react";

const eventImages = [
  "/galeria2025/Lider.jpeg",
  "/galeria2025/imagen2.jpeg",
  "/galeria2025/agenda.jpg",
  "/galeria2025/adri.jpeg",
  "/galeria2025/pendon.jpg",
  "/galeria2025/mari.jpeg",
];

const images2026 = [
  "/galeria2026/UbuntuTech2026.jpeg",
  "/galeria2026/grupo.jpeg",
  "/galeria2026/marian.jpeg",
  "/galeria2026/merget.jpeg",
  "/galeria2026/organizadoras.jpeg",
  "/galeria2026/miguel.jpeg",
  "/galeria2026/robotica.jpeg",
  "/galeria2026/stickers.jpeg",
  "/galeria2026/vrilli.jpeg",
];

export default function Events() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images2026.length);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images2026.length - 1 : prev - 1));
  return (
    <div>
      <section id="eventos" className="px-6 py-16">
        <h3 className="text-3xl font-bold mb-6">Ubuntu Tech 2026</h3>

        <div className="grid md:grid-cols-1 gap-10 items-center">
          <div>
            <Image
              src="/Agenda.jpeg"
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
                  src="/Agenda.jpeg"
                  alt="Agenda ampliada"
                  width={1200}
                  height={1600}
                  className="max-w-full max-h-[90vh] rounded-xl object-contain"
                />
              </div>
            )}
          </div>
          <section className="w-full max-w-6xl mx-auto">
            {/* Imagen principal */}
            <div
              className="relative flex items-center justify-center
        bg-black rounded-2xl overflow-hidden
        h-[350px] sm:h-[450px] md:h-[600px]"
            >
              <Image
                src={images2026[current]}
                alt={`Ubuntu Tech 2026 - Fotografía ${current + 1}`}
                fill
                priority={current === 0}
                sizes="(max-width: 768px) 100vw, 1152px"
                className="object-contain"
              />

              {/* Anterior */}
              <button
                onClick={prev}
                aria-label="Fotografía anterior"
                className="absolute left-3 z-10 p-3 rounded-full
          bg-black/60 text-white hover:bg-orange-500 transition"
              >
                ❮
              </button>

              {/* Siguiente */}
              <button
                onClick={next}
                aria-label="Fotografía siguiente"
                className="absolute right-3 z-10 p-3 rounded-full
          bg-black/60 text-white hover:bg-orange-500 transition"
              >
                ❯
              </button>

              {/* Contador */}
              <span
                className="absolute bottom-4 right-4 z-10
          bg-black/70 text-white text-sm px-3 py-1 rounded-full"
              >
                {current + 1} / {images2026.length}
              </span>
            </div>

            {/* Miniaturas */}
            <div className="flex gap-3 mt-4 overflow-x-auto pb-3">
              {images2026.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setCurrent(index)}
                  aria-label={`Ver fotografía ${index + 1}`}
                  aria-current={current === index}
                  className={`relative shrink-0 w-20 h-20 rounded-lg
              overflow-hidden border-2 transition ${
                current === index ? "border-orange-500" : "border-transparent"
              }`}
                >
                  <Image
                    src={image}
                    alt={`Miniatura ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </section>
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
