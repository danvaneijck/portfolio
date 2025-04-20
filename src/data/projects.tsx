import ecommerce from "../data/markdown/ecommerce-store.md?raw"
import portfolioContent from "../data/markdown/portfolio-website.md?raw"
import choice from "../data/markdown/choice.md?raw"
import trippy from "../data/markdown/trippy-tools.md?raw"

export const PROJECTS_DATA = [
    {
        "id": "1",
        "key": "choice-exchange",
        "title": "Choice Exchange AMM",
        "description": "An automated money market built for the Injective blockchain",
        "image": "/choice_swap.png",
        "content": choice
    },
    {
        "id": "2",
        "key": "portfolio-website",
        "title": "Portfolio Website",
        "description": "A personal portfolio built with React and Tailwind CSS.",
        "image": "/code_portfolio.png",
        "content": portfolioContent
    },
    {
        "id": "3",
        "title": "Trippy Tools",
        "key": "trippy-tools",
        "description": "Token creation and airdrop tools on Injective blockchain",
        "image": "/trippy-tools.png",
        "content": trippy
    }
]