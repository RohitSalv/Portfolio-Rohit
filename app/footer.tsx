import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full pt-10 pb-8 px-6 md:px-16 bg-transparent">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                {/* Column 1: Brand & Subscribe */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-extrabold text-[#1a1a1a] uppercase tracking-wider">ROHIT</h2>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                        "Not just fixing bugs, I also debug life — future full stack dev, building things that matter!"
                    </p>
                    <div className="flex items-center bg-white rounded-full p-1 shadow-md max-w-sm">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-1 bg-transparent border-none outline-none px-4 text-sm text-gray-600 placeholder-gray-400"
                        />
                        <button className="bg-gradient-to-r from-[#FF8C61] to-[#FF6B4E] text-white px-6 py-2 rounded-full font-bold text-sm shadow-[0_4px_10px_rgba(255,107,78,0.3)] hover:shadow-[0_8px_20px_rgba(255,107,78,0.4)] transition-all cursor-pointer">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Column 2: Address */}
                <div className="space-y-6 md:pl-10">
                    <h3 className="text-xl font-bold text-[#2a2a2a]">Address</h3>
                    <div className="space-y-3 text-gray-500 text-sm font-medium">
                        <p>+91 9307641755</p>
                        <p>salver814@gmail.com</p>
                        <p>Bamni, Maharashtra</p>
                    </div>
                </div>

                {/* Column 3: Links */}
                <div className="space-y-6 md:pl-10">
                    <h3 className="text-xl font-bold text-[#2a2a2a]">Links</h3>
                    <nav className="flex flex-col space-y-3 text-gray-500 text-sm font-medium">
                        <Link href="#about" className="hover:text-[#FF6B4E] transition-colors">About Me</Link>
                        <Link href="#skills" className="hover:text-[#FF6B4E] transition-colors">My Skills</Link>
                        <Link href="#projects" className="hover:text-[#FF6B4E] transition-colors">My Projects</Link>
                        <Link href="#contact" className="hover:text-[#FF6B4E] transition-colors">Contact Info</Link>
                    </nav>
                </div>
            </div>

            <div className="border-t border-gray-200/50 pt-8 text-center">
                <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">
                    MADE WITH ❤️ BY ROHIT SALVE
                </p>
            </div>
        </footer>
    );
}