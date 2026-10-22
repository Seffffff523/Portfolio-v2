import { motion } from "framer-motion";
import { about, services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import Icon from "./Icon";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div variants={fadeIn("right", index * 0.15, 0.75)} className="w-full xs:w-[250px]">
    <div className="green-pink-gradient rounded-[20px] p-[1px] shadow-card transition-transform duration-300 hover:-translate-y-2">
      <div className="flex min-h-[180px] flex-col gap-4 xs:min-h-[260px] items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
          <Icon name={icon} size={32} />
        </div>
        <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
      </div>
    </div>
  </motion.div>
);

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="section-sub">Introduction</p>
      <h2 className="section-head">
        Overview<span className="text-accent">.</span>
      </h2>
    </motion.div>

    <motion.div variants={fadeIn("", 0.1, 1)} className="mt-4 max-w-3xl space-y-4">
      {about.map((p) => (
        <p key={p} className="text-[17px] leading-[30px] text-secondary">
          {p}
        </p>
      ))}
    </motion.div>

    <div className="mt-20 flex flex-wrap justify-center gap-10 lg:justify-start">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
