import { useSearchParams, useNavigate } from "react-router-dom"
import projects from "../data/projects.json"
import ProjectsGrid from "../components/Projects"
import ReactMarkdown from "react-markdown"

const Projects: React.FC = () => {
    const [searchParams] = useSearchParams()
    const projectKey = searchParams.get("project")
    const navigate = useNavigate()

    const project = projectKey
        ? projects.find((p) => p.key === projectKey)
        : null

    return (
        <div className="flex-1 flex flex-col  bg-gradient-to-b from-[#092327] to-[#4E8098] p-4">
            <div className="pt-20 px-10">
                {project ? (
                    <div className="text-white  p-6max-w-3xl mx-auto">
                        <button
                            onClick={() => navigate("/projects")}
                            className="mb-4 text-emerald-500 hover:underline"
                        >
                            ← Back to all projects
                        </button>
                        <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover rounded mb-4"
                        />
                        <div className="prose prose-lg">
                            <ReactMarkdown>{project.content}</ReactMarkdown>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="text-white mb-5 text-center font-bebas text-2xl md:text-4xl">Projects</div>
                        <ProjectsGrid maxProjects={null} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects
