import { Link } from "react-router";
import { HiArrowUpRight } from "react-icons/hi2";

const stats = [
  { label: "Years Building", value: "3+" },
  { label: "Live Projects", value: "2" },
  { label: "Certifications", value: "5" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-4 pb-16">
      <p className="text-stone-300 font-mono text-[12px] tracking-[0.3em] mb-2">
        // Full Stack Software Engineer
      </p>

      <h1 className="text-5xl md:text-6xl font-bold text-stone-100 leading-[1.1]">
        Hi,
        <br />
        I'm <span className="text-rose-500">Gustavo</span>.
      </h1>

      <p className="text-stone-300 text-md font-mono mt-4">
        I build web applications with{" "}
        <span className="text-sky-300">React</span>,{" "}
        <span className="text-emerald-500">Node.js</span>, and{" "}
        <span className="text-blue-400">TypeScript</span>.
      </p>

      <p className="text-stone-400 text-sm leading-7 mt-6 max-w-2xl">
        Motivated and detail-oriented software developer with hands-on
        experience building full-stack web applications using JavaScript,
        React, Angular, Node.js, and Express. Comfortable working across the
        stack with MySQL and MongoDB, turning ideas into functional,
        user-focused solutions — and always looking to solve complex problems
        with clean, maintainable code.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        <Link
          to="/experience"
          className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-stone-100 font-bold font-mono text-sm py-3 px-6 rounded-md transition-colors"
        >
          View My Work
          <HiArrowUpRight />
        </Link>
        <Link
          to="/contact"
          className="flex items-center gap-2 border border-stone-600 hover:border-stone-400 text-stone-200 font-mono text-sm py-3 px-6 rounded-md transition-colors"
        >
          Get In Touch
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-16 w-full max-w-xl border-t border-stone-800 pt-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-stone-100">
              {stat.value}
            </span>
            <span className="text-stone-500 font-mono text-[11px] tracking-widest uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
