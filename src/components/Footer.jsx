export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} Vishal. Built with React & Framer Motion.
        </p>
        <p className="eyebrow text-[0.65rem]">status: open_to_work</p>
      </div>
    </footer>
  );
}
