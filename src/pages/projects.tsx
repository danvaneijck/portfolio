import { useSearchParams, useNavigate } from "react-router-dom";
import { PROJECTS_DATA } from "../data/projects";
import ProjectsGrid from "../components/Projects";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { useEffect } from "react";

const Projects: React.FC = () => {
    const [searchParams] = useSearchParams();
    const projectKey = searchParams.get("project");
    const navigate = useNavigate();

    const project = projectKey
        ? PROJECTS_DATA.find((p) => p.key === projectKey)
        : null;

    useEffect(() => {
        if (projectKey) {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }, [projectKey])

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

                        <div
                            className="prose prose-lg 
                        text-white 
                        mx-auto my-10
                        prose-headings:text-white 
                        prose-code:text-white
                        prose-strong:text-white
                        prose-a:text-white
                        prose-code:before:content-none 
                        prose-code:after:content-none 
                        prose-code:bg-gray-700 
                        prose-code:px-1 
                        prose-code:rounded 
                        prose-pre:bg-gray-700
                         prose-pre:text-white
                         prose-img:max-w-xl 
                         prose-img:mx-auto
                         font-mono
                         "
                        >
                            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                                {project.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="text-white mb-5 text-center font-bebas text-2xl md:text-4xl">
                            Projects
                        </div>
                        <ProjectsGrid maxProjects={null} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
