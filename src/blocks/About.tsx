'use client'
import {Typewriter} from "react-simple-typewriter";


const About = () => {
    return (
        <section id="about">
            <h2 className='text-3xl text-center' style={{ fontFamily: 'Monaco, monospace', fontSize: '2rem' }}>
                {'<'}
                <Typewriter
                    words={['APropos']}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                {'/>'}
            </h2>
        <div id="about" className="flex flex-col lg:flex-row items-center justify-between min-h-screen w-full px-4 sm:px-6 lg:px-[10%] py-8 lg:py-0 gap-8 lg:gap-4">
            <div className="rounded-lg p-2 border border-gray-100 w-fit h-fit flex flex-col justify-start items-center flex-shrink-0">
                <div className="flex space-x-1 mb-2 self-start">
                    <span className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <span className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="w-40 h-40 sm:w-60 sm:h-60 rounded-md overflow-hidden">
                    <img
                        src="/assets/images/tom.webp"
                        alt="Tom Engélibert"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="flex-1 lg:max-w-2xl text-sm sm:text-base leading-relaxed text-gray-700">
                Je m&apos;appelle Tom Engélibert, développeur web fullstack junior.
                Passionné par la création d&apos;applications performantes et intuitives, j&apos;ai acquis de solides bases en React, Next.js, TypeScript, Tailwind CSS, ainsi qu&apos;en backend avec Symfony et Laravel.
                Curieux et motivé, j&apos;aime apprendre de nouvelles technologies et relever des défis techniques.
                Je suis à la recherche d&apos;une opportunité au sein d&apos;une équipe dynamique, où je pourrai mettre mes compétences en pratique tout en continuant à progresser.
            </div>

        </div>
            </section>
    );
}

export default About;