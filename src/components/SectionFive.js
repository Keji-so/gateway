import React from 'react'
import './sectionfive.css'

function SectionFive() {
    return (
        <div className="px-20 flex pb-20">
            <div className="left">
                <img className="w-full h-full" src="./images/food.png" alt=""/>
            </div>

            <div className="right flex flex-col items-center justify-evenly py-5 w-1/3">
                 
                 <div>
                    <img src="./images/chips.png" alt=""/>
                 </div>

                 <div className="flex font-bold">
                    <div className="title-five text-xl">McDonalds</div>
                    <div className="btn-five px-2 py-2 rounded-full flex justify-center ml-3"><img src="./images/plusfour.png" alt=""/></div>
                 </div>
                    
                 <div className="last w-2/3 text-center">
                    3817 Edwards Rd undefined Cedar Hill, Vermont 82149 United States
                 </div>

                 <div className="final text-sm w-3/5 mt-3 mb-2 text-center">
                     McDonalds is one of our top listing restaurants, and customers have always left us with good reviews
                </div>

                 <div className="btn-five flex items-center justify-center text-white bg-green-600 px-12 py-2 text-sm cursor-pointer">
                    Check in
                 </div>

            </div>
            
        </div>
    )
}

export default SectionFive
