import Image from "next/image";

interface Skill {
    name: string;
    icon: string;
    description: string;
}

const skills: Skill[] = [
    {
        name: "JAVA",
        icon: "/Icons/java.png",
        description: "Building robust and scalable backend systems with solid object-oriented principles.",
    },
    {
        name: "SPRING BOOT",
        icon: "/Icons/springboot.png",
        description: "Creating production-ready microservices and RESTful APIs with ease.",
    },
    {
        name: "ANGULAR",
        icon: "/Icons/angularjs.png",
        description: "Developing dynamic single-page applications with a component-based architecture.",
    },
    {
        name: "TYPESCRIPT",
        icon: "/Icons/typescript.webp",
        description: "Writing type-safe, maintainable code for large-scale JavaScript applications.",
    },
    {
        name: "JAVASCRIPT",
        icon: "/Icons/javascript.png",
        description: "Crafting interactive user experiences and dynamic functionality for the web.",
    },
    {
        name: "MYSQL",
        icon: "/Icons/mysql.png",
        description: "Designing efficient relational database schemas and optimizing queries.",
    },
    {
        name: "HTML5",
        icon: "/Icons/html.png",
        description: "Structuring modern web content with semantic and accessible markup.",
    },
    {
        name: "CSS3",
        icon: "/Icons/css.png",
        description: "Styling responsive layouts with modern animations and flexible designs.",
    },
    {
        name: "GIT",
        icon: "/Icons/git.webp",
        description: "Collaborating efficiently with version control and managing code repositories.",
    },
];

export default function MySkills() {
    return (
        <section id="skills" className="w-full py-10 px-6 md:px-16 flex flex-col items-center">

            <div className="bg-[#FFECE5] rounded-[3rem] w-full max-w-7xl flex flex-col items-center py-16 px-8 md:px-16 shadow-sm relative overflow-hidden">

                {/* Decorative Background Blur */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF8C61]/5 rounded-full blur-3xl pointer-events-none" />

                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <span className="text-[#FF6B4E] font-bold tracking-widest uppercase text-sm md:text-base">
                        Skills I Have:
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mt-2 uppercase tracking-wide">
                        My Skills
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full relative z-10">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(255,107,78,0.15)] transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100/50"
                        >
                            {/* Icon Container */}
                            <div className="w-24 h-24 mb-6 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                {/* Adding a subtle glow behind the icon */}
                                <div className="absolute inset-0 bg-orange-100 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    width={100}
                                    height={100}
                                    className="object-contain drop-shadow-md relative z-10"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-extrabold text-[#2a2a2a] mb-4 uppercase tracking-tight">
                                {skill.name}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}