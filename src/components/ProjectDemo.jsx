import { motion } from "framer-motion"
import { MdArrowOutward } from "react-icons/md";
import { useMediaQuery } from "react-responsive";



const ProjectDemo = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <section className="pt-0 pb-20 border-0">
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x:500}}
        transition={{duration: 0.75}}
        className="border-t border-gray-600 mx-auto w-3/4"></motion.div>
        <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y:-100}}
        transition={{duration: 1}}
        className="mt-20 text-center text-3xl sm:text-4xl lg:text-5xl font-light">Projects</motion.h2>
        <div className="grid grid-cols-1 p-4 gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center border-0">

            {/* container for project 1 */}
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0, x: isMobile ? 0 : -200 }}
            transition={{duration: 0.75}}
            whileHover={{scale: 1.03, background:"#10042e"}}
            className="group relative overflow-hidden rounded-3xl w-full h-auto min-h-72">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 className="mb-4 text-md font-light font-semibold">Basic Calculator</h3>
                    <p className="mb-0 p-4 text-center text-sm font-light">A traditional calculator with an appealing UI that can compute addition, subtraction, multiplication, and division. Can also handle decimal input, and convert results to a percentage</p>
                    <div className="flex flex-wrap">
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    Javascript
                    </span>
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    HTML
                    </span>
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    CSS
                    </span>
                    </div>
                    {/* github link below */}
                    <motion.a 
                    whileHover={{ background: "#a3a3a3"}}
                    href="https://calculator-vy1x4lznj-damian-fabrizios-projects.vercel.app" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 text-black text-sm">
                        <div className="flex">
                            <span>Demo</span>
                            <MdArrowOutward className="ml-0.5 text-lg"/>
                        </div>
                    </motion.a>
                </div>
            </motion.div>
            
            {/* container for project 2 */}
            <motion.div 
             whileInView={{opacity: 1, x:0}}
             initial={{opacity: 0, x: isMobile ? 0 : -300 }}
             transition={{duration: 0.75}}
             whileHover={{scale: 1.03, background:"#10042e"}}
             className="group relative overflow-hidden rounded-3xl w-full h-auto min-h-72">
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <h3 className="mb-4 text-md font-light font-semibold">Live Weather</h3>
                     <p className="mb-0 p-4 text-center text-sm font-light">Uses an API feed to display realtime weather from anywhere in the world. Enter a city to view current weather, temperature, and various other useful metrics such as the wind speed and air pressure</p>
                     <div className="flex flex-wrap">
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    Javascript
                    </span>
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    HTML
                    </span>
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    CSS
                    </span>
                    </div>
                     {/* github link below */}
                     <motion.a 
                     whileHover={{ background: "#a3a3a3"}}
                     href="https://github.com/damian-fabrizio/Live-Weather" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 text-black text-sm">
                         <div className="flex">
                             <span>Demo</span>
                             <MdArrowOutward className="ml-0.5 text-lg"/>
                         </div>
                     </motion.a>
                 </div>
            </motion.div>

            {/* container for project 3 */}
            <motion.div 
             whileInView={{opacity: 1, x:0}}
             initial={{opacity: 0, x: isMobile ? 0 : -400 }}
             transition={{duration: 0.75}}
             whileHover={{scale: 1.03, background:"#10042e"}}
             className="group relative overflow-hidden rounded-3xl w-full h-auto min-h-72">
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <h3 className="mb-4 text-md font-light font-semibold">Live MLB Roster</h3>
                     <p className="mb-0 p-4 text-center text-sm font-light">Uses API feed to pull up-to-date info from each of the 30 Major League Baseball teams. Use the dropdown menu to select a team, and the current roster will display alonsgide stats for each player</p>
                    <div className="flex flex-wrap">
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    Javascript
                    </span>
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    HTML
                    </span>
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    CSS
                    </span>
                    </div>
                     {/* github link below */}
                     <motion.a 
                     whileHover={{ background: "#a3a3a3"}}
                     href="https://github.com/damian-fabrizio/Live-MLB-Roster" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 text-black text-sm">
                         <div className="flex">
                             <span>Demo</span>
                             <MdArrowOutward className="ml-0.5 text-lg"/>
                         </div>
                     </motion.a>
                 </div>
            </motion.div>

            {/* container for project 4 */}
            <motion.div 
             whileInView={{opacity: 1, x:0}}
             initial={{opacity: 0, x: isMobile ? 0 : 400 }}
             transition={{duration: 0.75}}
             whileHover={{scale: 1.03, background:"#10042e"}}
             className="group relative overflow-hidden rounded-3xl w-full h-auto min-h-72">
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <h3 className="mb-4 text-md font-light font-semibold">Moon Phase</h3>
                     <p className="mb-0 p-4 text-center text-sm font-light">View the current phase of the moon, and other stats like illumination, and when the next full moon will be. An API feed displays current info about tonights moon while animated stars float in the background</p>
                     <div className="flex flex-wrap">
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    ReactJS
                    </span>
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    JSX
                    </span>
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    TailwindCSS
                    </span>
                    </div>
                     {/* github link below */}
                     <motion.a 
                     whileHover={{ background: "#a3a3a3"}}
                     href="https://moon-phase-mutsqpg98-damian-fabrizios-projects.vercel.app" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 text-black text-sm">
                         <div className="flex">
                             <span>Demo</span>
                             <MdArrowOutward className="ml-0.5 text-lg"/>
                         </div>
                     </motion.a>
                 </div>
            </motion.div>

            {/* container for project 5 */}
            <motion.div 
             whileInView={{opacity: 1, x:0}}
             initial={{opacity: 0, x: isMobile ? 0 : 300 }}
             transition={{duration: 0.75}}
             whileHover={{scale: 1.03, background:"#10042e"}}
             className="group relative overflow-hidden rounded-3xl w-full h-auto min-h-72">
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <h3 className="mb-4 text-md font-light font-semibold">Memory Game</h3>
                     <p className="mb-0 p-4 text-center text-sm font-light">Try to find every number pair on the board. Wrong guesses disappear instantly, so your memory will be put to the test. Manually adjust the size of the board to increase/decrease difficulty</p>
                     <div className="flex flex-wrap">
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    ReactJS
                    </span>
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    JSX
                    </span>
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    TailwindCSS
                    </span>
                    </div>
                     {/* github link below */}
                     <motion.a 
                     whileHover={{ background: "#a3a3a3"}}
                     href="https://memory-a16z-5903zw593-damian-fabrizios-projects.vercel.app" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 text-black text-sm">
                         <div className="flex">
                             <span>Demo</span>
                             <MdArrowOutward className="ml-0.5 text-lg"/>
                         </div>
                     </motion.a>
                 </div>
            </motion.div>

            {/* container for project 6 */}
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0, x: isMobile ? 0 : 200 }}
            transition={{duration: 0.75}}
            whileHover={{scale: 1.03, background:"#10042e"}}
            className="group relative overflow-hidden rounded-3xl w-full h-auto min-h-72">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 className="mb-4 text-md font-light font-semibold">Multi-Step Form</h3>
                    <p className="mb-0 p-4 text-center text-sm font-light">A sample multi-stage sign-up form. Enter the required information to progress through the form and "create your account". Several convenient UI features to guide you through the form</p>
                    <div className="flex flex-wrap">
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    Javascript
                    </span>
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    HTML
                    </span>
                    <span className="mb-8 mr-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium">
                    CSS
                    </span>
                    </div>
                    {/* github link below */}
                    <motion.a 
                    whileHover={{ background: "#a3a3a3"}}
                    href="https://signup-form-2lvlqf5dv-damian-fabrizios-projects.vercel.app" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 text-black text-sm">
                        <div className="flex">
                            <span>Demo</span>
                            <MdArrowOutward className="ml-0.5 text-lg"/>
                        </div>
                    </motion.a>
                </div>
            </motion.div>
        </div>
        
    </section>
  )
}

export default ProjectDemo