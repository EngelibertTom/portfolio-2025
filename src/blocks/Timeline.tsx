'use client'
import ExperienceTimeline from "@/components/Timeline";
import {Typewriter} from "react-simple-typewriter";


const Timeline = () => {

    return (
        <section id="timeline" className={'min-h-screen'}>
            <h2 className='text-3xl text-center' style={{ fontFamily: 'Monaco, monospace', fontSize: '2rem' }}>
                {'<'}
                <Typewriter
                    words={['Parcours']}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                {'/>'}
            </h2>
            <ExperienceTimeline/>
        </section>
    )
}

export default Timeline;