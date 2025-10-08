import ChatBot from "../components/ChatBot"

const About = () => {


    return (
        <div
            className="flex-1 flex flex-col  bg-gradient-to-b from-[#092327] to-[#4E8098] p-4 "
        >
            <div
                className=" pt-20 animate-fade-in"
            >
                <div className="font-bebas text-3xl text-white text-center">About me</div>
                <div className="text-white text-center w-full md:w-2/3 m-auto my-5">
                    I am a software developer with a passion for creating innovative solutions.
                    I graduated with a Bachelors degree in Engineering majoring in Software from Victoria University of Wellington in 2020.
                    Ever since I was young, I have been fascinated in how fast things can be built with code, and I love seeing projects come to life.
                    I have experience working with a variety of programming languages and frameworks, and I am always eager to learn new technologies.
                    Some developers may be nervous for their jobs to be replaced by AI, but I see it as a tool to help me become more productive and efficient.

                </div>

                <div className="text-white text-center w-full md:w-2/3 m-auto my-5">
                    In my spare time, I like to expand my knowledge of programming by building side projects that I am passionate about.
                    Recently, this has been in the decentralized finance space, and I have been learning about writing smart contracts and building dApps.
                    I am excited about the potential of blockchain technology to revolutionize industries and create new opportunities for innovation.
                </div>

                <div className="text-white text-center w-full md:w-2/3 m-auto my-5">
                    Of course, I also like to take breaks from coding and enjoy other hobbies. I am obsessed with a sport called tricking, which combines elements of gymnastics, martial arts, and breakdancing.
                    I love the creativity and freedom that tricking allows, and I enjoy pushing my body to new limits. Tricking also has a great community of like-minded individuals and going to tricking gathering is one of my favourite things to do.
                </div>

            </div >
            <div
                className=" py-10 animate-fade-in"
            >
                <div className="font-bebas text-3xl text-white text-center">Ask AI!</div>
                <div className="text-white text-center w-full md:w-1/2 m-auto my-5">
                    I like to stay up to date with the developments in the AI field, particularly the fast growing section of large language models.
                    Ask questions to the bot below about me. It knows a lot !
                </div>
                <ChatBot />
            </div >
        </div >
    )
}

export default About