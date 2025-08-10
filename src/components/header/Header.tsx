"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
    const [activeSection, setActiveSection] = useState<string>("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            let currentSection = "";

            setIsScrolled(window.scrollY > 50);

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section.id;
                }
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const links = [
        { id: "about", label: "À propos" },
        { id: "skills", label: "Compétences" },
        { id: "timeline", label: "Parcours" },
        { id: "realisations", label: "Réalisations" },
    ];

    return (
        <div className={`text-black fixed w-full z-[999] transition-all duration-300 ${
            isScrolled || isMenuOpen ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}>

            <div className="flex items-center justify-between p-4">
                <span className="font-semibold text-lg">Tom Engélibert</span>

                <ul className="hidden md:flex items-center gap-6 text-secondary">
                    {links.map((link) => (
                        <li key={link.id}>
                            <Link
                                href={`#${link.id}`}
                                className={
                                    activeSection === link.id
                                        ? "text-black-500 font-bold"
                                        : "hover:text-black-400"
                                }
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                        isMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                        isMenuOpen ? 'opacity-0' : ''
                    }`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                        isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}></span>
                </button>
            </div>

            <div className={`md:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`} style={{ top: '63px' }}>
                <ul className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
                    {links.map((link) => (
                        <li key={link.id}>
                            <Link
                                href={`#${link.id}`}
                                onClick={handleLinkClick}
                                className={
                                    activeSection === link.id
                                        ? "text-black font-bold border-b-4 border-black pb-2"
                                        : "text-gray-600 hover:text-black transition-colors duration-200"
                                }
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                    Fermer
                </button>
            </div>

        </div>
    );
};

export default Header;