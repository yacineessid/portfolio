import { motion, useAnimation } from "framer-motion";
import { EXPERIENCES } from "../constants";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Experience = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experiences</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-3 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{experience.role} -{" "}
                <span className="text-sm text-purple-100">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm text-purple-800">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
