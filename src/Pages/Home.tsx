import { Link } from "react-router";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiAngular,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiTailwindcss,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { experience } from "../data/resume";

const stats = [
  { label: "Years Building", value: "3+" },
  { label: "Live Projects", value: "2" },
  { label: "Certifications", value: "5" },
];

const techStack = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Angular", icon: SiAngular },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "GraphQL", icon: SiGraphql },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
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

      {/* Tech Stack */}
      <div className="w-full mt-16 border-t border-stone-800 pt-10">
        <p className="text-stone-500 font-mono text-[11px] tracking-[0.2em] uppercase mb-6">
          Tools &amp; Technologies
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 w-full">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center gap-2 border border-stone-800 rounded-lg py-5 hover:border-stone-700 hover:bg-stone-900/50 transition-colors"
            >
              <tech.icon className="text-2xl text-stone-300" />
              <span className="text-stone-500 text-[11px] font-mono">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Experience */}
      <div className="w-full mt-16 border-t border-stone-800 pt-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-stone-500 font-mono text-[11px] tracking-[0.2em] uppercase">
            Recent Work
          </p>
          <Link
            to="/experience"
            className="flex items-center gap-1 text-rose-500 hover:text-rose-400 font-mono text-xs whitespace-nowrap"
          >
            Full Experience
            <HiArrowUpRight />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 w-full">
          {experience.map((job) => (
            <div
              key={job.company}
              className="flex flex-col gap-3 border border-stone-800 rounded-lg p-5 hover:border-stone-700 transition-colors"
            >
              <div>
                <h3 className="text-stone-100 font-bold">{job.role}</h3>
                <p className="text-stone-400 text-sm">{job.company}</p>
              </div>
              <p className="text-stone-500 text-xs leading-6">
                {job.highlights[0]}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-stone-300 text-[11px] font-mono bg-stone-800/70 border border-stone-700 rounded-full px-2.5 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
