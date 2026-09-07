import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { contact } from "../../data/resume";

export default function Footer() {
  return (
    <div className="bg-stone-950 text-stone-300 py-8 px-8 md:w-[90%] md:mx-auto">
      <p className="text-stone-300 font-mono text-[12px] tracking-[0.3em] mb-6">
        // Inquire
      </p>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-stone-300 text-md font-mono mb-3">
            Feel free to reach out for collaborations, inquiries, or just to
            say hello!
          </p>
          <p className="text-stone-400 font-mono text-[14px]">
            Email:{" "}
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-rose-400"
            >
              {contact.email}
            </a>
          </p>
          <p className="text-stone-400 font-mono text-[14px]">
            Phone: {contact.phone}
          </p>
        </div>

        <div className="flex gap-4 text-xl">
          <a target="_blank" rel="noreferrer" href={contact.linkedin}>
            <FaLinkedin className="text-stone-400 hover:text-stone-100" />
          </a>
          <a target="_blank" rel="noreferrer" href={contact.github}>
            <FaGithub className="text-stone-400 hover:text-stone-100" />
          </a>
        </div>
      </div>

      <div className="border-t border-stone-800 mt-8 pt-6">
        <p className="text-stone-500 font-mono text-[12px]">
          Designed and developed by Gustavo Tech.
        </p>
        <p className="text-stone-500 font-mono text-[12px]">
          © 2026 Gustavo Tech. All rights reserved.
        </p>
      </div>
    </div>
  );
}
