import {useContext} from "react";
import {ModeContext} from "./contextAPI/modeContext";

function Title({ text }) {
  let isDarkMode = useContext(ModeContext);
  return (
    <h2
      className={`heading ${
        isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {/* {text} */}
    </h2>
  );
}

export default Title;
