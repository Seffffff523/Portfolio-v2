import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "../components";
import { projects } from "../constants";
import { staggerContainer, textVariant } from "../utils/motion";

const filters = [
  { label: "All", match: () => true },
  { label: "Web Apps", match: (p) => p.tags.some((t) => ["React", "Next.js", "Laravel"].includes(t)) },
  { label: "Virtual Tours & 3D", match: (p) => /tour|3d/i.test(p.name) },
  { label: "Games", match: (p) => p.tags.includes("Game Dev") },
];

const Projects = () => {
  const [filter, setFilter] = useState(filters[0]);
  const shown = useMemo(() => projects.filter(filter.match), [filter]);

  return (
    <section className="section relative z-10 pt-32">
      <Link to="/#projects" className="inline-flex items-center gap-2 text-secondary transition-colors hover:text-accent">
        <ArrowLeft size={18} /> Back home
      </Link>

      <motion.div variants={textVariant()} initial="hidden" animate="show" className="mt-6">
        <p className="section-sub">Everything I've built</p>
        <h1 className="section-head">
          All Projects<span className="text-accent">.</span>
        </h1>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.label}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
              filter === f
                ? "border-accent bg-accent/15 text-white"
                : "border-white/10 text-secondary hover:border-accent/50 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div
        key={filter.label}
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
      >
        {shown.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
