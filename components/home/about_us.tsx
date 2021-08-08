import React from 'react'

const AboutUs = ({text_color}: any) => {
  return (
    <div className="about__us mt-8">
      <span className={`title bg-red-400 text-white shadow-md p-2`}>
        Tentang Kami
      </span>
      <div className={`content mt-2 ${text_color}`}>
        <div className="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor laudantium deserunt quo ipsam iusto temporibus eos excepturi nam ipsum. Vitae ipsum recusandae quod magnam, omnis quas eligendi nostrum voluptatem animi.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor laudantium deserunt quo ipsam iusto temporibus eos excepturi nam ipsum. Vitae ipsum recusandae quod magnam, omnis quas eligendi nostrum voluptatem animi.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor laudantium deserunt quo ipsam iusto temporibus eos excepturi nam ipsum. Vitae ipsum recusandae quod magnam, omnis quas eligendi nostrum voluptatem animi.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor laudantium deserunt quo ipsam iusto temporibus eos excepturi nam ipsum. Vitae ipsum recusandae quod magnam, omnis quas eligendi nostrum voluptatem animi.
        </div>
        <div className="team">

        </div>
      </div>
    </div>
  )
}

export default AboutUs
