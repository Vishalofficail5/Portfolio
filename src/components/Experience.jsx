import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";
import { experience, education, certifications } from "../data/experience";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function TimelineColumn({ title, icon: Icon, children }) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="glass flex h-10 w-10 items-center justify-center rounded-xl text-[#38bdf8]">
          <Icon size={16} />
        </span>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="relative border-l border-white/10 pl-7">{children}</div>
    </div>
  );
}

function TimelineItem({ index, title, subtitle, period, points }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative mb-9 last:mb-0"
    >
      <span className="absolute -left-[1.97rem] top-1 h-3 w-3 rounded-full border-2 border-[#0f172a] bg-gradient-to-br from-[#38bdf8] to-[#8b5cf6]" />
      <p className="font-mono text-xs tracking-wide text-[#38bdf8]">{period}</p>
      <h4 className="mt-1 text-base font-semibold text-white">{title}</h4>
      <p className="text-sm text-slate-400">{subtitle}</p>
      {points && (
        <ul className="mt-2 space-y-1.5">
          {points.map((p, i) => (
            <li key={i} className="text-sm leading-relaxed text-slate-400">
              <span className="text-[#8b5cf6]">›</span> {p}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow mb-3">career.timeline()</p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <TimelineColumn title="Experience" icon={FaBriefcase}>
            {experience.map((item, i) => (
              <TimelineItem
                key={item.role}
                index={i}
                title={item.role}
                subtitle={item.org}
                period={item.period}
                points={item.points}
              />
            ))}
          </TimelineColumn>

          <TimelineColumn title="Education" icon={FaGraduationCap}>
            {education.map((item, i) => (
              <TimelineItem
                key={item.degree}
                index={i}
                title={item.degree}
                subtitle={item.org}
                period={item.period}
              />
            ))}
          </TimelineColumn>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass mt-14 rounded-2xl p-7 sm:p-8"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="glass flex h-10 w-10 items-center justify-center rounded-xl text-[#38bdf8]">
              <FaCertificate size={16} />
            </span>
            <h3 className="text-xl font-semibold text-white">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="cursor-interactive rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-[#38bdf8]/50 hover:text-white"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
