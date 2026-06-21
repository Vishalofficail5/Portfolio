import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow mb-3">projects.map()</p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            A few projects that show how I think about structure, data and
            the parts users actually touch.
          </p>
        </motion.div>

        <div
          className={
            projects.length === 1
              ? "mx-auto max-w-xl"
              : "grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {projects.length === 1 && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 text-center font-mono text-xs text-slate-500"
          >
            more_projects.push() — coming soon
          </motion.p>
        )}
      </div>
    </section>
  );
}
