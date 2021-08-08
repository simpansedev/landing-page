import React from 'react'

const Contact = ({text_color}: any) => {
  return (
    <div className="contact mt-4">
      <span className={`title bg-red-400 text-white shadow-md p-2`}>
        Kontak Kami
      </span>
      <div className={`content mt-2 ${text_color}`}>
        089653674186
      </div>
    </div>
  )
}

export default Contact
