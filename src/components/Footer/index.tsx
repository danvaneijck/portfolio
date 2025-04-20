import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const [year] = useState<number>(new Date().getFullYear());

    const links = [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Projects", to: "/projects" },
        { label: "Contact", to: "/contact" },
    ]

    return (
        <footer className="w-full bg-[#092327] text-gray-300 py-8 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                {/* Quick Links */}
                <nav className="flex space-x-4">
                    {links.map(({ label, to }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === "/"}
                            className={({ isActive }) =>
                                `transition-colors ${isActive
                                    ? "text-white"   // active link
                                    : "text-gray-400 hover:text-white" // inactive link
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                {/* Social Icons */}
                <div className="flex space-x-4 text-xl">
                    <a
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://twitter.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <FaTwitter />
                    </a>
                </div>

                {/* Contact */}
                <div>
                    <a
                        href="mailto:dan@example.com"
                        className="hover:text-white transition-colors"
                    >
                        dan.ve16587&#64;gmail.com
                    </a>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-700 my-6" />

            {/* Bottom Row */}
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
                <div>© Daniel Van Eijck {year}</div>
                <div className="mt-2 md:mt-0">
                    Built with <span className="font-semibold">React</span> &amp;{" "}
                    <span className="font-semibold">Tailwind CSS</span>
                </div>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="hover:text-white transition-colors"
                >
                    ↑ Back to top
                </button>
            </div>
        </footer>
    );
};

export default Footer;
