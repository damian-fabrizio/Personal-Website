import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCss3, SiRstudioide } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import viteLogo from "../web/icons8-vite-color-96.png";
import cssLogo from "../web/icons8-css-96.png";
import htmlLogo from "../web/icons8-html5-96.png";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [12, -12],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className="pb-24">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -500 }}
        transition={{ duration: 0.75 }}
        className="border-t border-gray-600  mx-auto w-3/4"
      ></motion.div>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-3xl md:text-4xl lg:text-5xl font-light"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* logo 1 */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="h-12 w-12 text-javascriptLogo" />
        </motion.div>

        {/* logo 2 */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={htmlLogo} alt="htmlLogo" className="h-12 w-12" />
        </motion.div>

        {/* logo 3 */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={cssLogo} alt="cssLogo" className="h-12 w-12" />
        </motion.div>

        {/* logo 4 */}
        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="h-12 w-12 text-cyan-400" />
        </motion.div>

        {/* logo 5 */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="h-12 w-12 text-tailwindLogo" />
        </motion.div>

        {/* logo 6 */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="h-12 w-12 text-tailwindLogo" />
        </motion.div>

        {/* logo 7 */}
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={viteLogo} alt="viteLogo" className="h-12 w-12" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRstudioide className="h-12 w-12 text-rStudioLogo" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
