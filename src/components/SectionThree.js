import React from 'react'
import './sectionthree.css'

function SectionThree() {
    return (
        <div class="flex relative px-20">
           <div className="left flex flex-col px-10 justify-center py-24">

                    <div className="text-left text-3xl text-gray-800 font-bold">
                        <div>Get The Best</div>
                        <div>Deals From Our</div>
                        <div>List Of First Class</div>
                        <div>Restaurants</div>
                    </div>
               
                   <div className="btn-three flex items-center justify-center py-2 w-36 text-sm cursor-pointer mt-8 text-white">Take a tour</div>

             <div className="plate rounded-full z-20 absolute">
                <img  src="./images/plate.png" alt=""/>
            </div>  

            </div> 

            
            
            <div className="right flex justify-center items-center w-5/12">
            <div className="g2n px-12 py-20">
                <div className="three absolute ml-14">
                  <img src="./images/three.png" alt=""/>  
                </div>
               <div className="text-3xl font-bold text-left mt-8 ml-32 w-24">G2N</div>
               <div className="text-3xl font-bold text-left ml-32 w-24">Foods</div>
             </div>
            </div>

        </div>
    )
}

export default SectionThree
