import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { skills } from "../data/skills";

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{display}%</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow mb-3">about_me.js</p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Who is <span className="gradient-text">Vishal?</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Photo placeholder */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-fit"
          >
            <div className="blob h-64 w-64" style={{ background: "#38bdf8", top: "-2rem", left: "-2rem" }} />
            <div className="blob h-64 w-64" style={{ background: "#8b5cf6", bottom: "-2rem", right: "-2rem" }} />
            <div className="glass relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-3xl sm:h-80 sm:w-80">
              <FaUser size={90} className="text-slate-500" />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(56,189,248,0.12), rgba(139,92,246,0.12))",
                }}
              />
            </div>
          </motion.div>

          {/* Bio + skills */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg leading-relaxed text-slate-300">
                I'm an AI & Data Science undergraduate working across
                Python, C, and the front-end basics — HTML and CSS — with
                an NSIC AutoCAD certification and a Diploma in Mechanical
                Engineering behind me before I made the switch.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Most of my hands-on work right now is in applied ML —
                benchmarking vision-language models, building evaluation
                pipelines, and figuring out what actually holds up outside
                a paper's reported numbers. I'm ready to bring that into a
                professional setting.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.06, delayChildren: 0.2 }}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="skill-card glass cursor-interactive rounded-xl p-4"
                >
                  <skill.icon size={26} style={{ color: skill.color }} />
                  <p className="mt-3 text-sm font-semibold text-white">
                    {skill.name}
                  </p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #38bdf8, #8b5cf6)",
                      }}
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <p className="mt-1.5 font-mono text-xs text-slate-400">
                    <Counter value={skill.level} />
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
