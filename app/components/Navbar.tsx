import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-800">

      {/* Logo */}
      <div className="relative w-[140px] md:w-[220px] lg:w-[260px] h-[50px] md:h-[70px]">
        <Image
          src="/imagen/logoUbuntu2026.png"
          alt="Logo Ubuntu Tech"
          fill
          priority
          sizes="(max-width: 768px) 140px, 220px"
          className="object-contain object-left"
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