import Image from "next/image";



export default function Sponsors() {
  return (
    <section className="px-6 py-28 bg-gradient-to-b from-black to-gray-950 text-center">

      {/* TITULO */}
      <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
        Las Comunidades que construyen el futuro
        <span className="text-orange-500"> están aquí</span>
      </h2>

      <p className="text-gray-400 mt-6 max-w-xl mx-auto my-6">
        Ubuntu Tech conecta a comunidades con talento afrocolombiano en tecnología,
        generando impacto real y visibilidad estratégica.
      </p>

      {/* LOGOS (PRUEBA SOCIAL) */}
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">
        Sponsors 2025
      </h3>

      <div className="max-w-5xl mx-auto  p-6 md:p-10 rounded-2xl border border-white/10">

        <div className="relative w-full aspect-[4/5] md:aspect-[16/10]">
          <Image
            src="/sponsors/sponsors.jpg"
            alt="Sponsors Ubuntu Tech 2025"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain"
            priority
          />
        </div>

      </div>

      {/* BENEFICIOS CLAVE */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 my-8">
        Apoyanos y accede a Beneficios como:
      </h2>
      <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h3 className="text-lg font-semibold mb-3">🎯 Visibilidad estratégica</h3>
          <p className="text-gray-400 text-sm">
            Tu marca frente a una comunidad tech en crecimiento y altamente comprometida.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h3 className="text-lg font-semibold mb-3">🚀 Acceso a talento</h3>
          <p className="text-gray-400 text-sm">
            Conecta directamente con futuros desarrolladores, diseñadores y líderes.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h3 className="text-lg font-semibold mb-3">🌍 Impacto real</h3>
          <p className="text-gray-400 text-sm">
            Sé parte de la transformación tecnológica del territorio.
          </p>
        </div>

      </div>

      {/* PLANES */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 my-16">
        Elige el plan que mejor se adapte a tu empresa
      </h2>
      <div className=" grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* GOLD */}
        <div className="bg-gray-900 p-10 rounded-2xl border border-orange-500 relative scale-105 shadow-lg shadow-orange-500/10">

          <span className="absolute top-4 right-4 text-xs bg-orange-500 text-black px-3 py-1 rounded-full">
            Más popular
          </span>

          <h3 className="text-xl font-bold text-orange-500">Gold</h3>
          <p className="text-3xl font-bold my-4">$5.000+</p>

          <ul className="text-gray-400 space-y-2 text-sm">
            <li>✔ Logo destacado en todo el evento</li>
            <li>✔ Stand físico</li>
            <li>✔ Charla o workshop</li>
            <li>✔ Acceso a base de talento</li>
          </ul>

          <button className="mt-6 bg-orange-500 px-6 py-3 rounded-xl text-black w-full hover:scale-105 transition">
            Quiero este plan
          </button>
        </div>

        {/* SILVER */}
        <div className="bg-gray-900 p-10 rounded-2xl border border-gray-800">

          <h3 className="text-xl font-bold">Silver</h3>
          <p className="text-3xl font-bold my-4">$1.000+</p>

          <ul className="text-gray-400 space-y-2 text-sm">
            <li>✔ Logo en web</li>
            <li>✔ Presencia en redes</li>
            <li>✔ Networking</li>
          </ul>

          <button className="mt-6 border border-gray-600 px-6 py-3 rounded-xl w-full hover:bg-gray-800">
            Elegir plan
          </button>
        </div>

        {/* COMMUNITY */}
        <div className="bg-gray-900 p-10 rounded-2xl border border-gray-800">

          <h3 className="text-xl font-bold">Community</h3>
          <p className="text-3xl font-bold my-4">Flexible</p>

          <ul className="text-gray-400 space-y-2 text-sm">
            <li>✔ Apoyo a comunidad</li>
            <li>✔ Reconocimiento</li>
          </ul>

          <button className="mt-6 border border-gray-600 px-6 py-3 rounded-xl w-full hover:bg-gray-800">
            Apoyar
          </button>
        </div>

      </div>

      {/* URGENCIA */}
      <div className="mt-20 bg-orange-500/10 border border-orange-500/30 p-8 rounded-2xl max-w-3xl mx-auto">

        <h3 className="text-xl font-bold text-orange-400">
          Cupos limitados para sponsors
        </h3>

        <p className="text-gray-400 mt-2 text-sm">
          Solo trabajamos con un número reducido de aliados para garantizar visibilidad real.
        </p>

      </div>

      {/* CTA FINAL */}
      <div className="mt-16">
        <button className="bg-orange-500 px-10 py-4 rounded-xl text-black text-lg font-semibold hover:scale-105 transition">
          Convertirme en sponsor
        </button>

        <p className="text-gray-500 text-sm mt-3">
          Respuesta en menos de 24h
        </p>
      </div>

    </section>
  );
}