import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaFolderOpen } from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";
import { floatingIcons } from "../data/skills";

const ROLES = [
  "Python Developer",
  "AI & ML Enthusiast",
  "Data Science Undergrad",
  "Problem Solver",
];

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        speed
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        speed / 2
      );
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => i + 1);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

const FLOAT_POSITIONS = [
  { top: "8%", left: "6%", delay: 0 },
  { top: "18%", left: "88%", delay: 0.6 },
  { top: "62%", left: "90%", delay: 1.1 },
  { top: "78%", left: "10%", delay: 0.3 },
  { top: "40%", left: "4%", delay: 0.9 },
  { top: "85%", left: "78%", delay: 1.4 },
];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div
          className="blob blob-anim h-[26rem] w-[26rem]"
          style={{ background: "#38bdf8", top: "-6rem", left: "-6rem" }}
        />
        <div
          className="blob blob-anim h-[26rem] w-[26rem]"
          style={{
            background: "#8b5cf6",
            bottom: "-8rem",
            right: "-6rem",
            animationDelay: "4s",
          }}
        />
        <ParticlesBackground />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 -z-[5] hidden sm:block">
        {floatingIcons.map(({ icon: Icon, color }, i) => {
          const pos = FLOAT_POSITIONS[i % FLOAT_POSITIONS.length];
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ top: pos.top, left: pos.left }}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 0.85, y: [0, -18, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: pos.delay },
                y: {
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: pos.delay,
                },
              }}
            >
              <div className="glass flex h-12 w-12 items-center justify-center rounded-xl shadow-lg">
                <Icon size={20} style={{ color }} />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.p
          className="eyebrow mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          $ whoami
        </motion.p>

        <motion.h1
          className="text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I'm <span className="gradient-text">Vishal</span>
        </motion.h1>

        <motion.div
          className="mt-5 flex items-center gap-1 text-xl font-medium text-slate-300 sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="font-mono text-[#38bdf8]">{">"}</span>
          <span>AI & Data Science Undergrad</span>
        </motion.div>

        {/* Terminal */}
        <motion.div
          className="glass mt-8 w-full max-w-xl overflow-hidden rounded-xl shadow-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-2 font-mono text-[0.7rem] text-slate-400">
              vishal@dev: ~
            </span>
          </div>
          <div className="px-5 py-5 font-mono text-sm sm:text-base">
            <span className="text-[#8b5cf6]">vishal@dev</span>
            <span className="text-slate-500">:~$ </span>
            <span className="text-slate-200">currently_building_as</span>
            <div className="mt-2 text-lg text-[#38bdf8] sm:text-xl">
              {typed}
              <span className="type-cursor h-5 align-middle" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary cursor-interactive"
          >
            <FaFolderOpen size={14} /> View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="btn-secondary cursor-interactive"
          >
            <FaDownload size={14} /> Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
