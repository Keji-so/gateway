import React, {useEffect} from 'react'
import './sectionfour.css'
import { textAnimation } from "../animations"

function SectionFour() {

    return (
        <div  className="grid md:h-gridd lg:h-tablet xl:h-desktop grid-rows-3 md:grid-cols-3 md:gap-4 lg:gap-8 px-10 lg:px-20 md:px-12 xl:pb-24 opacity-100">
            
                             <div id="num-anim" className="w-11/12 mt-10 md:mt-0 h-1/2 md:h-full lg:h-full xl:h-full">      
                                <div className="blog px-12 py-10">
                                    <div className="four absolute left-0">
                                         <img src="./images/four.png" alt=""/>  
                                    </div>
                                    <div className="text-3xl font-bold md:mt-5 text-left w-24 md:ml-7 mt-32">Blogs</div>
                                </div>
                            </div> 

                            <div id="text-anim" className="md:w-11/12 w-full -mt-24 md:mt-0 h-full transition duration-500 ease-out transform hover:-translate-y-4">      
                            <div className="reveal overflow-hidden">
                                 <img className="w-full image" src="./images/card4.png" alt=""/>
                              </div>
                               <div className="text-left p-4 border border-gray-200 hover:shadow-2xl ">
                                 <div className="title font-bold">Life as a freelance lettering artist featuring Jack Smith</div>
                                 <div className="title-light my-2 font-light">Estate and Housing</div>
                                 <div className="title-last lg:w-4/5 md:text-xs">There are certain topics that even some of the smartest people I talk with who aren’t…</div>
                               </div> 
                            </div> 

                            <div id="text-anim" className="md:w-11/12 w-full -mt-4 md:mt-0 h-full transition duration-500 ease-out transform hover:-translate-y-4">      
                            <div className="reveal overflow-hidden">
                                 <img className="w-full image" src="./images/card5.png" alt=""/>
                              </div>
                               <div className="text-left p-4 border border-gray-200 hover:shadow-2xl">
                                 <div className="title font-bold py-2">Welcome to the vast lands</div>
                                 <div className="title-light my-2 pb-1 font-light">Hangout and Restaurant</div>
                                 <div className="title-last lg:w-4/5 md:text-xs">There are certain topics that even some of the smartest people I talk with who aren’t…</div>
                               </div> 
                            </div> 

        </div>
    )
}

export default SectionFour
