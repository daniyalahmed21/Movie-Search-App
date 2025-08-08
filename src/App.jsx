import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");
  useEffect(()=>{
    const userTheme = localStorage.getItem("app-theme")
    if(userTheme !== null){
        setTheme(userTheme)
    }
  },[])
  return (
    <div>
      <ThemeContext value={{ theme, setTheme }}>
        <div data-theme={theme}>
          <Navbar />
          <MainRoutes />
        </div>
      </ThemeContext>
    </div>
  );
};

export default App;
