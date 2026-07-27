import { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./SaveFeedback.css";

const getMessage = (label) => {
  const action = label.toLowerCase();
  if (action.includes("draft")) return "Draft saved successfully.";
  if (action.includes("publish")) return "Your load has been published successfully.";
  if (action.includes("password")) return "Password changes saved successfully.";
  if (action.includes("export")) return "Your report is being prepared.";
  if (action.includes("send") || action.includes("reset")) return "Your request has been sent successfully.";
  return "Changes saved successfully.";
};

const isSaveAction = (label) => /save|publish|update|send|export|submit|reset/.test(label.toLowerCase());

const SaveFeedback = () => {
  const [message, setMessage] = useState("");
  const timer = useRef();
  const show = (label) => {
    if (!isSaveAction(label)) return;
    setMessage(getMessage(label));
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setMessage(""), 3500);
  };

  useEffect(() => {
    const handleSubmit = (event) => show(event.submitter?.innerText || "Save");
    const handleClick = (event) => {
      const button = event.target.closest("button");
      if (button) show(button.innerText || "Save");
    };
    document.addEventListener("submit", handleSubmit, true);
    document.addEventListener("click", handleClick, true);
    return () => { document.removeEventListener("submit", handleSubmit, true); document.removeEventListener("click", handleClick, true); window.clearTimeout(timer.current); };
  }, []);

  return message ? <div className="save-feedback" role="status"><FaCheckCircle /><span>{message}</span></div> : null;
};

export default SaveFeedback;
