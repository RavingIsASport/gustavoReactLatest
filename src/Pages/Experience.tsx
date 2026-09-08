import SectionHeader from "../components/Global/SectionHeader";
import { experience, education } from "../data/resume";

export default function Experience() {
  return (
    <div className="flex flex-col gap-6 pb-24">
      <SectionHeader label="EXPERIENCE" />

      <h1 className="text-stone-300 font-bold text-4xl">
        Work &amp; Education
      </h1>

      {/* Work Experience */}
      <div className="mt-8 flex flex-col gap-10">
        {experience.map((job) => (
          <div
            key={job.company}
            className="relative pl-6 border-l border-stone-800"
          >
            <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-rose-500"></span>

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <h3 className="text-stone-100 font-bold text-lg">
                {job.role} —{" "}
                <span className="text-stone-300 font-normal">
                  {job.company}
                </span>
              </h3>
              <span className="text-stone-500 font-mono text-xs whitespace-nowrap">
                {job.period}
              </span>
            </div>

            <ul className="mt-3 flex flex-col gap-2">
              {job.highlights.map((point) => (
                <li
                  key={point}
                  className="text-stone-400 text-sm leading-6 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-stone-600"
                >
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {job.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-stone-300 text-xs font-mono bg-stone-800/70 border border-stone-700 rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mt-10">
        <h2 className="text-stone-100 font-bold text-2xl mb-6">Education</h2>
        <div className="flex flex-col gap-6">
          {education.map((school) => (
            <div
              key={school.school}
              className="relative pl-6 border-l border-stone-800"
            >
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-sky-400"></span>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                <h3 className="text-stone-100 font-bold text-lg">
                  {school.school}
                </h3>
                <span className="text-stone-500 font-mono text-xs whitespace-nowrap">
                  {school.period}
                </span>
              </div>
              <p className="text-stone-400 text-sm leading-6 mt-2">
                {school.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
