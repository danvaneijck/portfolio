import { useEffect } from 'react';
import { Link, Element, Events, scrollSpy } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import TechnicalSkills from '../TechnicalSkills';
import PersonalProjects from '../PersonalProjects';
import WorkExperience from '../WorkExperience';
import Tricking from '../Tricking';


const Experience = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const activeSection = searchParams.get('section');

    useEffect(() => {
        const handleBegin = (args: string) => {
            const searchParams = new URLSearchParams(location.search);
            searchParams.set("section", args);
            navigate(`?${searchParams.toString()}`, { replace: true });
        };
        const handleEnd = (args: string) => {
            console.log("end", args);
        };

        Events.scrollEvent.register('begin', handleBegin);
        Events.scrollEvent.register('end', handleEnd);

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, [navigate, location]);

    return (
        <div
            className='pb-20'
            style={{ fontFamily: 'Arial' }}
        >
            <div
                className=" text-center text-5xl flex flex-col mb-20"
                style={{ fontFamily: "BebasNeue" }}
            >
                <Link
                    className={`text-slate-500 hover:text-slate-300 px-4 py-2 hover:cursor-pointer ${activeSection === 'technicalSkills' ? 'text-white' : ''}`}
                    activeClass="active"
                    to="technicalSkills"
                    spy={true} smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <div className='ml-5'>Technical Skills</div>
                </Link>
                <Link
                    className={`text-slate-500 hover:text-slate-300 px-4 py-2 hover:cursor-pointer ${activeSection === 'personalProjects' ? 'text-white' : ''}`}
                    activeClass="active"
                    to="personalProjects"
                    spy={true} smooth={true}
                    offset={-70} duration={500}
                >
                    Personal Projects
                </Link>
                <Link
                    className={`text-slate-500 hover:text-slate-300 px-4 py-2 hover:cursor-pointer ${activeSection === 'workExperience' ? 'text-white' : ''}`}
                    activeClass="active"
                    to="workExperience"
                    spy={true} smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Work Experience
                </Link>
                <Link
                    className={`text-slate-500 hover:text-slate-300 px-4 py-2 hover:cursor-pointer ${activeSection === 'tricking' ? 'text-white' : ''}`}
                    activeClass="active"
                    to="tricking"
                    spy={true} smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Tricking
                </Link>
            </div>
            <div className='lg:w-2/3 m-auto text-center text-white'>
                <Element name="technicalSkills" className="element pt-24" style={{ fontFamily: "BebasNeue" }}>
                    <h2 className="text-4xl ">Technical Skills</h2>
                    <TechnicalSkills />
                </Element>
                <Element name="personalProjects" className="element pt-24" style={{ fontFamily: "BebasNeue" }}>
                    <h2 className="text-4xl ">Personal Projects</h2>
                    <PersonalProjects />
                </Element>
                <Element name="workExperience" className="element pt-24" style={{ fontFamily: "BebasNeue" }}>
                    <h2 className="text-4xl ">Work Experience</h2>
                    <WorkExperience />
                </Element>
                <Element name="tricking" className="element pt-24" style={{ fontFamily: "BebasNeue" }}>
                    <h2 className="text-4xl ">Tricking</h2>
                    <Tricking />
                </Element>
            </div>

        </div>
    );
}

export default Experience;
