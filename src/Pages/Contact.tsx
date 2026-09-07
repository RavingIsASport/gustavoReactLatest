import { HiOutlineMail, HiOutlinePhone, HiOutlineGlobeAlt } from "react-icons/hi";
import EmailForm from "../components/Contact/EmailForm";
import SectionHeader from "../components/Global/SectionHeader";
import { contact } from "../data/resume";

export default function Contact() {
  return (
    <div className="flex flex-col gap-6 ">
      <SectionHeader label="CONTACT" />

      {/* bold heading */}
      <h1 className="text-stone-300 font-bold text-4xl">Get in Touch</h1>
      <p className="text-stone-300 text-sm tracking-tight font-mono leading-6">
        I'm currently open to new opportunities and collaborations. Whether you
        have a project in mind, want to discuss potential partnerships, or just
        want to say hello, feel free to reach out!
      </p>

      {/* direct contact details */}
      <div className="flex flex-col sm:flex-row gap-4 mt-2 text-sm">
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-2 text-stone-300 hover:text-rose-400 transition-colors"
        >
          <HiOutlineMail className="text-rose-500" />
          {contact.email}
        </a>
        <a
          href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
          className="flex items-center gap-2 text-stone-300 hover:text-rose-400 transition-colors"
        >
          <HiOutlinePhone className="text-rose-500" />
          {contact.phone}
        </a>
        <a
          href={`https://${contact.site}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-stone-300 hover:text-rose-400 transition-colors"
        >
          <HiOutlineGlobeAlt className="text-rose-500" />
          {contact.site}
        </a>
      </div>

      {/* contact form */}
      <section className="mt-10 border border-stone-700 rounded-lg p-6 w-full mb-28 md:mx-auto md:w-3/4 lg:w-1/2">
        <div className="flex items-center gap-2 mb-10 border-b border-stone-700 pb-8">
          <span className="rounded-full bg-rose-500 w-2 h-2"></span>
          <span className="rounded-full bg-yellow-500 w-2 h-2"></span>
          <span className="rounded-full bg-green-500 w-2 h-2 mr-2.5"></span>
          <p className="text-stone-400 font-mono text-xs tracking-tigher">
            ~/contact — commit message
          </p>
        </div>
        <EmailForm />
      </section>
    </div>
  );
}
