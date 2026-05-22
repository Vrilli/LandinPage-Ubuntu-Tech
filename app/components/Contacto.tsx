export default function Contact() {
  return (
    <section
      id="contacto"
      className="px-6 py-24 bg-gradient-to-b from-[#07111F] to-black text-white"
    >
      {/* TITULO */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-orange-500 uppercase tracking-[0.3em] text-sm mb-4">
          Contacto
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          ¿Quieres ser parte de
          <span className="text-orange-500"> Ubuntu Tech 2026</span>?
        </h2>

        <p className="text-gray-400 mt-6 text-lg">
          Conecta con nuestra comunidad, aliados, speakers y líderes tecnológicos.
          Escríbenos directamente y hagamos historia juntos.
        </p>
      </div>

      {/* CARD PRINCIPAL */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-gray-900 to-black p-8 md:p-14 shadow-2xl">

          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-orange-500/10 blur-3xl rounded-full" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

            {/* INFO */}
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Hablemos 🚀
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Estamos construyendo uno de los eventos tecnológicos afro más
                importantes del territorio. Si quieres participar, apoyar,
                patrocinar o asistir, contáctanos directamente.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    🌍
                  </div>

                  <p className="text-gray-300">
                    Comunidad tecnológica afrocolombiana
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    🤝
                  </div>

                  <p className="text-gray-300">
                    Networking y alianzas estratégicas
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    🚀
                  </div>

                  <p className="text-gray-300">
                    Speakers, sponsors y líderes tech
                  </p>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-md">

              <h4 className="text-2xl font-bold mb-4">
                Escríbenos en Instagram
              </h4>

              <p className="text-gray-400 mb-8">
                Nuestro equipo responderá lo más pronto posible.
              </p>

              <a
                href="https://www.instagram.com/ubuntu_tech?igsh=ZnJ4Zmh2NDRpanA3"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-orange-500 hover:bg-orange-400 text-black font-bold py-4 rounded-2xl transition duration-300 hover:scale-105 shadow-lg shadow-orange-500/20"
              >
                Contactar ahora
              </a>

              <p className="text-center text-gray-500 text-sm mt-4">
                @ubuntu_tech
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}