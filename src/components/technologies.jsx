import { motion } from "framer-motion";
import { DiPhotoshop } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri"
import { SiAngular, SiBootstrap, SiCanva, SiCss3, SiGit, SiGitlab, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiTypescript } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Technologies I Use</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ y: [-5, 5, -5], transition: { repeat: Infinity, duration: 2 } }}
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiHtml5 className="text-4xl text-orange-500" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ y: [-5, 5, -5], transition: { repeat: Infinity, duration: 2, delay: 0.2 } }}
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiCss3 className="text-4xl text-blue-500" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ y: [-5, 5, -5], transition: { repeat: Infinity, duration: 2, delay: 0.4 } }}
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-4xl text-yellow-500" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ y: [-5, 5, -5], transition: { repeat: Infinity, duration: 2, delay: 0.6 } }}
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-4xl text-blue-600" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ y: [-5, 5, -5], transition: { repeat: Infinity, duration: 2, delay: 0.8 } }}
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiAngular className="text-4xl text-red-600" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ y: [-5, 5, -5], transition: { repeat: Infinity, duration: 2, delay: 1 } }}
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiBootstrap className="text-4xl text-purple-600" />
        </motion.div>
        {/* Repeat this for other icons */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ y: [-5, 5, -5], transition: { repeat: Infinity, duration: 2, delay: 1.2 } }}
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiGit className="text-4xl text-orange-600" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ y: [-5, 5, -5], transition: { repeat: Infinity, duration: 2, delay: 1.4 } }}
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiGitlab className="text-4xl text-orange-600" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ y: [-5, 5, -5], transition: { repeat: Infinity, duration: 2, delay: 1.6 } }}
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-4xl text-cyan-500" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ y: [-5, 5, -5], transition: { repeat: Infinity, duration: 2, delay: 1.8 } }}
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-4xl text-green-500" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ y: [-5, 5, -5], transition: { repeat: Infinity, duration: 2, delay: 2 } }}
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiNodedotjs className="text-4xl text-green-600" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ y: [-5, 5, -5], transition: { repeat: Infinity, duration: 2, delay: 2.2 } }}
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiCanva className="text-4xl text-[#00C4CC]" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ y: [-5, 5, -5], transition: { repeat: Infinity, duration: 2, delay: 2.4 } }}
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <DiPhotoshop className="text-4xl text-[#31A8FF]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
