import React from 'react'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'

const BtnTheme = ({isLight, toggle}: any) => {
  return (
    <div>
      <button 
        className={`${isLight ? 'bg-green-400' : 'bg-white'} fixed bottom-3 right-2 z-20 p-2 rounded-md shadow-xl`}
        onClick={() => toggle()}
      >
        {isLight ? <RiSunFill size={25} color="white"/> : <RiMoonFill size={25} color="#1f2937"/>}
      </button>
    </div>
  )
}

export default BtnTheme
