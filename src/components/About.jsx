import { motion } from "framer-motion";
import aboutImg from '../assets/aboutMe.jpg';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-neutral-900 pb-4"
    >
      <h1 className="my-20 text-center text-4xl">About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <img className="rounded-2xl" src={aboutImg} alt='about' />
          </motion.div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='flex justify-center lg:justify-start'
          >
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
