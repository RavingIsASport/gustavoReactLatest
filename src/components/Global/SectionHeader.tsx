export default function SectionHeader({ label }: { label: string }) {
  return (
    <section className="flex items-center gap-2 mb-6">
      <span className="rounded-full self-center bg-rose-500 w-2 h-2"></span>
      <p className="text-stone-400 font-mono text-[12px] tracking-[0.2em]">
        {label}
      </p>
      <span className="self-end border-t border-stone-700 w-full h-2.5"></span>
    </section>
  );
}
