import React from 'react'

const AboutUs = ({text_color}: any) => {
  return (
    <div className="about__us mt-8">
      <span className={`title bg-red-400 text-white shadow-md p-2`}>
        Tentang Kami
      </span>
      <div className={`content mt-2 ${text_color}`}>
        kami lulusan unpam tahun 2019.
      </div>
    </div>
  )
}

export default AboutUs
