import { FaGithub, FaLinkedin } from "react-icons/fa";
import {motion} from "framer-motion"
import { IoMdDownload } from "react-icons/io";
import resume from "../web/FINALResume.pdf";

const Navbar = () => {
  return (
    <nav className= "flex items-center justify-between py-3 p-24 border-0">
    <motion.a href={resume} download="Resume-Damian-Fabrizio"  
    target="_blank" rel="noopener noreferrer"
    whileInView={{opacity:1, x:0}}
    initial={{opacity:0, x: -100}}
    transition={{duration: 0.75}}
    // whileHover={{background: "#828282"}}
    className="rounded-full bg-white px-3 py-2  text-black text-sm hover:bg-gray-300">
        <div className="flex items-center">
            <span >Download Resume</span>
            <IoMdDownload className="ml-1 text-md"/>
        </div>
    </motion.a>
    <motion.div 
    whileInView={{opacity:1, x:0}}
    initial={{opacity:0, x: 100}}
    transition={{duration: 0.75}}
    className="m-5 flex items-center justify-center gap-6 text-3xl">
      <a href="https://github.com/damian-fabrizio?tab=repositories" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-white hover:scale-125 duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/damian-fabrizio-99b691155/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-white hover:scale-125 duration-300" />
      </a>
        
    </motion.div>
</nav>

  );
}

export default Navbar;
