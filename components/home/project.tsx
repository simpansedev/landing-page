import React from 'react'

const Project = ({text_color}: any) => {
  return (
    <div className="project mt-4">
      <span className={`title bg-red-400 text-white shadow-md p-2`}>
        Project Kami
      </span>
      <div className={`content mt-2 ${text_color}`}>
        apa ya projectnya bro ?
      </div>
    </div>
  )
}

export default Project
