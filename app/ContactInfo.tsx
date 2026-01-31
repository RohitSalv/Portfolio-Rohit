import Image from "next/image";
import Link from "next/link";

export default function ContactInfo() {
    return (
        <section id="contact" className="w-full min-h-[500px] flex items-center justify-center py-10 px-6 md:px-16 overflow-hidden">
            <div className="bg-[#FFECE5] rounded-[3rem] w-full max-w-7xl relative flex flex-col md:flex-row items-center justify-between p-8 md:p-16 shadow-sm overflow-visible">

                {/* Decorative Floating Icons (Outside/Overlapping the card) */}
                <div className="absolute -top-10 -left-10 md:left-10 animate-float blur-[1px] z-20">
                    <Image src="/Icons/java.png" alt="Java" width={80} height={80} className="w-16 md:w-20 rotate-12 opacity-90" />
                </div>
                <div className="absolute top-1/2 -right-5 md:right-10 animate-float-delayed blur-[1.5px] z-20">
                    <Image src="/Icons/mysql.png" alt="MySQL" width={80} height={80} className="w-16 md:w-20 -rotate-12 opacity-80" />
                </div>

                {/* Left Content */}
                <div className="flex flex-col items-start space-y-8 max-w-xl z-20 md:pr-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] uppercase tracking-tight">
                        Contact Info
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Interested in working together or just want to say hi?
                        <br />
                        Feel free to reach out for collaborations, projects, or even just a friendly hello — I’d love to connect!
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 mt-4 w-full md:w-auto">
                        {/* Primary Contact Button */}
                        <a
                            href="mailto:salver814@gmail.com"
                            className="bg-gradient-to-r from-[#FF8C61] to-[#FF6B4E] text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_10px_20px_rgba(255,107,78,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(255,107,78,0.4)] transition-all duration-300 text-center"
                        >
                            Contact Me Now
                        </a>
                    </div>


                    {/* Social Links */}
                    <div className="flex items-center gap-6 mt-4">
                        <Link href="https://www.linkedin.com/in/rohit-salve-6054b324a/" target="_blank" className="hover:-translate-y-1 transition-transform duration-300">
                            <Image src="/Icons/linkedin.webp" alt="LinkedIn" width={60} height={60} className="rounded-xl shadow-lg hover:shadow-xl" />
                        </Link>
                        <Link href="https://github.com/RohitSalv" target="_blank" className="hover:-translate-y-1 transition-transform duration-300">
                            <Image src="/Icons/github1.png" alt="GitHub" width={60} height={60} className="rounded-xl shadow-lg hover:shadow-xl" />
                        </Link>
                    </div>
                </div>

                {/* Right Content - Person & Decor */}
                <div className="relative mt-16 md:mt-0 flex justify-center items-center">

                    {/* Person Image */}
                    <div className="relative z-10">
                        <Image
                            src="/Call.png"
                            alt="Contact Me Avatar"
                            width={500}
                            height={500}
                            className="w-[300px] md:w-[400px] h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Decorative Elements around Person */}
                    <div className="absolute top-0 right-0 animate-float blur-[0.5px]">
                        <Image src="/Icons/html.png" alt="HTML" width={60} height={60} className="w-12 md:w-14 rotate-12 opacity-80" />
                    </div>
                    <div className="absolute bottom-10 left-0 animate-float-delayed blur-[1px]">
                        <Image src="/Icons/css.png" alt="CSS" width={60} height={60} className="w-12 md:w-14 -rotate-12 opacity-80" />
                    </div>

                    {/* Lines */}
                    <div className="absolute top-1/2 -left-10 w-16 h-2 bg-[#2a2a2a] rounded-full rotate-[-30deg]" />
                    <div className="absolute top-1/2 -left-10 mt-8 w-10 h-2 bg-[#2a2a2a] rounded-full rotate-[-30deg]" />
                </div>

            </div>
        </section>
    );
}