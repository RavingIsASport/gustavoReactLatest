import { GrSend } from "react-icons/gr";
import { sendEmail } from "./emailUtil";
import type { EmailData } from "./emailUtil";

let labelStyle = "text-sm text-stone-400 font-medium";
let inputStyle =
  "text-stone-300 border border-stone-300 rounded-md p-2 bg-stone-800  focus:outline-none focus:border-rose-500";

export default function EmailForm() {
  async function handleSubmit(event: any): Promise<void> {
    event.preventDefault();

    let messageData = new FormData(event.target);

    let data: EmailData = {
      name: String(messageData.get("name")),
      email: String(messageData.get("email")),
      subject: String(messageData.get("subject")),
      message: String(messageData.get("message")),
    };

    try {
      let res = await sendEmail(data);
      console.log("Email sent successfully", res);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  return (
    <>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <label className={labelStyle}>Name *</label>
        <input type="text" className={inputStyle} name="name" required />
        <label className={labelStyle}>Email *</label>
        <input type="email" className={inputStyle} name="email" required />
        <label className={labelStyle}>Subject </label>
        <input type="text" className={inputStyle} name="subject" />
        <label className={labelStyle}>Message *</label>
        <textarea className={inputStyle} name="message" required></textarea>
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
