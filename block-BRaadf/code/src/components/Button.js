import React from "react";
import {useContext} from "react";
import {ModeContext} from "./contextAPI/modeContext"

export default function SwitchButton({changeMode }) {
  let isDarkMode = useContext(ModeContext);
  return (
    <button
      className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
