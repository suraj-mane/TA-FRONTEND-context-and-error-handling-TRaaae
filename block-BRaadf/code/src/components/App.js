import React from "react";
import {ModeContext} from "./contextAPI/modeContext"
 import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      <>
        <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
          <ModeContext.Provider value={{isDarkMode}}>
              <Header/>
              <Main />
              <SwitchButton changeMode={this.changeMode} />
          </ModeContext.Provider>
        </div>
      </>
    );
  }
}

export default App;
