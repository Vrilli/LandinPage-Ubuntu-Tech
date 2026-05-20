import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
      <Image src="/imagen/logoUbuntu2026.png" alt="Logo Ubuntu Tech" width={500} height={150} />

      <div className="hidden md:flex gap-6 text-sm">
        <a href="#sobre">Sobre Ubuntu</a>
        <a href="#eventos">Eventos</a>
        <a href="#lideres">Líderes</a>
        <a href="#speakers">Speakers</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#contacto">Contacto</a>
      </div>
      <a
        href="https://www.instagram.com/ubuntu_tech?igsh=ZnJ4Zmh2NDRpanA3"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 px-4 py-2 rounded-xl text-black font-semibold hover:scale-105 transition inline-block"
      >
        Únete
      </a>
    </nav>
  );
}