import { createContext, useEffect, useState } from "react";


export const ScrollContext = createContext<any>(null);

export function ScrollProvider(props: any) {
  const [scrollPosition, setScrollPosition] = useState({
    scroll: 0
  });

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition({...scrollPosition, scroll: position});
  };
  
  useEffect(() => {
    // console.log('position = ',scrollPosition.scroll)
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition])

  return(
    <ScrollContext.Provider value={{...scrollPosition}}>
      {props.children}
    </ScrollContext.Provider>
  )
}