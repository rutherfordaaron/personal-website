import Main from "../components/main";
import FormInput from "../components/formInput";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<JSX.Element | null>(null)

  useEffect(() => {
    if (name && email && message) {
      setValid(true);
    } else {
      setValid(false);
    }
  });

  const buttonStyle = "block border-[2mm] px-10 py-5 rounded-full text-2xl tracking-wider transition-all "
  const inactiveButtonStyle = "bg-indigo-500 text-indigo-300 border-indigo-800 hover:cursor-not-allowed"
  const activeButtonStyle = "border-slate-800 bg-violet-200 text-dark hover:bg-violet-100 hover:text-black hover:scale-105 shadow-lg";

  const mail = () => {
    setLoading(true);
    setName("");
    setEmail("");
    setMessage("");
    document.getElementById("Name*").innerText = "";
    document.getElementById("Email*").innerText = "";
    document.getElementById("Message*").innerText = "";
    fetch("/api/sendmail", {
      method: "POST",
      headers: {
        name: name,
        email: email,
        message: message
      }
    })
      .then(res => res.json())
      .then(data => {
        setResult(<p>{data.message}</p>)
        setLoading(false);
      })
  }

  return (
    <Main>
      <article className="p-8 max-w-[800px] mx-auto mt-8">
        <h1 className="text-3xl text-center">Contact me</h1>

        <p className="text-justify">Congratulations on taking the first step for taking your web presence to the next level! I'm excited to help you with your project. Fill out the form below to reach me. Include in your message a general overview of what you want in your website and general plans to give me some context of your goals. Also, feel free to connect with me on <Link legacyBehavior={false} className="underline" href="https://www.linkedin.com/in/aaron-rutherford-67aaa917a/">LinkedIn</Link>.</p>

        <p className="text-justify">I'll reach out to you within a day or so and let you know what kind of work goes into the project you're looking for as well as an estimated price for the whole project, and we'll go from there!</p>

        <div className="flex items-center justify-center">
          <form onSubmit={e => e.preventDefault()} id="contact-me-form" className="max-w-[800px] my-8 border-[2mm] bg-indigo-600 border-slate-800 rounded-3xl p-8 text-light flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <FormInput type="text" label="Name*" state={name} setState={setName} />
              <FormInput type="email" label="Email*" state={email} setState={setEmail} />
            </div>
            <FormInput type="textarea" label="Message*" state={message} setState={setMessage} />
            <button
              disabled={!valid}
              className={`${buttonStyle} ${valid ? activeButtonStyle : inactiveButtonStyle}`}
              onClick={e => { e.preventDefault; mail(); }}
            >
              Submit
              {loading ? <FontAwesomeIcon icon={faSpinner} className="ml-5 animate-spin" /> : ""}
            </button>
            <div className={`${result ? "" : "hidden"}`}>
              {result}
            </div>
          </form>
        </div>
      </article>
    </Main>
  )
}

export default Contact;