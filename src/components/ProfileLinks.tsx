import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";

export default function ProfileLinks() {
  // Get the current time and update it every second
  let [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }),
  );
  // Update date state
  function updateTime() {
    setTime(
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),
    );
  }
  //set interval to update time every second
  setInterval(updateTime, 1000);

  return (
    <div className="flex justify-end gap-1.5 text-2xl px-2 p-1 md:gap-3">
      <span className="text-stone-300 text-base font-mono hidden md:flex">
        {time}
      </span>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/gustavo-garcia-76b264217/"
      >
        <FaLinkedin className="text-stone-300 hover:text-stone-100" />
      </a>
      <a target="_blank" href="https://github.com/RavingIsASport">
        <FaGithub className="text-stone-300 hover:text-stone-100" />
      </a>
      <span className="rounded-full self-center bg-emerald-600 w-2 h-2 animate-pulse"></span>
    </div>
  );
}
