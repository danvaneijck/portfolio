import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa"
import danPortrait from "../assets/dan.webp"
import { animate, createDraggable, createScope, createSpring, Scope } from 'animejs';
import { useEffect, useRef } from "react";
import ProjectsGrid from "../components/Projects";
import TechMarquee from "../components/TechMarquee";

const Home = () => {

    const root = useRef(null);
    const scope = useRef<Scope | null>(null)

    useEffect(() => {
        scope.current = createScope({ root }).add(scope => {
            createDraggable('.logo', {
                container: [0, 0, 0, 0],
                releaseEase: createSpring({ stiffness: 200 })
            });

            scope.add('rotateLogo', (i) => {
                animate('.logo', {
                    rotate: i * 360,
                    ease: 'out(4)',
                    duration: 1500,
                });
            });
        });
        return () => {
            if (scope.current) scope.current.revert()
        }
    }, []);

    return (
        <div ref={root} className="flex-1 flex flex-col  bg-gradient-to-b from-[#092327] to-[#4E8098] p-4">

            <div
                className="justify-evenly pt-10 md:pt-0"
            >
                <div>
                    <div
                        className='text-center pt-5 md:pt-32 text-white flex flex-col md:flex-row justify-center items-center'
                    >
                        <img
                            src={danPortrait}
                            className="logo rounded-lg shadow-xl w-44"
                            alt="logo"
                        />
                        <div>
                            <div
                                className='md:ml-10 pt-5 md:pt-0 font-bebas'
                            >
                                <span className='text-3xl md:text-6xl text-[#90C2E7] '>Hi, I'm </span>
                                <span className='text-4xl md:text-7xl '>Daniel Van Eijck</span>
                                <div className='text-2xl md:text-4xl text-[#90C2E7]'>full stack Software Engineer</div>
                            </div>

                            <div
                                className='flex flex-row justify-center text-6xl pt-5 text-white h-20'
                            >
                                <a href='https://github.com/danvaneijck' target="_blank" rel="noopener noreferrer">
                                    <FaGithubSquare
                                        className="
                                                text-6xl                    
                                                text-gray-300                
                                                duration-200                 
                                                ease-in-out                  
                                                hover:text-[#90C2E7]         
                                                hover:scale-110               
                                                cursor-pointer               
                                            "
                                    />
                                </a>

                                <a href='https://www.linkedin.com/in/dan-van-eijck-30391718b' target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="
                                                text-6xl                    
                                                text-gray-300                
                                                duration-200                 
                                                ease-in-out                  
                                                hover:text-[#90C2E7]         
                                                hover:scale-110               
                                                cursor-pointer               
                                            "/>
                                </a>
                                <a href='https://www.instagram.com/danvaneijck' target="_blank" rel="noopener noreferrer">
                                    <FaInstagramSquare className="
                                                text-6xl                    
                                                text-gray-300                
                                                duration-200                 
                                                ease-in-out                  
                                                hover:text-[#90C2E7]         
                                                hover:scale-110               
                                                cursor-pointer               
                                            " />
                                </a>
                                <a href='https://www.youtube.com/@dan16587' target="_blank" rel="noopener noreferrer">
                                    <FaYoutubeSquare className="
                                                text-6xl                    
                                                text-gray-300                
                                                duration-200                 
                                                ease-in-out                  
                                                hover:text-[#90C2E7]         
                                                hover:scale-110               
                                                cursor-pointer               
                                            " />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-10">
                    <div className="text-white mb-5 text-center font-bebas text-2xl md:text-4xl">
                        Tech
                    </div>
                    <TechMarquee />
                </div>

                <div className="mt-10 mb-10">
                    <div className="text-white mb-5 text-center font-bebas text-2xl md:text-4xl">
                        My Projects
                    </div>
                    <ProjectsGrid maxProjects={3} />
                </div>


            </div>




            {/* <Experience /> */}

        </div>

    )
}

export default Home