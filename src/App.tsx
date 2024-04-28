import logo from './assets/port-logo.jpg';
import dan from './assets/danedit.jpg';

import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import Experience from './components/Experience';

function App() {

  return (
    <div
      className='bg-slate-800 px-5'
    >
      <div
        className='text-center pt-5 md:pt-40 text-white flex flex-col md:flex-row justify-center items-center'
      >
        <img
          src={logo}
          style={{ width: 140, height: 140 }}
          className="rounded-lg shadow-xl"
          alt="logo"
        />
        <div
          className='md:ml-10 pt-5 md:pt-0'
          style={{ fontFamily: 'BebasNeue' }}
        >
          <span className='text-3xl md:text-6xl text-slate-300 '>Hi, I'm </span>
          <span className='text-5xl md:text-7xl text-blue-300'>Dan Van Eijck</span>
          <div className='text-4xl md:text-4xl text-slate-300'>a full stack Software Engineer</div>
        </div>
      </div>
      <div
        className='flex flex-row justify-center text-6xl pt-5 text-blue-200 h-20'
      >
        <a href='https://github.com/danvaneijck' target="_blank" rel="noopener noreferrer">
          <FaGithubSquare className='hover:text-blue-300 hover:cursor-pointer hover:text-7xl shadow-xl' />
        </a>
        <a href='https://www.instagram.com/danvaneijck' target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare className='hover:text-blue-300 hover:cursor-pointer hover:text-7xl shadow-xl' />
        </a>
        <a href='https://www.linkedin.com/in/dan-van-eijck-30391718b' target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='hover:text-blue-300 hover:cursor-pointer hover:text-7xl shadow-xl' />
        </a>
        <a href='https://www.youtube.com/@dan16587' target="_blank" rel="noopener noreferrer">
          <FaYoutubeSquare className='hover:text-blue-300 hover:cursor-pointer hover:text-7xl shadow-xl' />
        </a>
      </div>

      <div
        className='text-white text-center pt-5 text-base pb-20 md:w-1/2 m-auto text-base flex flex-col md:flex-row justify-center items-center'
        style={{ fontFamily: 'Roboto' }}
      >
        <div>
          <p className='mb-2'>
            I am a passionate 26-year-old software engineer from New Zealand with a keen interest in movement and physical training.
            I graduated with honors from Victoria University of Wellington in 2019, earning a Bachelor of Engineering with a major in Software Engineering.
            Over the past four years, I have gained extensive full-time experience, continually refining my technical skills across a diverse spectrum, from backend systems to
            frontend mobile and web applications. When I'm not behind a computer, I dedicate my time to strength training and practicing tricking, which complements my dynamic lifestyle.
          </p>
        </div>
        <img
          src={dan}
          style={{ height: 210 }}
          className="md:ml-10 rounded-2xl shadow-2xl"
          alt="dan"
        />
      </div>
      <Experience />
    </div>
  )
}

export default App
