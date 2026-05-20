import ImageCarousel from "./ImageCarousel";

export default function Hero() {
  const images = [
    "/imagen/equipo.jpeg",
    "/imagen/grupo.jpeg",
    "/imagen/mari.jpeg",
    "/imagen/medellin.jpeg",
  ];

  return (
    <section className="px-6 py-20 md:py-40 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-5xl font-bold leading-tight">
          Tecnología, Comunidad y Propósito.
          <p className="text-orange-500"> Ubuntu Tech<span className="text-base"> (Soy porque somos!)</span></p>
        </h2>
        <div className="mt-6 flex gap-4">
          <a
            href="https://www.instagram.com/ubuntu_tech?igsh=ZnJ4Zmh2NDRpanA3"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 px-6 py-3 rounded-xl hover:border-orange-500 hover:text-orange-500 transition"
          >
            Conoce más
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-500/30 to-black h-80 rounded-2xl flex items-center justify-center">
        <ImageCarousel images={images} />
      </div>
    </section>
  );
}