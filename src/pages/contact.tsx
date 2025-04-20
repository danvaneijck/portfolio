// src/pages/Contact.tsx
import React from "react"
import { FaEnvelope, FaDiscord, FaTelegramPlane } from "react-icons/fa"

const Contact: React.FC = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-[#092327] to-[#4E8098] p-4">
            <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
            <p className="text-gray-300  text-center my-2">
                Feel free to reach out via email, Discord, or Telegram!
            </p>
            <div className="flex items-center justify-center space-x-8 text-4xl">
                {/* Email */}
                <a
                    href="mailto:dan.ve16587@gmail.com"
                    aria-label="Email"
                    className="text-gray-300 hover:text-white transition-colors"
                >
                    <FaEnvelope />
                </a>

                {/* Discord */}
                <a
                    href="https://discord.com/users/trippykiwi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Discord"
                    className="text-gray-300 hover:text-white transition-colors"
                >
                    <FaDiscord />
                </a>

                {/* Telegram */}
                <a
                    href="https://t.me/trippykiwi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="text-gray-300 hover:text-white transition-colors"
                >
                    <FaTelegramPlane />
                </a>
            </div>

        </div>
    )
}

export default Contact
