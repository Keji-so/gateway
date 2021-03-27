import React, {useEffect} from 'react'
import './cards.css'
import { textAnimation } from "../animations"

function Cards() {

    return (
        <div  className="grid mt-16 md:mt-20 md:h-gridd lg:h-tablet xl:h-desktop grid-rows-3 md:grid-cols-3 md:gap-4 lg:gap-8 md:px-12 px-10 lg:px-20 xl:pb-20">

                            <div id="text-anim" className="w-full md:w-11/12 h-full transition duration-500 ease-out transform hover:-translate-y-5">      
                               
                            <div className="reveal overflow-hidden">
                                 <img className="w-full image" src="./images/card1.png" alt=""/>
                              </div>
                               <div className="text-left p-4 border border-gray-200 hover:shadow-2xl">
                                 <div className="title font-bold">Rice flakes</div>
                                 <div className="title-text my-1 font-light">Food</div>
                                 <div className="title-light my-1 font-light">Hangout and Restaurant</div>
                                 <div className="title-last lg:w-4/5 md:text-xs">4140 Parker Rd undefined Allentown, New Mexico 31134 United States</div>
                               </div> 
                            </div> 

                            <div id="text-anim" className="w-full mt-6 md:mt-0 md:w-11/12 h-full transition duration-500 ease-out transform hover:-translate-y-5">      
                            <div className="reveal overflow-hidden">
                                 <img className="w-full image" src="./images/card2.png" alt=""/>
                              </div>
                               <div className="text-left p-4 border border-gray-200 hover:shadow-2xl">
                                 <div className="title font-bold">Waffles</div>
                                 <div className="title-text my-1 font-light">Food</div>
                                 <div className="title-light my-1 font-light">Hangout and Restaurant</div>
                                 <div className="title-last lg:w-4/5 md:text-xs">7409 E Little York Rd undefined Orlando, Washington 50418 United States</div>
                               </div> 
                            </div> 

                            <div id="text-anim" className="w-full mt-10 md:mt-0 md:w-11/12 h-full transition duration-500 ease-out transform hover:-translate-y-5">      
                            <div className="reveal overflow-hidden">
                                 <img className="w-full image" src="./images/card3.png" alt=""/>
                              </div>
                               <div className="text-left p-4 border border-gray-200 hover:shadow-2xl">
                                 <div className="title font-bold">Fruit Samples</div>
                                 <div className="title-text my-1 font-light">Food</div>
                                 <div className="title-light my-1 font-light">Hangout and Restaurant</div>
                                 <div className="title-last lg:w-4/5 md:text-xs">6405 Thornridge Cir undefined Jacksonville, Hawaii 80417 United States</div>
                               </div> 
                            </div> 
            
        </div>
    )
}

export default Cards
