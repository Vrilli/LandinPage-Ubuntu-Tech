"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Mostrar botón después de bajar 300px
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="
            fixed bottom-6 right-6 z-50
            bg-orange-500 hover:bg-orange-400
            text-black
            w-14 h-14
            rounded-full
            shadow-lg shadow-orange-500/30
            flex items-center justify-center
            transition-all duration-300
            hover:scale-110
            animate-bounce
          "
                >
                    ↑
                </button>
            )}
        </>
    );
}