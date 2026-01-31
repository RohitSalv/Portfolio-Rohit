import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[calc(100vh-100px)] flex items-center justify-center overflow-hidden px-6 md:px-12">
            {/* Floating Icons (Randomized Positions with Blur) */}

            {/* Top Left - TypeScript */}
            <div className="absolute top-[8%] left-[5%] animate-float blur-[1px]">
                <Image src="/Icons/typescript.webp" alt="TypeScript" width={80} height={80} className="w-12 md:w-16 rotate-12 opacity-80" />
            </div>

            {/* Bottom Left - MySQL */}
            <div className="absolute bottom-[15%] left-[8%] animate-float-delayed blur-[2px]">
                <Image src="/Icons/mysql.png" alt="MySQL" width={80} height={80} className="w-16 md:w-20 -rotate-6 opacity-70" />
            </div>

            {/* Top Right - CSS */}
            <div className="absolute top-[12%] right-[8%] animate-float-delayed blur-[1.5px]">
                <Image src="/Icons/css.png" alt="CSS" width={80} height={80} className="w-14 md:w-18 rotate-12 opacity-85" />
            </div>

            {/* Bottom Right - HTML */}
            <div className="absolute bottom-[12%] right-[5%] animate-float blur-[1px]">
                <Image src="/Icons/html.png" alt="HTML" width={80} height={80} className="w-16 md:w-20 -rotate-12 opacity-90" />
            </div>

            {/* Mid Left (High) - Git */}
            <div className="absolute top-[25%] left-[15%] animate-float blur-[0.5px]">
                <Image src="/Icons/git.webp" alt="Git" width={80} height={80} className="w-12 md:w-14 -rotate-12 opacity-90" />
            </div>

            {/* Mid Right (Low) - Angular */}
            <div className="absolute top-[60%] right-[15%] animate-float-delayed blur-[0.5px]">
                <Image src="/Icons/angularjs.png" alt="Angular" width={80} height={80} className="w-12 md:w-16 rotate-6 opacity-90" />
            </div>

            {/* Top Center (Leftish) - Java */}
            <div className="absolute top-[5%] left-[30%] animate-float-delayed blur-[2px]">
                <Image src="/Icons/java.png" alt="Java" width={80} height={80} className="w-10 md:w-14 rotate-45 opacity-60" />
            </div>

            {/* Bottom Center (Rightish) - JavaScript */}
            <div className="absolute bottom-[25%] right-[25%] animate-float blur-[1.5px]">
                <Image src="/Icons/javascript.png" alt="JavaScript" width={80} height={80} className="w-14 md:w-18 -rotate-6 opacity-80" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-7xl items-center relative z-10">
                {/* Left Content */}
                <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left pt-10 md:pt-0">
                    <div className="self-center md:self-start mb-2">
                        <Image
                            src="/Icons/hand-wave.webp"
                            alt="Waving Hand"
                            width={60}
                            height={60}
                            className="w-12 md:w-16 animate-wave"
                        />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#1a1a1a] leading-tight">
                        Hii, it's me <br />
                        Rohit.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
                        Java Developer, Full Stack Engineer.<br />
                        I transform complex problems into scalable, efficient solutions. With a passion for clean code and modern technologies, I build applications that not only work but create impact.

                    </p>
                    <button className="bg-gradient-to-r from-[#FF8C61] to-[#FF6B4E] text-white px-10 py-4 rounded-full font-bold text-lg shadow-[0_10px_20px_rgba(255,107,78,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(255,107,78,0.4)] transition-all duration-300 cursor-pointer border-none self-center md:self-auto">
                        Contact Me
                    </button>
                </div>

                {/* Right Content - Avatar Image */}
                <div className="flex justify-center items-center relative gap-4">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-orange-100 blur-3xl opacity-50 animate-pulse z-0 scale-110"></div>

                    <div className="relative z-20">
                        <Image
                            src="/hero-avatar.png"
                            alt="3D Avatar"
                            width={500}
                            height={500}
                            className="w-[300px] md:w-[500px] h-auto object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}