import { useState } from "react";

const FormInput = (props: { label: string, type: string, state: string, setState: Function }) => {
  const input = "bg-transparent transition-all border-b-2 focus:outline-none focus:border-indigo-300 p-1 pb-0 min-w-[250px]";
  const activeInput = "border-indigo-800";
  const inactiveInput = "border-indigo-400";

  const inputContainer = "relative";

  const inactiveLabel = "bottom-[2px] left-[5px]";
  const activeLabel = "text-xs bottom-[28px] left-0 text-indigo-300";
  const label = "transition-all absolute"

  const textArea = "bg-transparent border-[2mm] rounded-2xl p-2 focus:outline-none focus:border-indigo-300 transition-all min-w-[250px] min-h-[250px] md:w-[550px] resize-none"

  const inactiveTextAreaLabel = "top-[23px] left-[20px] border-indigo-400"
  const activeTextAreaLabel = "text-xs top-[-15px] left-[12px] text-indigo-300"

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