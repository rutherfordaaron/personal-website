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
      <h1>Contact me</h1>

      <p>Contact me text</p>

      <p className="text-justify">I'll reach out to you within a day or so and let you know what kind of work goes into the project you're looking for as well as an estimated price for the whole project, and we'll go from there!</p>

      <div>
        <form onSubmit={e => e.preventDefault()} id="contact-me-form">
          <div>
            <FormInput type="text" label="Name*" state={name} setState={setName} />
            <FormInput type="email" label="Email*" state={email} setState={setEmail} />
          </div>
          <FormInput type="textarea" label="Message*" state={message} setState={setMessage} />
          <button
            disabled={!valid}
            className=""
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
  )
}

export default Contact;