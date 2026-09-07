import { HiOutlineExternalLink } from "react-icons/hi";
import SectionHeader from "../components/Global/SectionHeader";
import { summary, skills, certifications } from "../data/resume";

export default function About() {
  return (
    <div className="flex flex-col gap-6 pb-24">
      <SectionHeader label="ABOUT" />

      <h1 className="text-stone-300 font-bold text-4xl">About Me</h1>

      <p className="text-stone-300 text-sm tracking-tight font-mono leading-7 max-w-3xl">
        {summary}
      </p>

      {/* Skills */}
      <div className="mt-10">
        <h2 className="text-stone-100 font-bold text-xl mb-6">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="border border-stone-800 rounded-lg p-5 hover:border-stone-700 transition-colors"
            >
              <p className="text-rose-500 font-mono text-[11px] tracking-[0.2em] uppercase mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-stone-300 text-xs font-mono bg-stone-800/70 border border-stone-700 rounded-full px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-6">
        <h2 className="text-stone-100 font-bold text-xl mb-6">
          Certifications
        </h2>
        <ul className="flex flex-col gap-3">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="flex items-center justify-between gap-4 border-b border-stone-800 pb-3"
            >
              <span className="text-stone-300 text-sm">{cert.name}</span>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-rose-500 hover:text-rose-400 font-mono text-xs whitespace-nowrap"
                >
                  View Credential
                  <HiOutlineExternalLink />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
