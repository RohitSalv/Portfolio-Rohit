import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
    return (
        <section id="about" className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 py-10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full max-w-7xl relative z-10">

                {/* Left Content */}
                <div className="flex flex-col items-start space-y-8 text-left">
                    <span className="text-[#FF6B4E] font-bold tracking-widest uppercase text-sm md:text-base">
                        About Myself
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] leading-tight">
                        Know About Me <br />
                        In Details
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                        I’m Rohit Salve, a Java-focused full-stack developer with hands-on experience in building scalable web applications using Spring Boot and Angular. I enjoy designing clean backend architectures, integrating REST APIs, and building practical frontends that actually work in real projects.
                    </p>

                    {/* Contact Details */}
                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center space-x-4 text-gray-700 font-medium group">
                            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF6B4E] group-hover:bg-[#FF6B4E] group-hover:text-white transition-all duration-300 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <span className="text-lg">Bamni, Maharashtra</span>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-700 font-medium group">
                            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF6B4E] group-hover:bg-[#FF6B4E] group-hover:text-white transition-all duration-300 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <span className="text-lg">+91 9307641755</span>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-700 font-medium group">
                            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF6B4E] group-hover:bg-[#FF6B4E] group-hover:text-white transition-all duration-300 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </div>
                            <span className="text-lg">salver814@gmail.com</span>
                        </div>
                    </div>

                    <Link href="https://www.linkedin.com/in/rohit-salve-6054b324a/" target="_blank" className="bg-gradient-to-r from-[#FF8C61] to-[#FF6B4E] text-white px-10 py-4 rounded-full font-bold text-lg shadow-[0_10px_20px_rgba(255,107,78,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(255,107,78,0.4)] transition-all duration-300 cursor-pointer border-none text-center inline-block">
                        Know More About Me
                    </Link>
                </div>

                {/* Right Content - 3D Character & Elements */}
                <div className="relative flex justify-center items-center h-[500px] md:h-[600px] w-full">

                    {/* Background Glow */}
                    <div className="absolute w-[400px] h-[400px] bg-[#FF8C61]/10 rounded-full blur-3xl -z-10" />

                    {/* Character Image */}
                    <div className="relative z-10">
                        <Image
                            src="/ThumbsUp.png"
                            alt="About Me Avatar"
                            width={500}
                            height={500}
                            className="w-[300px] md:w-[450px] h-auto object-contain drop-shadow-2xl hover:rotate-2 transition-transform duration-300"
                        />
                    </div>

                    {/* Floating Icons */}
                    {/* HTML - Top Left (Far) */}
                    <div className="absolute top-10 left-0 md:-left-10 animate-float blur-[2px]">
                        <Image src="/Icons/html.png" alt="HTML" width={70} height={70} className="w-14 md:w-16 opacity-80" />
                    </div>

                    {/* CSS - Top Right (Far) */}
                    <div className="absolute top-5 right-10 md:right-10 animate-float-delayed blur-[3px]">
                        <Image src="/Icons/css.png" alt="CSS" width={70} height={70} className="w-14 md:w-16 opacity-80" />
                    </div>

                    {/* JS - Mid Right */}
                    <div className="absolute top-1/2 right-0 md:-right-5 animate-float blur-[1px]">
                        <Image src="/Icons/javascript.png" alt="JS" width={70} height={70} className="w-16 md:w-20 opacity-90 rounded-xl shadow-lg" />
                    </div>

                    {/* Decorative Squiggles (SVGs) */}
                    <svg className="absolute bottom-20 left-10 md:left-0 w-12 h-24 animate-bounce duration-[3000ms]" viewBox="0 0 50 100" fill="none">
                        <path d="M25 0 C 10 20, 40 40, 25 60 C 10 80, 40 100, 25 120" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
                    </svg>

                    <svg className="absolute bottom-10 right-10 md:right-20 w-12 h-24 animate-bounce duration-[4000ms]" viewBox="0 0 50 100" fill="none">
                        <path d="M25 0 C 40 20, 10 40, 25 60 C 40 80, 10 100, 25 120" stroke="#EAB308" strokeWidth="4" strokeLinecap="round" />
                    </svg>

                </div>
            </div>
        </section>
    );
}