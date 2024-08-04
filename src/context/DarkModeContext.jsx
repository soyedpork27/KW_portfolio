import { createContext, useState } from "react";


export const DarkModeContext = createContext();


export const DarkModeProvider = ({children})=>{
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  const handleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  }

  return (<DarkModeContext.Provider value={{isDarkMode,  handleDarkMode}}>{children}</DarkModeContext.Provider>)
};
