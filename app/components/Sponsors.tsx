import Image from "next/image";

interface Sponsor {
  logo: string;
  width: number;
  height: number;
}

interface SponsorTierProps {
  title: string;
  logos: Sponsor[];
  glow: string;
  border: string;
  bg: string;
}


const sponsors2026 = {
  oro: [
    {
      logo: "/sponsors/2026/interledger.svg",
      width: 220,
      height: 80,
    },
    {
      logo: "/sponsors/2026/busquedad.png",
      width: 180,
      height: 80,
    },
    {
      logo: "/sponsors/2026/busquedad.png",
      width: 180,
      height: 80,
    },
  ],

  plata: [
    {
      logo: "/sponsors/2026/busquedad.png",
      width: 180,
      height: 80,
    },
    {
      logo: "/sponsors/2026/busquedad.png",
      width: 180,
      height: 80,
    },
    {
      logo: "/sponsors/2026/busquedad.png",
      width: 180,
      height: 80,
    },
  ],

  bronce: [
    {
      logo: "/sponsors/2026/HotelGalu.png",
      width: 180,
      height: 110,
    },
    {
      logo: "/sponsors/2026/busquedad.png",
      width: 180,
      height: 80,
    },
    {
      logo: "/sponsors/2026/busquedad.png",
      width: 180,
      height: 80,
    },
  ],
};



export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="px-4 md:px-6 py-24 bg-gradient-to-b from-black to-gray-950 text-center overflow-hidden"
    >
      {/* TITULO */}
      <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
        Las Comunidades que construyen el futuro
        <span className="text-orange-500"> están aquí</span>
      </h2>

      <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
        Ubuntu Tech conecta a comunidades con talento afrocolombiano en tecnología,
        generando impacto real y visibilidad estratégica.
      </p>

      {/* SPONSORS 2026 */}
      <div className="mt-24">

        <h3 className="text-3xl md:text-4xl font-bold text-white mb-14">
          Sponsors 2026
        </h3>

        {/* ORO */}
        <SponsorTier
          title="Sponsor Oro"
          logos={sponsors2026.oro}
          glow="shadow-yellow-500/20"
          border="border-yellow-500/30"
          bg="from-yellow-500/10 to-transparent"
        />

        {/* PLATA */}
        <SponsorTier
          title="Sponsor Plata"
          logos={sponsors2026.plata}
          glow="shadow-gray-400/10"
          border="border-gray-400/20"
          bg="from-gray-400/10 to-transparent"
        />

        {/* BRONCE */}
        <SponsorTier
          title="Sponsor Bronce"
          logos={sponsors2026.bronce}
          glow="shadow-orange-800/10"
          border="border-orange-700/20"
          bg="from-orange-700/10 to-transparent"
        />

      </div>

      {/* SPONSORS 2025 */}
      <div className="mt-28">

        <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Sponsors 2025
        </h3>

        <div className="max-w-5xl mx-auto bg-white/5 p-4 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">

          <div className="relative w-full aspect-[4/5] md:aspect-[16/10]">
            <Image
              src="/sponsors/sponsors.jpg"
              alt="Sponsors Ubuntu Tech 2025"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1000px"
              className="object-contain rounded-2xl"
            />
          </div>

        </div>

      </div>

      {/* BENEFICIOS */}
      <div className="mt-28">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          Beneficios de apoyar Ubuntu Tech
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-900/80 p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition">
            <h3 className="text-lg font-semibold mb-4">
              🎯 Visibilidad estratégica
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Tu marca frente a una comunidad tech en crecimiento y altamente comprometida.
            </p>
          </div>

          <div className="bg-gray-900/80 p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition">
            <h3 className="text-lg font-semibold mb-4">
              🚀 Acceso a talento
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Conecta directamente con futuros desarrolladores, diseñadores y líderes.
            </p>
          </div>

          <div className="bg-gray-900/80 p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition">
            <h3 className="text-lg font-semibold mb-4">
              🌍 Impacto real
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Sé parte de la transformación tecnológica del territorio.
            </p>
          </div>

        </div>

      </div>

      {/* PLANES */}
      <div className="mt-28">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          Planes de patrocinio
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* GOLD */}
          <div className="bg-gradient-to-b from-orange-500/10 to-gray-900 p-10 rounded-3xl border border-orange-500 relative shadow-xl shadow-orange-500/10">

            <span className="absolute top-4 right-4 text-xs bg-orange-500 text-black px-3 py-1 rounded-full font-semibold">
              Más popular
            </span>

            <h3 className="text-2xl font-bold text-orange-500">
              Gold
            </h3>

            <p className="text-4xl font-bold my-6">
              $2.000+
            </p>

            <ul className="text-gray-400 space-y-3 text-sm text-left">
              <li>✔ Logo destacado en todo el evento</li>
              <li>✔ Stand físico premium</li>
              <li>✔ Workshop o keynote</li>
              <li>✔ Acceso a base de talento</li>
            </ul>

            <a
              href="https://instagram.com/ubuntu_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-orange-500 px-6 py-3 rounded-xl text-black w-full inline-block font-semibold hover:scale-105 transition"
            >
              Quiero este plan
            </a>

          </div>

          {/* SILVER */}
          <div className="bg-gray-900 p-10 rounded-3xl border border-white/10">

            <h3 className="text-2xl font-bold">
              Silver
            </h3>

            <p className="text-4xl font-bold my-6">
              $6.00+
            </p>

            <ul className="text-gray-400 space-y-3 text-sm text-left">
              <li>✔ Logo en web</li>
              <li>✔ Presencia en redes</li>
              <li>✔ Networking estratégico</li>
            </ul>

            <a
              href="https://instagram.com/ubuntu_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 border border-gray-600 px-6 py-3 rounded-xl w-full inline-block hover:bg-gray-800 transition"
            >
              Elegir plan
            </a>

          </div>

          {/* COMMUNITY */}
          <div className="bg-gray-900 p-10 rounded-3xl border border-white/10">

            <h3 className="text-2xl font-bold">
              Community
            </h3>

            <p className="text-4xl font-bold my-6">
              Flexible
            </p>

            <ul className="text-gray-400 space-y-3 text-sm text-left">
              <li>✔ Apoyo comunitario</li>
              <li>✔ Reconocimiento oficial</li>
              <li>✔ Presencia en comunidad</li>
            </ul>

            <a
              href="https://instagram.com/ubuntu_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 border border-gray-600 px-6 py-3 rounded-xl w-full inline-block hover:bg-gray-800 transition"
            >
              Apoyar
            </a>

          </div>

        </div>

      </div>

      {/* URGENCIA */}
      <div className="mt-24 bg-orange-500/10 border border-orange-500/20 p-8 rounded-3xl max-w-3xl mx-auto">

        <h3 className="text-2xl font-bold text-orange-400">
          Cupos limitados para sponsors
        </h3>

        <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
          Solo trabajamos con un número reducido de aliados para garantizar
          visibilidad real e impacto estratégico.
        </p>

      </div>

      {/* CTA FINAL */}
      <div className="mt-16">

        <a
          href="https://instagram.com/ubuntu_tech"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 px-10 py-4 rounded-2xl text-black text-lg font-semibold hover:scale-105 transition inline-block"
        >
          Convertirme en sponsor
        </a>

        <p className="text-gray-500 text-sm mt-4">
          Respuesta en menos de 24h
        </p>

      </div>

    </section>
  );
}


function SponsorTier({
  title,
  logos,
  glow,
  border,
}: SponsorTierProps) {
  return (
    <div className="mb-20">

      {/* TITULO */}
      <div className="flex items-center gap-4 mb-10">

        <div className="h-[1px] flex-1 bg-white/10" />

        <h3 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
          {title}
        </h3>

        <div className="h-[1px] flex-1 bg-white/10" />

      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {logos.map((sponsor, i) => (
          <div
            key={i}
            className={`bg-[#F8F8F8] ${border} border rounded-3xl h-[140px] flex items-center justify-center shadow-lg ${glow}`}
          >
            <div className="flex items-center justify-center w-[220px] h-[80px]">
              <Image
                src={sponsor.logo}
                alt="Sponsor Ubuntu Tech"
                width={sponsor.width}
                height={sponsor.height}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}