import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { profile, socials } from "../constants";
import Icon from "./Icon";

const useTypewriter = (words, speed = 80, pause = 1600) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
      return;
    }
    const t = setTimeout(
      () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, speed, pause]);

  return text;
};

// One button per platform in the hero; the contact section lists every account.
const heroSocials = socials.filter((s, i, arr) => arr.findIndex((o) => o.icon === s.icon) === i);

const Hero = () => {
  const typed = useTypewriter(profile.roles);

  return (
    <section className="bg-hero-pattern relative mx-auto flex min-h-screen w-full items-center">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-28 pt-28 sm:px-16 md:flex-row md:gap-8">
        <div className="flex flex-row items-start gap-5 md:flex-1">
          <div className="mt-5 hidden flex-col items-center justify-center xs:flex">
            <div className="h-5 w-5 rounded-full bg-accent shadow-glow" />
            <div className="h-40 w-1 bg-gradient-to-b from-accent to-transparent sm:h-80" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="mb-2 text-[16px] font-medium text-secondary sm:text-[18px]">Hello World! 👋</p>
            <h1 className="font-display text-[40px] font-black leading-[1.1] text-white xs:text-[50px] sm:text-[60px] lg:text-[76px]">
              Hi, I'm <span className="gradient-text">{profile.shortName}</span>
            </h1>
            <p className="mt-3 h-8 font-display text-[20px] font-semibold text-white-100 sm:text-[26px]">
              {typed}
              <span className="ml-0.5 inline-block w-[3px] animate-pulse bg-accent">&nbsp;</span>
            </p>
            <p className="mt-4 max-w-xl text-[16px] leading-[28px] text-secondary sm:text-[18px]">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/#projects"
                className="green-pink-gradient group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-6 py-3 font-semibold text-primary"
              >
                <span className="absolute h-0 w-0 rounded-full bg-white opacity-10 transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56" />
                <span className="relative">View my work</span>
                <ArrowRight size={18} className="relative transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/#contact"
                className="rounded-xl border border-accent/40 px-6 py-3 font-semibold text-white transition-colors hover:border-accent hover:bg-accent/10"
              >
                Let's Connect
              </Link>
            </div>

            <div className="mt-8 flex gap-3">
              {heroSocials.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="rounded-full border border-accent/20 bg-tertiary p-3 transition-colors duration-200 hover:border-accent hover:bg-accent/10"
                >
                  <Icon name={s.icon} size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex w-full flex-1 justify-center md:w-auto md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-accent/20 to-violet/30 blur-3xl" />
            <div className="relative h-[250px] w-[250px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-[4px] shadow-glow md:h-[350px] md:w-[350px]">
              <img
                src={profile.image}
                alt={profile.name}
                fetchpriority="high"
                className="h-full w-full rounded-full border-4 border-primary bg-tertiary object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 hidden w-full items-center justify-center sm:flex">
        <Link to="/#about" aria-label="Scroll to About">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
