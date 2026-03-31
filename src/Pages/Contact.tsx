import EmailForm from "../components/Contact/EmailForm";

export default function Contact() {
  return (
    <div className="flex flex-col gap-6 ">
      {/* top section */}
      <section className="flex gap-2 mb-6">
        <span className="rounded-full self-center bg-rose-500 w-2 h-2"></span>
        <p className="text-stone-400 font-mono text-[12px] tracking-[0.2em]">
          CONTACT
        </p>
        <span className="self-end border-t border-stone-700 w-full h-2.5"></span>
      </section>

      {/* bold heading */}
      <h1 className="text-stone-300 font-bold text-4xl">Get in Touch</h1>
      <p className="text-stone-300 text-sm tracking-tight font-mono leading-6">
        I'm currently open to new opportunities and collaborations. Whether you
        have a project in mind, want to discuss potential partnerships, or just
        want to say hello, feel free to reach out!
      </p>

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
