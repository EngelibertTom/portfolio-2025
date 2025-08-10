'use client'
import SkillsCarousel from "@/components/SkillsCarousel";
import {Typewriter} from "react-simple-typewriter";

const Skills = () => {
    return (
        <section id="skills" className='min-h-screen flex flex-col'>
            <div className="pt-16 pb-8 flex-shrink-0">
                <h2 className='text-3xl text-center' style={{ fontFamily: 'Monaco, monospace', fontSize: '2rem' }}>
                    {'<'}
                    <Typewriter
                        words={['Competences']}
                        loop={1}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    {'/>'}
                </h2>
            </div>

            <div className="flex-1 flex items-center justify-center px-4">
                <SkillsCarousel/>
            </div>
        </section>
    );
};

export default Skills;