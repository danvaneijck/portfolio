import vention from "../../assets/logos/vention.png"
import sensys from "../../assets/logos/sensys.png"
import vic from "../../assets/logos/vic.jpeg"

type ExperienceItemProps = {
    logo: string;
    title: string;
    company: string;
    timeframe: string;
    description: string;
};

const ExperienceItem = ({ logo, title, company, timeframe, description }: ExperienceItemProps) => {
    return (
        <div className="flex items-start mb-8">
            <img
                src={logo}
                alt={`${company} logo`}
                className="w-12 h-12 rounded-lg mr-4 object-contain"
            />
            <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-md font-medium text-gray-300">{company}</p>
                <p className="text-sm text-gray-400 mb-2">{timeframe}</p>
                <p className="text-gray-300 text-base whitespace-pre-line">{description}</p>
            </div>
        </div>
    );
};

const experiences: ExperienceItemProps[] = [
    {
        logo: vention,
        title: 'Software Engineer',
        company: 'Vention Lab NZ',
        timeframe: 'Jun 2023 - Present',
        description:
            'Led the development of a multiple Web and mobile applications. Managed cloud infrastructure on AWS. Database schema design and optimization using PostgreSQL. CI/CD pipelines with Bitbucket and Docker. Mentored junior developers and conducted code reviews. \n\n' +
            `Projects worked on: \n` +
            `CODA UltraCall: A mobile application that utilizes IoT devices to monitor vulnerable people living alone. The app provides real-time alerts and notifications to caregivers in case of emergencies.\n` +
            `GasOwl: A Mobile / Web application that monitors gas consumption in real-time using IoT devices. The app provides insights and analytics to help users optimize their gas usage and reduce costs.\n`
    },
    {
        logo: sensys,
        title: 'Web Services Software Engineer',
        company: 'Design Electronics Ltd (Sensys)',
        timeframe: 'May 2020 - Jun 2023',
        description: 'Designed, developed and maintained backend web services using Django and GraphQL. Implemented CI/CD pipelines with Bitbucket and Docker. Developed web and mobile applications using React and React Native.\n\n' +
            `Projects worked on: \n` +
            `BenchMarker: A web application that allows building managers to monitor assets such as freezers, HVAC systems and other critical equipment in real-time.\n` +
            `Device Manager: A backend system used to manage and monitor IoT devices deployed in the field.`
    },
    {
        logo: vic,
        title: 'Research Assistant',
        company: 'Victoria University of Wellington',
        timeframe: 'Dec 2019 - Mar 2020',
        description: 'Research on Blockchain technology in supply chain solutions in the form of Decentralized Autonomous Organisations.'
    }
];

const WorkExperience = () => {
    return (
        <div className=" md:mx-10 p-4">
            <div>
                {experiences.map((exp, index) => (
                    <ExperienceItem
                        key={index}
                        logo={exp.logo}
                        title={exp.title}
                        company={exp.company}
                        timeframe={exp.timeframe}
                        description={exp.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default WorkExperience;