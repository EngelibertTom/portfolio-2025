'use client';

import { useEffect, useRef, useState } from 'react';
import { FaReact, FaSymfony, FaGitAlt, FaPhp } from 'react-icons/fa';
import {
    SiNextdotjs, SiTailwindcss, SiFigma,
    SiPrisma, SiPostgresql, SiLaravel, SiTypescript, SiBootstrap
} from 'react-icons/si';


const skills = [
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Symfony", icon: <FaSymfony className="text-gray-700" /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-[#712cf9]" /> },
    { name: "API REST", icon: <span className="text-sm">🔗</span> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
];

const SkillsCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isUserScrolling, setIsUserScrolling] = useState(false);
    const animationRef = useRef<number | null>(null);
    const userScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);


    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollSpeed = 0.5;
        let lastTimestamp = 0;

        const animate = (timestamp: number) => {
            if (!scrollContainer || isPaused || isUserScrolling) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            if (timestamp - lastTimestamp >= 16) {
                scrollContainer.scrollLeft += scrollSpeed;

                const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                if (scrollContainer.scrollLeft >= maxScroll / 2) {
                    scrollContainer.scrollLeft = 0;
                }

                lastTimestamp = timestamp;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isPaused, isUserScrolling]);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const handleScroll = () => {
            setIsUserScrolling(true);

            if (userScrollTimeoutRef.current) {
                clearTimeout(userScrollTimeoutRef.current);
            }

            userScrollTimeoutRef.current = setTimeout(() => {
                setIsUserScrolling(false);
            }, 2000);
        };

        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                scrollContainer.scrollLeft += e.deltaY;
                handleScroll();
            }
        };

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        const handleMouseDown = (e: MouseEvent) => {
            isDown = true;
            scrollContainer.style.cursor = 'grabbing';
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
            setIsUserScrolling(true);
        };

        const handleMouseUp = () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
            handleScroll();
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2;
            scrollContainer.scrollLeft = scrollLeft - walk;
        };

        // Touch events pour mobile
        const handleTouchStart = (e: TouchEvent) => {
            startX = e.touches[0].pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
            setIsUserScrolling(true);
        };

        const handleTouchMove = (e: TouchEvent) => {
            const x = e.touches[0].pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2;
            scrollContainer.scrollLeft = scrollLeft - walk;
        };

        scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
        scrollContainer.addEventListener('scroll', handleScroll);
        scrollContainer.addEventListener('mousedown', handleMouseDown);
        scrollContainer.addEventListener('mouseup', handleMouseUp);
        scrollContainer.addEventListener('mousemove', handleMouseMove);
        scrollContainer.addEventListener('mouseleave', handleMouseUp);
        scrollContainer.addEventListener('touchstart', handleTouchStart);
        scrollContainer.addEventListener('touchmove', handleTouchMove);
        scrollContainer.addEventListener('touchend', handleScroll);

        return () => {
            if (userScrollTimeoutRef.current) {
                clearTimeout(userScrollTimeoutRef.current);
            }
            scrollContainer.removeEventListener('wheel', handleWheel);
            scrollContainer.removeEventListener('scroll', handleScroll);
            scrollContainer.removeEventListener('mousedown', handleMouseDown);
            scrollContainer.removeEventListener('mouseup', handleMouseUp);
            scrollContainer.removeEventListener('mousemove', handleMouseMove);
            scrollContainer.removeEventListener('mouseleave', handleMouseUp);
            scrollContainer.removeEventListener('touchstart', handleTouchStart);
            scrollContainer.removeEventListener('touchmove', handleTouchMove);
            scrollContainer.removeEventListener('touchend', handleScroll);
        };
    }, []);

    return (
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide w-full max-w-6xl relative cursor-grab select-none"
                style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {[...skills, ...skills, ...skills].map((skill, index) => (
                    <div
                        key={index}
                        className="min-w-[160px] h-40 flex flex-col items-center justify-center border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 shrink-0"
                        style={{ pointerEvents: 'none' }}
                    >
                        <div className="text-5xl mb-3">{skill.icon}</div>
                        <div className="text-sm font-medium text-center whitespace-nowrap">{skill.name}</div>
                    </div>
                ))}
            </div>
    );
};

export default SkillsCarousel;