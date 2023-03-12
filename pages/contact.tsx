import Main from "../components/main";
import FormInput from "../components/formInput";
import { useState, useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (name && email && message) {
      setValid(true);
    } else {
      setValid(false);
    }
  })

  const buttonStyle = "block border-[2mm] px-10 py-5 rounded-full text-2xl tracking-wider md:text-3xl md:py-7 md:px-12 transition-all "
  const inactiveButtonStyle = "bg-indigo-500 text-indigo-300 border-indigo-800 hover:cursor-not-allowed"
  const activeButtonStyle = "border-slate-800 bg-violet-200 text-dark hover:bg-violet-100 hover:text-black hover:scale-105 shadow-lg"

  return (
    <Main>
      <div className="min-h-[110vh] flex items-center justify-center">
        <form id="contact-me-form" className="max-w-[800px] border-[2mm] bg-indigo-600 border-slate-800 rounded-3xl p-8 text-light flex flex-col items-center justify-center gap-8">
          <FormInput type="text" label="Name*" state={name} setState={setName} />
          <FormInput type="email" label="Email*" state={email} setState={setEmail} />
          <FormInput type="textarea" label="Message*" state={message} setState={setMessage} />
          <button className={`${buttonStyle} ${valid ? activeButtonStyle : inactiveButtonStyle}`}>Submit</button>
        </form>
      </div>
    </Main>
  )
}

export default Contact;