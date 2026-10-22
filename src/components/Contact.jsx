import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { profile, socials } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import Icon from "./Icon";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-primary/60 px-5 py-4 text-white placeholder:text-secondary/70 outline-none transition-colors focus:border-accent";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <motion.form variants={fadeIn("up", 0.2, 0.8)} onSubmit={handleSubmit} className="glass mx-auto flex max-w-3xl flex-col gap-5 p-6 sm:p-10">
      <h3 className="font-display text-[24px] font-bold text-white">Send a Message</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
        <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" className={inputClass} />
      </div>
      <textarea
        required
        rows={6}
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="What would you like to say?"
        className={`${inputClass} resize-none`}
      />
      <button
        type="submit"
        className="green-pink-gradient inline-flex w-fit items-center gap-2 rounded-xl px-8 py-3 font-bold text-primary shadow-glow transition-transform hover:scale-[1.03]"
      >
        Send Message <Send size={18} />
      </button>
    </motion.form>
  );
};

const Contact = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="section-sub text-center">Get in Touch</p>
      <h2 className="section-head text-center">
        Let's Connect<span className="text-accent">.</span>
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-[17px] leading-[30px] text-secondary">
        Have a project in mind, an opportunity, or just want to say hi? Find me online — my inbox is always open.
      </p>
    </motion.div>

    <p className="mb-4 mt-14 text-center text-xs font-semibold uppercase tracking-widest text-secondary">Find Me Online</p>
    <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {socials.map((s, i) => (
        <motion.a
          key={s.url}
          variants={fadeIn("up", i * 0.1, 0.5)}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          className="contact-card group flex cursor-pointer items-center gap-4 px-5 py-4 no-underline"
        >
          <span
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
            style={{ background: `${s.color}1f`, color: s.color }}
          >
            <Icon name={s.icon} size={22} />
          </span>
          <span className="min-w-0">
            <span className="mb-0.5 block text-sm font-bold leading-tight text-white">{s.name}</span>
            <span className="block truncate text-[13px] text-secondary">{s.handle}</span>
          </span>
        </motion.a>
      ))}
    </div>

    {profile.email && <ContactForm />}
  </>
);

export default SectionWrapper(Contact, "contact");
