import React, {useState } from "react";
import "./App.css";
import ThemeContext from "./Context/ThemeContext";
import Toggler from "./Components/Toggler";
import HeroSection from "./Components/HeroSection"; 


function App() {
  const themeHook = useState("light");
  return(
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Toggler />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
