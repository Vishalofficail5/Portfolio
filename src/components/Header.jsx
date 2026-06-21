import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact Me" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 transition-all duration-300 sm:px-7 ${
          scrolled ? "glass-strong py-2.5" : "py-2 bg-transparent border border-transparent"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="cursor-interactive flex flex-col items-start leading-none"
          aria-label="Go to home section"
        >
          <span className="pixel-font text-[0.85rem] sm:text-base text-white">
            VISHAL
          </span>
          <span className="mt-1 font-mono text-[0.55rem] sm:text-[0.6rem] tracking-[0.25em] uppercase text-[#38bdf8]">
            Portfolio
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link cursor-interactive flex items-center gap-2 ${
                active === item.id ? "active" : ""
              }`}
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-dot"
                  className="nav-dot"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleNavClick("contact")}
          className="btn-primary cursor-interactive hidden !py-2 !px-4 text-xs md:inline-flex"
        >
          Let's Talk
        </button>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="cursor-interactive flex h-9 w-9 items-center justify-center rounded-lg text-white md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaXmark size={18} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars size={18} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl glass-strong md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`cursor-interactive rounded-lg px-3 py-3 text-left text-sm font-medium ${
                    active === item.id
                      ? "bg-white/5 text-white"
                      : "text-slate-400"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
