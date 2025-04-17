// src/components/TechDiagram.tsx
import React, { useEffect, useRef } from "react"
import { animate, createDraggable, createScope, createSpring } from 'animejs';
import js from "../../assets/js.webp"
import python from "../../assets/python.png"

type Tech = {
    name: string
    logoUrl: string
    angle: number
}

const TECHS: Tech[] = [
    { name: "JavaScript", logoUrl: js, angle: 0 },
    { name: "TypeScript", logoUrl: "/logos/ts.png", angle: 45 },
    { name: "React", logoUrl: "/logos/react.png", angle: 90 },
    { name: "Django", logoUrl: "/logos/django.png", angle: 135 },
    { name: "GraphQL", logoUrl: "/logos/graphql.png", angle: 180 },
    { name: "Tailwind", logoUrl: "/logos/tailwind.png", angle: 225 },
    { name: "Python", logoUrl: python, angle: 270 },
    { name: "Node.js", logoUrl: "/logos/node.png", angle: 315 },
]

export default function TechDiagram() {
    const root = useRef(null);
    const scope = useRef(null);

    useEffect(() => {


        createDraggable('.tech-icon', {
            // constrain drags to the root container:
            container: [0, 0, 0, 0],
            releaseEase: createSpring({ stiffness: 10 }),
        })



    }, []);



    return (
        <div
            ref={root}
            className="mx-auto flex mt-10"

        >

            {TECHS.map((tech) => {

                return (
                    <img
                        key={tech.name}
                        src={tech.logoUrl}
                        alt={tech.name}
                        className="tech-icon w-12 h-12 rounded-full shadow-lg mx-2"

                    />
                )
            })}
        </div>
    )
}
