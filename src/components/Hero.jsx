import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-40">
      <div className="flex flex-wrap justify-center">
        <div className="w-full">
          <div className="flex flex-col items-center py-6">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="pb-5 text-3xl font-thin tracking-tight md:text-4xl lg:mt-10 lg:text-6xl"
            >
              Damian Fabrizio
            </motion.h1>
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 2 }}
              className="my-2 max-w-2xl py-6 text-xl font-light tracking-tighter text-center"
            >
              I am a developer proficient in Javascript, React, Node, JSX, CSS,
              and Tailwind, with an analytical background in R. My focus is
              creating technical, but also responsive designs that enhance the
              user experience. I also have skills in web scraping and handling
              APIs. Check out my personal projects below
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
