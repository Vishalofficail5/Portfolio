import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.12 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.03 }}
        className="tilt-card cursor-interactive glass group relative overflow-hidden rounded-2xl"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/10 to-transparent" />
        </div>

        <div className="p-6" style={{ transform: "translateZ(20px)" }}>
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[0.65rem] text-[#38bdf8]"
              >
                {t}
              </span>
            ))}
          </div>

          {project.stats && (
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {project.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`rounded-lg border px-2.5 py-2 text-center ${
                    i === 0
                      ? "border-[#38bdf8]/40 bg-[#38bdf8]/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <p className="font-mono text-sm font-semibold text-white">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-[0.65rem] text-slate-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary cursor-interactive !px-4 !py-2 text-xs"
            >
              <FaGithub size={13} /> Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-primary cursor-interactive !px-4 !py-2 text-xs"
              >
                <FaExternalLinkAlt size={11} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
