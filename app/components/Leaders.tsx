"use client";

import Image from "next/image";

const leaders = [
  {
    name: "Vrilli Castro",
    role: "Lider de PionerasDev y Digital Diaspora y Creadora de Ubuntu Tech",
    image: "/organizadores/vri.png",
  },
  {
    name: "Greisy Rodríguez",
    role: "Lider de PionerasDev, Geek Girls Latam y Embajadora de Google Women Techmakers.",
    image: "/organizadores/GREY.png",
  },
  {
    name: "Valentina Ariza",
    role: "Embajadora de Google Women Techmakers,Co-Lider de la comunidad Pyladies Medellín y Co-Fundadora del Podcast DataSoul.",
    image: "/organizadores/valen.png",
  },
  {
    name: "Marian Villa",
    role: "CEO de PionerasDev, Google Developer Expert y Embajadora de Google Women Techmakers",
    image: "/organizadores/MARIAN.png",
  },
  {
    name: "Jimmy García",
    role: "CEO de la escuela de robótica del Chocó",
    image: "/organizadores/jimmy.png",
  },
  {
    name: "Liliana Arias",
    role: "Red pensando al Chocó",
    image: "/organizadores/lili.png",
  },
  {
    name: "Miguel Cicerón",
    role: "Red pensando al Chocó",
    image: "/organizadores/MIGUEL.png",
  },
  {
    name: "Nicodemo Vargas",
    role: "Red pensando al Chocó",
    image: "/organizadores/nico.png",
  },
  {
    name: "Sandra Palacios",
    role: "Red pensando al Chocó",
    image: "/organizadores/sandra.png",
  },
  {
    name: "Yulieth Córdoba",
    role: "Red pensando al Chocó",
    image: "/organizadores/yulieth.png",
  },
];

export default function Leaders() {
  return (
    <section id="lideres" className="px-6 py-20 bg-black text-center">

      {/* Título */}
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-16">
        ORGANIZADORES
      </h3>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">

        {leaders.map((leader, i) => (
          <div key={i} className="flex flex-col items-center group">

            {/* Imagen circular */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-orange-500 group-hover:scale-105 transition" />

              <Image
                src={leader.image}
                alt={leader.name}
                fill
                sizes="200px"
                className="rounded-full object-cover p-1 grayscale group-hover:grayscale-0 transition duration-500"
              />
            </div>

            {/* Nombre */}
            <h4 className="text-orange-500 font-bold text-lg md:text-xl tracking-wide">
              {leader.name.toUpperCase()}
            </h4>

            {/* Rol */}
            <p className="text-gray-400 text-sm mt-2 max-w-[200px]">
              {leader.role}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}