// src/components/NavBar.tsx
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const links = [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Projects", to: "/projects" },
        { label: "Contact", to: "/contact" },
    ]

    return (
        <div className="fixed w-full bg-[#092327] z-50">
            <div className="m-4 flex items-center justify-between font-bebas" >
                {/* Logo */}
                <span className="text-3xl md:text-6xl text-white">DVE</span>

                {/* Desktop nav */}
                <nav className="hidden md:flex space-x-6 text-2xl">
                    {links.map(({ label, to }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === "/"}
                            className={({ isActive }) =>
                                `transition-colors ${isActive
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(true)}
                >
                    <FaBars />
                </button>
            </div>

            {/* Overlay when menu is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Slide‑out menu */}
            <div

                className={`fixed top-0 left-0 h-full w-64 bg-[#092327] z-50 transform  font-bebas
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out`}
            >
                <div className="m-4 flex items-center justify-between">
                    <span className="text-3xl text-white">DVE</span>
                    <button
                        className="text-white text-2xl"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaTimes />
                    </button>
                </div>

                <nav className="flex flex-col space-y-6 mt-8 ml-4 text-2xl">
                    {links.map(({ label, to }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === "/"}
                            className={({ isActive }) =>
                                `transition-colors ${isActive
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                                }`
                            }
                            onClick={() => setIsOpen(false)} // close menu on link click
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default NavBar
