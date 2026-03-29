import { GrSend } from "react-icons/gr";

let labelStyle = "text-sm text-stone-400 font-medium";
let inputStyle =
  "text-stone-300 border border-stone-300 rounded-md p-2 bg-stone-800  focus:outline-none focus:border-rose-500";

export default function EmailForm() {
  return (
    <>
      <form className="flex flex-col gap-3">
        <label className={labelStyle}>Name *</label>
        <input type="text" className={inputStyle} required />
        <label className={labelStyle}>Email *</label>
        <input type="email" className={inputStyle} required />
        <label className={labelStyle}>Subject </label>
        <input type="text" className={inputStyle} />
        <label className={labelStyle}>Message *</label>
        <textarea className={inputStyle} required></textarea>
        <button
          type="submit"
          className="flex justify-center bg-rose-500 hover:bg-rose-600 text-stone-100 font-bold py-2 px-4 rounded-md mt-10"
        >
          <GrSend className="self-center mr-4 text-xl" />
          Send
        </button>
      </form>
    </>
  );
}
