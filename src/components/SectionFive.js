import React from 'react'
import './sectionfive.css'

function SectionFive() {
    return (
        <div className="px-12 md:px-12 lg:px-20 md:mt-10 flex pb-20">
            <div className="left hidden md:flex ">
                <img className="xl:w-full"  src="./images/food.png" alt=""/>
            </div>

            <div className="right w-full flex flex-col md:ml-12 items-center justify-evenly pt-16 md:py-3 md:w-1/4 lg:w-1/3 xl:w-1/3">
                 
                 <div>
                    <img className="lg:w-full md:w-12 md:h-12 lg:h-full flex items-center justify-center" src="./images/chips.png" alt=""/>
                 </div>

                 <div className="flex font-bold">
                    <div className="title-five md:text-sm text-xl lg:text-xl">McDonalds</div>
                    <div className="btn-five md:px-1 md:py-1 px-2 py-2 rounded-full flex justify-center ml-3"><img src="./images/plusfour.png" alt=""/></div>
                 </div>
                    
                 <div className="last md:text-xs w-full mt-4 md:mt-2 lg:mt-0 lg:w-2/3 text-center">
                    3817 Edwards Rd undefined Cedar Hill, Vermont 82149 United States
                 </div>

                 <div className="final text-sm w-full lg:w-3/5 my-3 mt-3 md:mb-2 text-center">
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
