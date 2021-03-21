import React from 'react'
import './cards.css'

function Cards() {
    return (
        <div className="grid grid-cols-3 gap-8 px-20 py-24">

                            <div className="w-11/12 border border-gray-200 hover:shadow-2xl transition duration-500 ease-out transform hover:-translate-y-5">      
                               <img className="w-full" src="./images/card1.png" alt=""/>
                               <div className="text-left p-4">
                                 <div className="title font-bold">Rice flakes</div>
                                 <div className="title-text my-1 font-light">Food</div>
                                 <div className="title-light my-1 font-light">Hangout and Restaurant</div>
                                 <div className="title-last w-4/5">4140 Parker Rd undefined Allentown, New Mexico 31134 United States</div>
                               </div> 
                            </div> 

                            <div className="w-11/12 border border-gray-200 hover:shadow-2xl transition duration-500 ease-out transform hover:-translate-y-5">      
                               <img className="w-full" src="./images/card2.png" alt=""/>
                               <div className="text-left p-4">
                                 <div className="title font-bold">Waffles</div>
                                 <div className="title-text my-1 font-light">Food</div>
                                 <div className="title-light my-1 font-light">Hangout and Restaurant</div>
                                 <div className="title-last w-4/5">7409 E Little York Rd undefined Orlando, Washington 50418 United States</div>
                               </div> 
                            </div> 

                            <div className="w-11/12 border border-gray-200 hover:shadow-2xl transition duration-500 ease-out transform hover:-translate-y-5">      
                               <img className="w-full" src="./images/card3.png" alt=""/>
                               <div className="text-left p-4">
                                 <div className="title font-bold">Fruit Samples</div>
                                 <div className="title-text my-1 font-light">Food</div>
                                 <div className="title-light my-1 font-light">Hangout and Restaurant</div>
                                 <div className="title-last w-4/5">6405 Thornridge Cir undefined Jacksonville, Hawaii 80417 United States</div>
                               </div> 
                            </div> 
            
        </div>
    )
}

export default Cards
