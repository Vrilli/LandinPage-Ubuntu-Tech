import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-800">

      {/* Logo */}
      <div className="relative w-[170px] md:w-[260px] lg:w-[380px] h-[55px] md:h-[85px]">
        <Image
          src="/imagen/logoUbuntu2026.png"
          alt="Logo Ubuntu Tech"
          fill
          priority
          sizes="(max-width: 768px) 170px, (max-width: 1024px) 260px, 380px"
          className="object-contain object-left drop-shadow-[0_0_12px_rgba(249,115,22,0.35)]"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 text-sm text-white">
        <a href="#sobre" className="hover:text-orange-500 transition">
          Sobre Ubuntu
        </a>

        <a href="#eventos" className="hover:text-orange-500 transition">
          Eventos
        </a>

        <a href="#lideres" className="hover:text-orange-500 transition">
          Líderes
        </a>

        <a href="#speakers" className="hover:text-orange-500 transition">
          Speakers
        </a>

        <a href="#sponsors" className="hover:text-orange-500 transition">
          Sponsors
        </a>

        <a href="#contacto" className="hover:text-orange-500 transition">
          Contacto
        </a>
      </div>

      {/* CTA */}
      <a
        href="https://www.instagram.com/ubuntu_tech?igsh=ZnJ4Zmh2NDRpanA3"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 px-3 md:px-4 py-2 rounded-xl text-black text-sm md:text-base font-semibold hover:scale-105 transition whitespace-nowrap"
      >
        Únete
      </a>

    </nav>
  );
}