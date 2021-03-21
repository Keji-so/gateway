import React from 'react'
import './sectionfour.css'

function SectionFour() {
    return (
        <div className="grid grid-cols-3 gap-8 px-20 pb-24">
            
                             <div className="w-11/12">      
                                <div className="blog px-12 py-10">
                                    <div className="four absolute left-20">
                                         <img src="./images/four.png" alt=""/>  
                                    </div>
                                    <div className="text-3xl font-bold mt-5 text-left w-24 ml-7">Blogs</div>
                                </div>
                            </div> 

                            <div className="w-11/12 border border-gray-200 hover:shadow-2xl transition duration-500 ease-out transform hover:-translate-y-4">      
                               <img className="w-full" src="./images/card4.png" alt=""/>
                               <div className="text-left p-4">
                                 <div className="title font-bold">Life as a freelance lettering artist featuring Jack Smith</div>
                                 <div className="title-light my-2 font-light">Estate and Housing</div>
                                 <div className="title-last w-4/5">There are certain topics that even some of the smartest people I talk with who aren’t…</div>
                               </div> 
                            </div> 

                            <div className="w-11/12 border border-gray-200 hover:shadow-2xl transition duration-500 ease-out transform hover:-translate-y-4">      
                               <img className="w-full" src="./images/card5.png" alt=""/>
                               <div className="text-left p-4">
                                 <div className="title font-bold">Welcome to the vast lands</div>
                                 <div className="title-light my-2 font-light">Hangout and Restaurant</div>
                                 <div className="title-last w-4/5">There are certain topics that even some of the smartest people I talk with who aren’t…</div>
                               </div> 
                            </div> 

        </div>
    )
}

export default SectionFour
