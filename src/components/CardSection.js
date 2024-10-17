import React from 'react'
import Cards from './Cards'

const CardSection = () => {
  return (
    <>
    <div className="cs-main">
        <div className="cs-wrapper">
            <Cards 
               imgSrc={"../assets/card1.svg"}
               text={"Customizable card"}
               desc={"Custom your own card for your exact incomes and expenses needs."}
            />
            <Cards 
               imgSrc={"../assets/card2.svg"}
               text={"No payment fee"}
               desc={"Transfer your payment all over the world with no payment fee."}
            />
            <Cards 
               imgSrc={"../assets/card3.svg"}
               text={"All in one place"}
               desc={"The right place to keep your credit and debit cards, boarding passes & more.  "}
            />
        </div>
    </div>
    </>
  )
}

export default CardSection