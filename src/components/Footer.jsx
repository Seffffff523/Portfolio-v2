import { profile, socials } from "../constants";
import Icon from "./Icon";

const Footer = () => (
  <footer className="relative z-10 border-t border-white/10 bg-primary/80 backdrop-blur">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-center sm:flex-row sm:px-16">
      <p className="text-[14px] text-secondary">
        © {new Date().getFullYear()} Designed &amp; Built by <span className="font-semibold text-white">{profile.name}</span>
      </p>
      <div className="flex gap-3">
        {socials.map((s) => (
          <a
            key={s.url}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${s.name} ${s.handle}`}
            className="text-secondary transition-colors hover:text-accent"
          >
            <Icon name={s.icon} size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
