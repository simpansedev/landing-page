import React, { useContext, useEffect, useState } from 'react'
import { ScrollContext } from '../context/scroll'
import { ThemeContext } from '../context/theme'

const Header = () => {
  const dataContext = useContext(ScrollContext)
  const themeContext = useContext(ThemeContext)
  const {isLight, light, dark, toggle} = themeContext
  const {scroll} = dataContext
  
  useEffect(() => {
    console.log(themeContext)
    return () => {dataContext}
  }, [dataContext, themeContext])

  return (
    <div 
      className={`header z-10 w-full py-4 px-4  
        ${scroll > 400 ? `flex flex-row justify-between items-center fixed ${isLight ? light.bg_color : light.bg_color} header-blur shadow-2xl bg-opacity-80` 
        : 'hidden absolute bg-transparent'}`
      }
    >
      <div className={`logo ${scroll > 10 && isLight ? light.text_color : dark.text_color} text-2xl`}>
        Simpanse Dev
      </div>
      <div className={`menu ${scroll > 10 && isLight ? light.text_color : dark.text_color} text-lg`}>
        <div>Menu 1</div>
      </div>
    </div>
  )
}

export default Header

