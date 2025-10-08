import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import js from "../../assets/logos/js.webp";
import python from "../../assets/logos/python.png";
import typescript from "../../assets/logos/typescript.png";
import react from "../../assets/logos/react.webp";
import django from "../../assets/logos/django.png";
import graphql from "../../assets/logos/graphql.png";
import rust from "../../assets/logos/rust.png";
import aws from "../../assets/logos/aws.png";
import docker from "../../assets/logos/docker.png";
import { createPortal } from "react-dom";

type TechItem = { name: string; logo: string; description: string };

const TECHS: TechItem[] = [
    { name: 'JavaScript', logo: js, description: 'Competent in writing scripts to accelerate productivity for internal uses cases.' },
    { name: 'TypeScript', logo: typescript, description: 'Using typed Javascript in React and React Native projects to reduce run time errors such as null pointers.' },
    { name: 'React + React Native', logo: react, description: 'Developed multiple Web and Mobile applications with the help of Expo and EAS. One code base deployable to all of Web, Android and IOS environments. Experience developing 5+ different user facing applications. ' },
    { name: 'Django', logo: django, description: '5+ years of designing database schemas with Django + Postgres SQL. Experienced with debugging and optimizing database inefficiencies. Experience with writing and managing complex and custom database migrations.' },
    { name: 'GraphQL', logo: graphql, description: "Designed and implemented GraphQL api's utilizing the Hasura framework. Multiple user roles with different permissions and JWT authentication. " },
    { name: 'Python', logo: python, description: 'Experience with writing business logic to perform data processing on large datasets. IoT device data ingestion and processing. Use of Pandas and Numpy with Celery to perform complex analysis of large datasets in real time and on time schedules.' },
    { name: 'Rust', logo: rust, description: 'Self taught Rust programming for smart contract development on CosmWasm based blockchains. Developed several original smart contracts and deployed to the Injective Blockchain. Contracts include: DEX aggregation contracts, staking contracts and auto compounding vaults.' },
    { name: 'AWS', logo: aws, description: "Experience with Infrastructure deployment and maintenance in AWS. RDS for database, EC2 for hosting backend systems, Route53 + loadbalancer to expose API's. Amplify for hosting web applications." },
    { name: 'Docker', logo: docker, description: "Wrapping backend applications in Docker containers for CI/CD deployment via container registry and through to EC2 instances. " },
];

export default function TechMarquee() {
    const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
    const [style, setStyle] = useState<React.CSSProperties>({ opacity: 0 });
    const tooltipRef = useRef<HTMLDivElement>(null);

    const showTooltip = (e: React.MouseEvent, desc: string) => {
        setTooltip({ text: desc, x: e.clientX, y: e.clientY });
    };

    const hideTooltip = () => {
        setTooltip(null);
    };

    useEffect(() => {
        if (tooltip && tooltipRef.current) {
            const { x, y } = tooltip;
            const { offsetWidth, offsetHeight } = tooltipRef.current;
            const { innerWidth, innerHeight } = window;
            const offset = 15;

            let finalTop = y + offset;
            let finalLeft = x + offset;

            if (finalLeft + offsetWidth > innerWidth) {
                finalLeft = x - offsetWidth - offset;
            }
            if (finalLeft < 0) {
                finalLeft = offset;
            }
            if (finalTop + offsetHeight > innerHeight) {
                finalTop = y - offsetHeight - offset;
            }
            if (finalTop < 0) {
                finalTop = offset;
            }

            setStyle({
                top: `${finalTop}px`,
                left: `${finalLeft}px`,
                opacity: 1,
            });
        } else {
            setStyle({ opacity: 0 });
        }
    }, [tooltip]);

    const tooltipRoot = document.getElementById('tooltip-root');

    return (
        <div className="relative">
            <Marquee pauseOnHover={true} speed={50} autoFill={true}>
                {TECHS.map((tech) => (
                    <div
                        key={tech.name}
                        className="inline-block flex-shrink-0 w-32 p-4 mx-4 flex-col items-center cursor-pointer"
                        onMouseEnter={(e) => showTooltip(e, tech.description)}
                        onMouseMove={(e) => showTooltip(e, tech.description)}
                        onMouseLeave={hideTooltip}
                    >
                        <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-2 drop-shadow rounded-lg mx-auto" />
                        <div className="text-sm font-semibold text-gray-300 text-center">{tech.name}</div>
                    </div>
                ))}
            </Marquee>

            {tooltipRoot && createPortal(
                <div
                    ref={tooltipRef}
                    className="fixed z-[9999] max-w-xs p-3 bg-gray-900 text-white text-lg rounded-lg shadow-xl pointer-events-none transition-opacity duration-150"
                    style={style}
                >
                    {tooltip?.text}
                </div>,
                tooltipRoot
            )}
        </div>
    );
}