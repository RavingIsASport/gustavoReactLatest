import { HiOutlineExternalLink } from "react-icons/hi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import SectionHeader from "../components/Global/SectionHeader";
import CredlyBadge from "../components/About/CredlyBadge";
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
        <div className="flex flex-wrap items-start gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center text-center gap-3 border border-stone-800 rounded-lg p-4 w-[180px] hover:border-stone-700 transition-colors"
            >
              {cert.credlyId ? (
                <CredlyBadge badgeId={cert.credlyId} />
              ) : (
                <div className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-stone-800/70 border border-stone-700">
                  <HiOutlineAcademicCap className="text-rose-500 text-4xl" />
                </div>
              )}

              <div className="flex flex-col gap-1">
                <p className="text-stone-200 text-xs font-bold leading-snug">
                  {cert.name}
                </p>
                <p className="text-stone-500 text-[11px] font-mono">
                  {cert.issuer}
                </p>
              </div>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-rose-500 hover:text-rose-400 font-mono text-[11px] whitespace-nowrap"
                >
                  View Credential
                  <HiOutlineExternalLink />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
