"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden rounded-2xl">

      {/* Slides */}
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt="Evento Ubuntu Tech"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
            priority={i === 0}
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-black/60" />
        </div>
      ))}

      {/* Flecha izquierda */}
      <button
        onClick={prev}
        className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-2 md:p-3 rounded-full backdrop-blur"
      >
        ←
      </button>

      {/* Flecha derecha */}
      <button
        onClick={next}
        className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-2 md:p-3 rounded-full backdrop-blur"
      >
        →
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full cursor-pointer transition ${
              i === current ? "bg-orange-500 scale-110" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}