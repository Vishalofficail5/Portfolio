import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const SOCIALS = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "vishal05.official@gmail.com",
    href: "mailto:vishal05.official@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/vishal05official",
    href: "https://linkedin.com/in/vishal05official",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Vishalofficail5",
    href: "https://github.com/Vishalofficail5",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "New Delhi, India",
    href: null,
  },
];

function RippleButton({ children, ...props }) {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    const ripple = {
      id,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      size: Math.max(rect.width, rect.height) * 1.4,
    };
    setRipples((r) => [...r, ripple]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650);
  };

  return (
    <button
      {...props}
      onClick={(e) => {
        addRipple(e);
        props.onClick?.(e);
      }}
      className={`btn-primary cursor-interactive relative w-full justify-center ${
        props.className || ""
      }`}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
          }}
        />
      ))}
      {children}
    </button>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", message: "" });
    }, 2200);
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow mb-3">contact.send()</p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Let's <span className="gradient-text">Build Something</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Got a role, a project, or just want to talk shop? My inbox is
            open.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm text-slate-400">
                  Name
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="field"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm text-slate-400">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="field"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-slate-400">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the project or role..."
                  className="field resize-none"
                />
              </div>
            </div>

            <div className="mt-6">
              <RippleButton type="submit">
                {status === "sent" ? "Message sent ✓" : "Send Message"}
              </RippleButton>
            </div>
          </motion.form>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass flex flex-col gap-5 rounded-2xl p-7 sm:p-9"
          >
            {SOCIALS.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="cursor-interactive group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/5">
                  <span className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#38bdf8] transition-all duration-300 group-hover:text-white group-hover:shadow-[0_0_18px_rgba(56,189,248,0.6)]">
                    <Icon size={17} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-slate-200">
                      {value}
                    </p>
                  </div>
                </div>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
