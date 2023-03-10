import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  useEffect(() => {
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      let navToggle = document.getElementById("nav-toggle");
      if (prevScrollpos > currentScrollPos && navToggle) {
        console.log("going up")
        navToggle.style.top = "20px"
      } else {
        console.log("going down")
        navToggle.style.top = "-60px"
      }
      prevScrollpos = currentScrollPos;
    }
  })

  return (
    <header id="navbar" className="fixed z-50 flex items-center justify-between shadow-xl transition-all duration-300 text-dark">
      <button type="button" id="nav-toggle" className="fixed right-5 z-50 transition-all duration-300 text-dark text-2xl bg-slate-200 border-4 rounded-full w-14 h-14 border-slate-800 text-dark"><FontAwesomeIcon icon={faBars} /></button>
    </header>
  )
}

export default Header;