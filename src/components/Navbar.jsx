import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActive(pathname === "/projects" ? "projects" : "");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.dataset.section)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("[data-section]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const links = navLinks.map((nav) => (
    <li key={nav.id}>
      <Link
        to={`/#${nav.id}`}
        onClick={() => setOpen(false)}
        className={`relative text-[16px] font-medium transition-colors hover:text-white ${
          active === nav.id ? "text-white" : "text-secondary"
        }`}
      >
        {nav.title}
        {active === nav.id && (
          <span className="green-pink-gradient absolute -bottom-1.5 left-0 h-[2px] w-full rounded" />
        )}
      </Link>
    </li>
  ));

  return (
    <nav
      className={`fixed top-0 z-20 flex w-full items-center px-6 py-5 transition-all duration-300 sm:px-16 ${
        scrolled || open ? "bg-primary/80 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display text-[18px] font-bold text-primary">
            {profile.initials}
          </span>
          <p className="flex cursor-pointer text-[18px] font-bold text-white">
            {profile.shortName}
            <span className="hidden sm:block">&nbsp;| Portfolio</span>
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex">{links}</ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
          <div
            className={`${
              open ? "flex" : "hidden"
            } glass absolute right-0 top-20 mx-4 my-2 min-w-[160px] bg-tertiary p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">{links}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
