"use client";

import Image from "next/image";

// 2026 speakers
const speakers = [
  {
    name: "Ing. Andrés Caicedo",
    role: "CEO & Fundador de XTIC Empresa y CittyMagic",
    bio: "Líder visionario en Inteligencia Artificial aplicada, desarrollo tecnológico y transformación digital, con más de 13 años impulsando innovación desde el Chocó para Colombia. Cuenta con certificación de Google en Marketing Digital e IBM en Inteligencia Artificial Generativa.Su visión es convertir la IA en una fuerza real de desarrollo territorial, productividad empresarial e inclusión digital.Desde XTIC Empresa y CittyMagic, lidera soluciones Dev, agentes IA, automatización y turismo inteligente para activar el potencial económico, social y tecnológico del Chocó.",
    image: "/speakers/2026/AndresC.jpeg",
  },
  {
    name: "Maris Botero",
    role: "Científica de datos y especialista en inteligencia artificial",
    bio: "Es una científica de datos y especialista en inteligencia artificial que combina tecnología, arte y educación para transformar ideas complejas en experiencias creativas y accesibles. Su trabajo integra Python, machine learning, visualización de datos y modelos generativos, y explora el arte generativo como una forma de unir creatividad y tecnología. Como conferencista, Docker Captain y artista, le apasiona compartir conocimiento e inspirar a otras personas a descubrir nuevas posibilidades a través del código y la inteligencia artificial.",
    image: "/speakers/2026/MarisB.jpeg",
  },
  {
    name: "Marian Villa",
    role: "CEO de PionerasDev, Google Developer Expert y Embajadora de Google Women Techmakers",
    bio: "Devrel en Interledger. Trabaja con proyectos como Open Payments y Web Monetization. Co-fundadora de PionerasDev, con +15 años de experiencia como Líder técnica, Diseñadora  de Productos Digitales y  con experiencia en Creación de Comunidades. Le gusta crear Contenido Técnico y apoyar Diseño de Productos, especialmente en tecnologías Open Source. Es Google Developer Expert en Tecnologías Web (HTML-CSS-Javascript), Embajadora WTM , y Mentora en Google for startups. Es Fellow de la Real Academia de Ingeniería de Londres.",
    image: "/speakers/2026/Marian.png",
  },
  {
    name: "Veronica Rodríguez",
    role: "Economista y Senior Product Manager.",
    bio: "Datos que transforman decisiones.",
    image: "/speakers/2026/veronica_rodriguez.png",
  },
  {
    name: "Por Confirmar",
    role: "QA Engineer",
    bio: "Calidad desde el código.",
    image: "/speakers/2026/ejemplo.png",
  },
  {
    name: "Por Confirmar",
    role: "DevOps",
    bio: "Automatización y escalabilidad.",
    image: "/speakers/2026/ejemplo.png",
  },
];

// 2025 speakers
const images = [
  "/speakers/adri.png",
  "/speakers/andres.png",
  "/speakers/jelsin.png",
  "/speakers/marian.png",
  "/speakers/libia.png",
  "/speakers/LILI.png",
];

export default function SpeakersGallery() {
  return (
    <div>
      <section id="speakers" className="px-4 md:px-6 py-20 bg-[#07111F]">

        {/* Título */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-orange-500 tracking-[0.2em] mb-14">
          SPEAKERS 2026
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {speakers.map((speaker, i) => (
            <div
              key={i}
              className="relative group rounded-3xl overflow-hidden bg-gray-900 border border-white/5 hover:border-orange-500/40 transition duration-500"
            >

              {/* Imagen */}
              <div className="relative h-[300px] sm:h-[260px] md:h-[300px] overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Información */}
              <div className="p-5 text-white">

                <h3 className="text-xl font-bold mb-1">
                  {speaker.name}
                </h3>

                <p className="text-orange-500 text-sm font-medium mb-3">
                  {speaker.role}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {speaker.bio}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* seccion speakers 2025 */}
      <section id="speakers" className="px-6 py-24 bg-[#07111F]">
        {/* Título */}
        <h2 className="text-center text-4xl md:text-3xl font-bold text-orange-500 tracking-[0.3em] mb-16">
          SPEAKERS 2025
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative group h-[180px] md:h-[240px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={src}
                alt="Speaker Ubuntu Tech"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

              <div className="absolute inset-0 border border-transparent group-hover:border-orange-500 rounded-2xl transition" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
