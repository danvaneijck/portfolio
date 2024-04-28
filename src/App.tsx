import logo from './assets/port-logo.jpg';
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

function App() {

  return (
    <div
      style={{ fontFamily: 'BebasNeue' }}
      className='h-screen bg-slate-800'
    >
      <div
        className='text-center pt-20 text-white flex flex-row justify-center items-center'
      >
        <img
          src={logo}
          style={{ width: 140, height: 140 }}
          className=" rounded-lg"
          alt="logo"
        />
        <div className='ml-10'>
          <span className='text-6xl text-slate-300'>Hello, I am </span>
          <span className='text-7xl text-blue-300'>Dan Van Eijck</span>
          <div className='text-4xl text-slate-300'>a full stack Software Engineer</div>
        </div>

      </div>
      <div className='flex flex-row justify-center text-white text-6xl pt-5 text-slate-300'>
        <FaGithubSquare className='hover:text-blue-300 hover:cursor-pointer' />
        <FaInstagramSquare className='hover:text-blue-300 hover:cursor-pointer' />
        <FaLinkedin className='hover:text-blue-300 hover:cursor-pointer' />
        <FaYoutubeSquare className='hover:text-blue-300 hover:cursor-pointer' />
      </div>

      <div
        className='text-white text-center pt-10 text-xl'
        style={{ fontFamily: 'Arial' }}
      >
        I am a passionate 26 y/o software engineer and tricking / movement enthusiast from New Zealand.
      </div>
    </div>
  )
}

export default App
