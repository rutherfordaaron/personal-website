import { useState } from "react";

const FormInput = (props: { label: string, type: string, state: string, setState: Function }) => {
  const input = "bg-gray-100 transition-all border focus:outline-none focus:border-gray-600 px-1 min-w-[250px] py-3";
  const activeInput = "border-gray-700";
  const inactiveInput = "border-gray-900";

  const inputContainer = "relative";

  const inactiveLabel = "bottom-[14px] left-[5px]";
  const activeLabel = "text-xs bottom-[54px] left-0 text-gray-600";
  const label = "transition-all absolute"

  const textArea = "bg-gray-100 border px-2 py-4 focus:outline-none focus:border-gray-600 transition-all min-w-[250px] min-h-[250px] md:w-[550px] resize-none"

  const inactiveTextAreaLabel = "top-[24px] left-[10px] border-gray-900"
  const activeTextAreaLabel = "text-xs top-[-15px] left-[0px] text-gray-700"

  if (props.type !== "textarea") {
    return (
      <div className={inputContainer}>
        <label htmlFor={props.label} className={`${label} ${props.state ? activeLabel : inactiveLabel}`}>{props.label}</label>
        <input type={props.type} id={props.label} className={`${input} ${props.state ? activeInput : inactiveInput}`} onChange={e => props.setState(e.target.value)} value={props.state} />
      </div>
    )
  } else {
    return (
      <div className={`pt-2 ${inputContainer}`}>
        <label htmlFor="textarea" className={`${label} ${props.state ? activeTextAreaLabel : inactiveTextAreaLabel}`}>{props.label}</label>
        <textarea id={props.label} className={`${textArea} ${props.state ? activeInput : inactiveInput}`} onChange={e => props.setState(e.target.value)} value={props.state}></textarea>
      </div>
    )
  }
}

export default FormInput;