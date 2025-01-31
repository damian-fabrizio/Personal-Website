import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -500 }}
        transition={{ duration: 0.75 }}
        className="border-t border-gray-600 mx-auto w-3/4"
      ></motion.div>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.75 }}
        className="mt-20 mb-5 text-center text-3xl sm:text-4xl lg:text-5xl font-light"
      >
        Contact
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 125 }}
          transition={{ duration: 0.75 }}
          className="py-4 text-xl"
        >
          484-678-8595
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.75 }}
          className="py-4 text-xl"
        >
          day22482@gmail.com
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
