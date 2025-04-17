import { useState } from "react";

type TechItem = { name: string; logo: string; description: string }

// Replace with your actual data source
const TECHS: TechItem[] = [
    { name: 'JavaScript', logo: '/logos/js.png', description: 'JS description...' },
    { name: 'TypeScript', logo: '/logos/ts.png', description: 'TS description...' },
    { name: 'React', logo: '/logos/react.png', description: 'React description...' },
    { name: 'Django', logo: '/logos/django.png', description: 'Django description...' },
    { name: 'GraphQL', logo: '/logos/graphql.png', description: 'GraphQL description...' },
    { name: 'Tailwind', logo: '/logos/tailwind.png', description: 'Tailwind description...' },
    { name: 'Python', logo: '/logos/python.png', description: 'Python description...' },
    { name: 'Node.js', logo: '/logos/node.png', description: 'Node.js description...' },
]

export default function TechMarquee() {
    // Duplicate list for seamless loop
    const items = [...TECHS, ...TECHS]
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
                        <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-2 drop-shadow" />
                        <span className="text-sm font-semibold text-gray-800">{tech.name}</span>
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
