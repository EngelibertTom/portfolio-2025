import Image from "next/image";
import { Project } from "@/types/project";

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
            onClick={onClick}
        >
            {project.image ? (
                <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                />
            ) : project.video ? (
                <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    className="w-full h-48 object-cover"
                />
            ) : null}

            <div className="p-4">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                    {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                        <span
                            key={i}
                            className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
