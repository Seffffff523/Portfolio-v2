import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";

const featured = projects.filter((p) => p.featured);

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="section-sub">My work</p>
      <h2 className="section-head">
        Projects<span className="text-accent">.</span>
      </h2>
    </motion.div>

    <motion.p variants={fadeIn("", 0.1, 1)} className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary">
      A selection of projects from my work at Mata Technology and my studies, from tourism booking platforms and
      government systems to immersive virtual tours and games.
    </motion.p>

    <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {featured.map((project, index) => (
        <ProjectCard key={project.name} project={project} index={index} />
      ))}
    </div>

    <motion.div variants={fadeIn("up", 0.2)} className="mt-12 flex justify-center">
      <Link
        to="/projects"
        className="group inline-flex items-center gap-2 rounded-xl border border-accent/40 px-6 py-3 font-semibold text-white transition-colors hover:border-accent hover:bg-accent/10"
      >
        See all {projects.length} projects
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  </>
);

export default SectionWrapper(Works, "projects");
