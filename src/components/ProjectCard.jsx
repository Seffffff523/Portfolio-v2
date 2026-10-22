import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeIn } from "../utils/motion";

// Loop the preview only while it's on screen to save bandwidth and battery.
const ProjectMedia = ({ project }) => {
  const video = useRef();
  const poster = `/images/${project.media}.jpg`;

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? el.play().catch(() => {}) : el.pause()),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!project.video) {
    return <img src={poster} alt={project.name} loading="lazy" className="h-full w-full object-cover" />;
  }

  return (
    <video
      ref={video}
      src={`/images/${project.media}.mp4`}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={`${project.name} preview`}
      className="h-full w-full object-cover"
    />
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.article
    variants={fadeIn("up", (index % 3) * 0.12, 0.6)}
    className="group green-pink-gradient rounded-2xl p-[1px] shadow-card transition-transform duration-300 hover:-translate-y-2"
  >
    <div className="flex h-full flex-col rounded-2xl bg-tertiary p-5">
      <div className="relative h-[200px] w-full overflow-hidden rounded-xl bg-black-100">
        <ProjectMedia project={project} />
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name}`}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 text-accent backdrop-blur transition-colors hover:bg-accent hover:text-primary"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>

      <div className="mt-5 flex-1">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-accent">{project.role}</p>
        <h3 className="mt-1 font-display text-[22px] font-bold leading-tight text-white">{project.name}</h3>
        <p className="mt-2 text-[14px] leading-[22px] text-secondary">{project.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-md border border-violet/30 bg-violet/10 px-2 py-0.5 text-[12px] text-[#dfd9ff]">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;
