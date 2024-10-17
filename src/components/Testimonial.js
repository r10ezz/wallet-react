import React from 'react'

const Testimonial = () => {
  return (
    <>
    <div className="tm-main">
        <div className="tm-card">
            <div className="tm-bold">
            “Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! thanks!”
            </div>
            <div className="tm-creds">
                <img src="../assets/pfp.png" alt="" className='tm-img'/>
                <div className="tm-details">
                    <div className="tm-name">
                        John Doe
                    </div>
                    <div>
                    <img src="../assets/Star.svg" alt="" className='tm-rating'/>
                    <img src="../assets/Star.svg" alt="" className='tm-rating'/>
                    <img src="../assets/Star.svg" alt="" className='tm-rating'/>
                    <img src="../assets/Star.svg" alt="" className='tm-rating'/>
                    <img src="../assets/Star.svg" alt="" className='tm-rating'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonial