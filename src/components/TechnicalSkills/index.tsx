
const TechnicalSkills = () => {
    const skills = [
        { name: "DevOps", points: ["CI/CD", "Docker", "Monitoring & Logging", "Infrastructure as Code"] },
        { name: "Backend systems", points: ["API Development", "PostgresSQL Database Management", "Microservices Architecture", "Django"] },
        { name: "Web apps", points: ["SPA Development", "React & Next.js", "Performance Optimization"] },
        { name: "Mobile Apps", points: ["iOS & Android", "Cross-platform with React Native / Expo", "UI/UX Best Practices"] },
        { name: "IoT", points: ["Device to Cloud Communication", "Data Ingestion", "Device Management"] },
        { name: "Web3 blockchain", points: ["Sniper Bots", "Token Deployment", "Ethereum", "Solana", "CosmWasm"] }
    ];

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {skills.map(skill => (
                    <div key={skill.name} className="p-4 shadow-lg rounded">
                        <h3 className="text-3xl font-semibold mb-2">{skill.name}</h3>
                        <ul className="list-disc list-inside text-sm space-y-1 text-xl">
                            {skill.points.map(point => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechnicalSkills;
