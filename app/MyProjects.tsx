import Link from "next/link";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    color: string;
}

const projects: Project[] = [
    {
        title: "Pixory",
        description: "AI-Assisted Image Storage & Analysis Platform. Built with Spring Boot and Cloudinary for secure uploads, integrating Google Gemini for automated image analysis.",
        tags: ["Angular", "Spring Boot", "Gemini API", "Cloudinary"],
        color: "from-blue-400/20 to-purple-400/20",
        github: "https://github.com/RohitSalv/pixory-project",
        link: "https://github.com/RohitSalv/pixory-project",
    },
    {
        title: "Unbound",
        description: "Anonymous Community Platform supporting scalable interactions. Features JWT authentication, infinite scroll feeds, and robust role-based access control.",
        tags: ["Spring Boot", "Angular", "MySQL", "JWT"],
        color: "from-emerald-400/20 to-teal-400/20",
        github: "https://github.com/RohitSalv/Unbound",
        link: "https://github.com/RohitSalv/Unbound",
    },
    {
        title: "Sahara",
        description: "AI-Powered Support Platform for domestic violence support. developed by a cross-functional team using FAISS and Python (Flask) for AI integration.",
        tags: ["Angular", "Spring Boot", "Python", "MySQL"],
        color: "from-orange-400/20 to-red-400/20",
        github: "https://github.com/sahara-fullstack-assist",
        link: "https://github.com/sahara-fullstack-assist",
    },
];

export default function MyProjects() {
    return (
        <section id="projects" className="w-full py-10 px-6 md:px-16 flex flex-col items-center">

            {/* Header */}
            <div className="text-center mb-16 relative">
                <span className="text-[#FF6B4E] font-bold tracking-widest uppercase text-sm md:text-base">
                    My Work
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mt-2 uppercase tracking-wide">
                    Featured Projects
                </h2>
                {/* Decorative squiggle */}
                <svg className="absolute -right-12 -top-6 w-10 h-10 animate-bounce text-[#FF6B4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 border border-white/50"
                    >
                        {/* Project Preview (Placeholder Gradient) */}
                        <div className={`h-48 w-full bg-gradient-to-br ${project.color} relative flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                            <h3 className="text-3xl font-extrabold text-gray-800/20 uppercase tracking-widest select-none transform -rotate-12">
                                {project.title.split(" ")[0]}
                            </h3>
                            {/* 3D Icon Overlay (Simulated) */}
                            <div className="absolute w-16 h-16 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center">
                                <span className="text-2xl">🚀</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col h-[calc(100%-12rem)]">
                            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#FF6B4E] transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 mt-auto">
                                <Link href={project.github || "#"} target="_blank" className="flex-1 text-center py-3 rounded-full border-2 border-gray-100 text-gray-700 font-bold text-sm hover:border-gray-200 hover:bg-gray-50 transition-all">
                                    Details
                                </Link>
                                <Link href={project.link || "#"} target="_blank" className="flex-1 text-center py-3 rounded-full bg-[#1a1a1a] text-white font-bold text-sm shadow-lg hover:bg-[#FF6B4E] hover:shadow-orange-200 transition-all">
                                    Live Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
