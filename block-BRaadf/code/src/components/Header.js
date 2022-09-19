import {useContext} from "react";
import {ModeContext} from "./contextAPI/modeContext"

function Header() {
  let isDarkMode = useContext(ModeContext);
  return (
    <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
