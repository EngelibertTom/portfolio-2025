'use client'
import {Typewriter} from "react-simple-typewriter";
import {useState} from "react";
import {projects} from "@/data/projects";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import {Project} from "@/types/project";

const Realisations = () => {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="realisations">
        <div className='min-h-screen'>
            <h2 className='text-3xl text-center mb-2' style={{ fontFamily: 'Monaco, monospace', fontSize: '2rem' }}>
                {'<'}
                <Typewriter
                    words={['Realisations']}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                {'/>'}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-[10%] h-fit">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm
                         flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-black"
                            onClick={() => setSelectedProject(null)}
                        >
                            ✖
                        </button>
                        <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                        {selectedProject.video ? (
                            <video
                                src={selectedProject.video}
                                controls
                                className="w-full rounded mb-4"
                            />
                        ) : (
                            <Image
                                src={selectedProject.image as string}
                                alt={selectedProject.title}
                                width={800}
                                height={450}
                                className="w-full rounded mb-4"
                            />
                        )}
                        <p className="mb-4">{selectedProject.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {selectedProject.tech.map((t, i) => (
                                <span key={i} className="bg-gray-200 px-2 py-1 text-xs rounded">
                  {t}
                </span>
                            ))}
                        </div>
                        {selectedProject.link && (
                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Voir le projet
                            </a>
                        )}
                    </div>
                </div>
                )}

        </div>
        </section>
    )
}

export default Realisations;