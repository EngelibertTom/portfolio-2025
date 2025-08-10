'use client'
import {Typewriter} from "react-simple-typewriter";


const HeroBanner = () => {

    return (
        <div className="h-screen w-full bg-pattern flex flex-col items-center justify-center text-center">

            <h1 className='text-3xl' style={{ fontFamily: 'Monaco, monospace', fontSize: '2rem' }}>
                {'<'}
                <Typewriter
                    words={['TomEngelibert']}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                {'/>'}
            </h1>

            <h2>Développeur full stack</h2>

        </div>
    );
}

export default HeroBanner;