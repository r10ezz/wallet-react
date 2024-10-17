import React from 'react'

const Cards = ({imgSrc, text, desc}) => {
  return (
    <>
    <div className="mini-card">
        <img src={imgSrc} alt="" className='mini-img'/>
        <div className="mini-bold">
            {text}
        </div>
        <div className="mini-desc">
        {desc}
        </div>

    </div>
    </>
  )
}

export default Cards