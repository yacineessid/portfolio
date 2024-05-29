import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-neutral-900 pb-4"
    >
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <img src={project.image} alt={project.title} className="max-w-full h-auto" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 pl-4 lg:pl-8">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-2 text-neutral-400">{project.description}</p>
              <div className="mb-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="mr-2 inline-block rounded-full bg-neutral-900 px-2 py-1 text-sm text-purple-800">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">Visit Project</a>

            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
