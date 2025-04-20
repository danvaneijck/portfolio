import ChatBot from "../components/ChatBot"

const About = () => {


    return (
        <div
            className="flex-1 flex flex-col  bg-gradient-to-b from-[#092327] to-[#4E8098] p-4 "
        >
            <div
                className=" pt-20"
            >
                <div className="font-bebas text-3xl text-white text-center">Artificial Intelligence</div>
                <div className="text-white text-center w-full md:w-1/2 m-auto my-5">
                    I like to stay up to date with the developments in the AI field, particularly the fast growing section of large language models.
                    Ask questions to the bot below about me. It knows a lot !
                </div>
                <ChatBot agentId={1} />
            </div >
        </div >
    )
}

export default About