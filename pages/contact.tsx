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

  const buttonStyle = "block border-[2mm] px-10 py-5 rounded-full text-2xl tracking-wider transition-all "
  const inactiveButtonStyle = "bg-indigo-500 text-indigo-300 border-indigo-800 hover:cursor-not-allowed"
  const activeButtonStyle = "border-slate-800 bg-violet-200 text-dark hover:bg-violet-100 hover:text-black hover:scale-105 shadow-lg"

  return (
    <Main>
      <article className="p-8 max-w-[800px] mx-auto">
        <h1>Contact me</h1>
        <div className="flex items-center justify-center">
          <form id="contact-me-form" className="max-w-[800px] my-8 border-[2mm] bg-indigo-600 border-slate-800 rounded-3xl p-8 text-light flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <FormInput type="text" label="Name*" state={name} setState={setName} />
              <FormInput type="email" label="Email*" state={email} setState={setEmail} />
            </div>
            <FormInput type="textarea" label="Message*" state={message} setState={setMessage} />
            <button disabled={!valid} className={`${buttonStyle} ${valid ? activeButtonStyle : inactiveButtonStyle}`}>Submit</button>
          </form>
        </div>
      </article>
    </Main>
  )
}

export default Contact;