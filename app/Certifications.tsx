import Image from "next/image";

interface Certification {
    title: string;
    issuer: string;
    date: string;
    icon: string; // URL or placeholder
}

interface Achievement {
    title: string;
    description: string;
    icon: string;
}

const certifications: Certification[] = [
    {
        title: "Full Stack Developer Training",
        issuer: "The Kiran Academy",
        date: "Mar 2025 – July 2025",
        icon: "/Icons/java.png",
    },
    {
        title: "Virtual Internship (Java + Angular)",
        issuer: "Infosys Springboard",
        date: "Ongoing",
        icon: "/Icons/angularjs.png",
    },
];

const achievements: Achievement[] = [
    {
        title: "Top Team - Odoo Hackathon 2025",
        description: "Selected as a Top Team and qualified for the offline round. Project showcased in both virtual and final rounds (GitHub).",
        icon: "/Icons/git.webp",
    },
    {
        title: "HackerRank 5-Star Coder",
        description: "Achieved 5-star rating in Java and 2-star rating in SQL on HackerRank.",
        icon: "/Icons/mysql.png",
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="w-full py-10 px-6 md:px-16 flex flex-col items-center">

            <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">

                {/* Certifications Column */}
                <div className="flex-1 bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-orange-50 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full opacity-50 z-0"></div>
                    <div className="relative z-10">
                        <span className="text-[#FF6B4E] font-bold tracking-widest uppercase text-sm">
                            Learning Journey
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mt-2 mb-8">
                            Certifications
                        </h2>

                        <div className="space-y-6">
                            {certifications.map((cert, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-orange-50/50 transition-colors duration-200">
                                    <div className="w-16 h-16 flex-shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                                        <Image src={cert.icon} alt={cert.title} width={40} height={40} className="object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800">{cert.title}</h3>
                                        <p className="text-gray-500 text-sm font-medium">{cert.issuer} • {cert.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Achievements Column */}
                <div className="flex-1 bg-[#FFECE5] rounded-[3rem] p-8 md:p-12 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-full opacity-50 z-0"></div>
                    <div className="relative z-10">
                        <span className="text-[#FF6B4E] font-bold tracking-widest uppercase text-sm">
                            Milestones
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mt-2 mb-8">
                            Achievements
                        </h2>

                        <div className="space-y-6">
                            {achievements.map((ach, index) => (
                                <div key={index} className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/50 hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{ach.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {ach.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
