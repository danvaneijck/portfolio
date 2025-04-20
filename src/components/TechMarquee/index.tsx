import { useState } from "react";
import js from "../../assets/logos/js.webp"
import python from "../../assets/logos/python.png"
import typescript from "../../assets/logos/typescript.png"
import react from "../../assets/logos/react.webp"
import django from "../../assets/logos/django.png"
import graphql from "../../assets/logos/graphql.png"
import rust from "../../assets/logos/rust.png"

type TechItem = { name: string; logo: string; description: string }

// Replace with your actual data source
const TECHS: TechItem[] = [
    { name: 'JavaScript', logo: js, description: 'JS description...' },
    { name: 'TypeScript', logo: typescript, description: 'TS description...' },
    { name: 'React', logo: react, description: 'React description...' },
    { name: 'Django', logo: django, description: 'Django description...' },
    { name: 'GraphQL', logo: graphql, description: 'GraphQL description...' },
    { name: 'Python', logo: python, description: 'Python description...' },
    { name: 'Rust', logo: rust, description: 'Python description...' },
]

export default function TechMarquee() {
    // Duplicate list for seamless loop
    const items = [...TECHS, ...TECHS, ...TECHS]
    const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null)

    const showTooltip = (e: React.MouseEvent, desc: string) => {
        setTooltip({ text: desc, x: e.clientX, y: e.clientY })
    }
    const hideTooltip = () => setTooltip(null)

    return (
        <div className="relative overflow-hidden group">
            <div className="flex animate-marquee group-hover:animate-paused whitespace-nowrap">
                {items.map((tech, idx) => (
                    <div
                        key={idx}
                        className="inline-block flex-shrink-0 w-32 p-4 mx-2  flex-col items-center cursor-pointer"
                        onMouseEnter={e => showTooltip(e, tech.description)}
                        onMouseMove={e => showTooltip(e, tech.description)}
                        onMouseLeave={hideTooltip}
                        onClick={e => showTooltip(e, tech.description)}
                    >
                        <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-2 drop-shadow rounded-lg mx-auto" />
                        <div className="text-sm font-semibold text-gray-300 text-center">{tech.name}</div>
                    </div>
                ))}
            </div>
            {tooltip && (
                <div
                    className="fixed z-50 max-w-xs p-2 bg-gray-800 text-white text-xs rounded shadow-lg pointer-events-none"
                    style={{ top: tooltip.y + 10, left: tooltip.x + 10 }}
                >
                    {tooltip.text}
                </div>
            )}
        </div>
    )
}
