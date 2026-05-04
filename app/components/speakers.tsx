"use client";

import Image from "next/image";

// 2026 speakers
const speakers = [
    {
        name: "Libia Valencia",
        role: "Frontend Developer",
        bio: "Construyendo experiencias digitales con impacto social.",
        image: "/imagen/libia.jpeg",
    },
    {
        name: "Speaker 2",
        role: "Backend Dev",
        bio: "Arquitecturas escalables para el futuro.",
        image: "/imagen/speaker2.jpg",
    },
    {
        name: "Speaker 3",
        role: "UX Designer",
        bio: "Diseño centrado en personas.",
        image: "/imagen/speaker3.jpg",
    },
    {
        name: "Speaker 4",
        role: "Data Analyst",
        bio: "Datos que transforman decisiones.",
        image: "/imagen/speaker4.jpg",
    },
    {
        name: "Speaker 5",
        role: "QA Engineer",
        bio: "Calidad desde el código.",
        image: "/imagen/speaker5.jpg",
    },
    {
        name: "Speaker 6",
        role: "DevOps",
        bio: "Automatización y escalabilidad.",
        image: "/imagen/speaker6.jpg",
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
            <section id="speakers" className="px-6 py-24 bg-[#07111F]">

                {/* Título */}
                <h2 className="text-center text-4xl md:text-3xl font-bold text-orange-500 tracking-[0.3em] mb-16">
                    SPEAKERS 2026
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                    {speakers.map((speaker, i) => (
                        <div
                            key={i}
                            className="relative group rounded-2xl overflow-hidden cursor-pointer bg-gray-900"
                        >

                            {/* Imagen */}
                            <div className="relative h-[200px] md:h-[240px]">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-cover object-top group-hover:scale-110 transition duration-700"
                                />

                                {/* Overlay oscuro */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />
                            </div>

                            {/* Info */}
                            <div className="p-4 text-white">
                                <h3 className="font-semibold text-lg">
                                    {speaker.name}
                                </h3>

                                <p className="text-orange-500 text-sm">
                                    {speaker.role}
                                </p>

                                <p className="text-gray-400 text-sm mt-2">
                                    {speaker.bio}
                                </p>
                            </div>

                            {/* Glow borde */}
                            <div className="absolute inset-0 border border-transparent group-hover:border-orange-500 rounded-2xl transition pointer-events-none" />

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