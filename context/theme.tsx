import { createContext, useState } from "react";

export const ThemeContext = createContext<any>(null);

export function ThemeContextProvider(props: any) {
  const [state, setstate] = useState({
    isLight: true,
    light: {bg_color: 'bg-white', text_color: 'text-black'},
    dark: {bg_color: 'bg-gray-800', text_color: 'text-white'},
  })

  const toggle = () => {
    setstate({...state, isLight: !state.isLight});
    const root = document.getElementsByTagName('html')[0];
    root.style.cssText = state.isLight ? darkTheme.join(';') : lightTheme.join(';');
    const body = document.getElementsByTagName('body')[0];
    body.style.cssText = 'transition: background .5s ease';
  };

  return (
    <ThemeContext.Provider value={{...state, toggle}}> 
      {props.children}
    </ThemeContext.Provider>
  ) 
}

const lightTheme = [
  'background-color: #fff'
];

const darkTheme = [
  'background-color: #1f2937'
];