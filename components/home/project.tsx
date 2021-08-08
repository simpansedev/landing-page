import React from 'react'

const Project = ({text_color}: any) => {
  return (
    <div className="project mt-4">
      <span className={`title bg-red-400 text-white shadow-md p-2`}>
        Project Kami
      </span>
      <div className={`content mt-2 ${text_color}`}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor laudantium deserunt quo ipsam iusto temporibus eos excepturi nam ipsum. Vitae ipsum recusandae quod magnam, omnis quas eligendi nostrum voluptatem animi.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor laudantium deserunt quo ipsam iusto temporibus eos excepturi nam ipsum. Vitae ipsum recusandae quod magnam, omnis quas eligendi nostrum voluptatem animi.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor laudantium deserunt quo ipsam iusto temporibus eos excepturi nam ipsum. Vitae ipsum recusandae quod magnam, omnis quas eligendi nostrum voluptatem animi.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor laudantium deserunt quo ipsam iusto temporibus eos excepturi nam ipsum. Vitae ipsum recusandae quod magnam, omnis quas eligendi nostrum voluptatem animi.
      </div>
    </div>
  )
}

export default Project
