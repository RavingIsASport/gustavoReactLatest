export default function Home() {
  return (
    <div className="flex flex-col items-start gap-4">
      <p className="text-stone-300 font-mono text-[12px] tracking-[0.3em] mb-6">
        // Full Stack Developer
      </p>
      <h1 className="text-5xl font-bold text-stone-100 leading-[1.1]">
        Hi,
        <br />
        I'm <span className=" text-rose-500 ">Gustavo</span>.
      </h1>
      <p className="text-stone-300 text-md font-mono mt-4">
        I build web applications with{" "}
        <span className="text-sky-300">React</span>,{" "}
        <span className="text-emerald-500">Node.js</span>, and{" "}
        <span className="text-blue-400">TypeScript</span>.
      </p>
    </div>
  );
}
