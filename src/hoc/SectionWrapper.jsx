import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, id) =>
  function Wrapped(props) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="section"
        data-section={id}
      >
        {/* Offset anchor so the fixed navbar doesn't cover the heading. */}
        <span className="absolute -top-4 block" id={id}>
          &nbsp;
        </span>
        <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;
