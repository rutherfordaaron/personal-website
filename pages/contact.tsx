import FormInput from "../components/formInput";
import { useState, useEffect } from "react";
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
  }, [name, email, message]);

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
    <article>
      <h1 className="text-center">Contact Me</h1>
      <div className="border border-black w-fit mx-auto mt-12">
        <form onSubmit={e => e.preventDefault()} id="contact-me-form" className="flex flex-col justify-center items-center m-12 max-sm:mx-7">
          <div className="flex justify-center items-center gap-8 mb-8 max-md:flex-col">
            <FormInput type="text" label="Name*" state={name} setState={setName} />
            <FormInput type="email" label="Email*" state={email} setState={setEmail} />
          </div>
          <FormInput type="textarea" label="Message*" state={message} setState={setMessage} />
          <button
            disabled={!valid}
            className="border border-black mt-10 px-8 py-4 text-lg bg-gray-100 shadow-lg disabled:text-gray-400 disabled:shadow-none disabled:border-gray-300"
            onClick={e => { e.preventDefault; mail(); }}
          >
            Submit
            {loading ? <FontAwesomeIcon icon={faSpinner} className="ml-5 animate-spin" /> : ""}
          </button>
          <div className={`${result ? "" : "hidden"} mt-8`}>
            {result}
          </div>
        </form>
      </div>
    </article>
  )
}

export default Contact;