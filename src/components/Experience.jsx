import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  const right = index % 2 === 1;

  return (
    <motion.div
      variants={fadeIn(right ? "left" : "right", 0.15, 0.7)}
      className={`relative flex w-full md:w-1/2 pl-14 ${right ? "md:ml-auto md:pl-12" : "md:pl-0 md:pr-12"}`}
    >
      {/* Timeline node */}
      <span
        className={`absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-tertiary text-accent shadow-glow ${
          right ? "md:-left-5" : "md:left-auto md:-right-5"
        }`}
      >
        <Briefcase size={18} />
      </span>

      <div className="glass w-full p-6 sm:p-8">
        <p className="text-[13px] font-semibold uppercase tracking-wider text-accent">{experience.date}</p>
        <h3 className="mt-2 font-display text-[22px] font-bold text-white sm:text-[24px]">{experience.title}</h3>
        <p className="text-[15px] font-semibold text-secondary">
          {experience.company}
          <span className="ml-2 rounded-full border border-violet/40 bg-violet/10 px-2 py-0.5 text-[11px] text-violet">
            {experience.type}
          </span>
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          {experience.points.map((point) => (
            <li key={point} className="pl-1 text-[14px] leading-[22px] tracking-wide text-white-100">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="section-sub text-center">What I have done so far</p>
      <h2 className="section-head text-center">
        Work Experience<span className="text-accent">.</span>
      </h2>
    </motion.div>

    <div className="relative mt-16 flex flex-col gap-10">
      <div className="absolute bottom-0 left-5 top-0 w-[2px] bg-gradient-to-b from-accent via-violet to-transparent md:left-1/2 md:-translate-x-1/2" />
      {experiences.map((experience, index) => (
        <ExperienceCard key={experience.date} experience={experience} index={index} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Experience, "experience");
