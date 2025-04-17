import projects from "../../data/projects.json"
import { Link } from "react-router-dom"

const ProjectsGrid = ({ maxProjects }) => {

    const items = typeof maxProjects === "number"
        ? projects.slice(0, maxProjects)
        : projects

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((proj, idx) => (
                    <div
                        key={proj.id}
                        className={`
                            bg-[#092327] text-white rounded-lg shadow p-4 flex flex-col
                            transform transition duration-300
                            hover:scale-105 hover:shadow-lg
                            opacity-0 animate-fadeIn
                          `}
                        style={{ animationDelay: `${idx * 100}ms` }}
                    >
                        <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-48 object-cover rounded"
                        />
                        <h3 className="mt-4 text-xl font-semibold">
                            {proj.title}
                        </h3>
                        <p className="mt-2 flex-1 text-gray-300">
                            {proj.description}
                        </p>
                        <Link
                            to={`/projects/?project=${proj.key}`}
                            className="mt-4 text-seaGreen hover:underline self-start"
                        >
                            Read more
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProjectsGrid