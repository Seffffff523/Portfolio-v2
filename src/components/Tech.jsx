import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const TechSphere = lazy(() => import("./canvas/TechSphere"));

const Tech = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="section-sub">What I work with</p>
      <h2 className="section-head">
        Tech Stack<span className="text-accent">.</span>
      </h2>
    </motion.div>

    <div className="mt-10 flex flex-col items-center gap-10 lg:flex-row">
      <motion.div variants={fadeIn("right", 0.1)} className="h-[340px] w-full sm:h-[420px] lg:w-1/2">
        <Suspense fallback={null}>
          <TechSphere />
        </Suspense>
      </motion.div>

      <div className="flex w-full flex-wrap justify-center gap-3 lg:w-1/2 lg:justify-start">
        {technologies.map((tech, i) => (
          <motion.span
            key={tech.name}
            variants={fadeIn("up", i * 0.05, 0.5)}
            className="glass flex items-center gap-2 px-4 py-2.5 text-[15px] font-medium text-white transition-colors hover:border-accent/60"
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: tech.color, boxShadow: `0 0 10px ${tech.color}` }} />
            {tech.name}
          </motion.span>
        ))}
      </div>
    </div>
  </>
);

export default SectionWrapper(Tech, "tech");
