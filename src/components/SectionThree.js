import React, {useEffect} from 'react'
import './sectionthree.css'
import { textAnimation } from "../animations"

function SectionThree() {


    return (
        <div   class="flex flex-col-reverse md:flex-row relative px-10 md:px-12 xl:px-20 opacity-100">
           <div className="left-three w-full flex md:w-1/15 flex-col px-10 justify-center py-12 md:py-20 xl:py-24">

                    <div className="text-left text-2xl md:text-2xl xl:text-3xl text-gray-800 font-bold ">
                        <div className="overflow-hidden">
                            <span class="line-anim inline-block">Get The Best</span>
                        </div>
                        <div className="overflow-hidden">
                             <span class="line-anim inline-block">Deals From Our</span>
                        </div>
                        <div className="overflow-hidden">
                             <span class="line-anim inline-block">List Of First Class</span>
                        </div>
                        <div className="overflow-hidden">
                            <span class="line-anim inline-block">Restaurants</span> 
                        </div>
                    </div>
               
                   <div id="text-anim" className="btn-three flex items-center justify-center py-2 w-36 text-sm cursor-pointer mt-8 text-white">Take a tour</div>

             <div className="reveal overflow-hidden hidden md:flex md:right-56 md:w-56 md:h-56 lg:w-64 lg:h-64 lg:right-80 xl:w-72 xl:h-72 xl:right-2/15 z-20 absolute">
                <img className="image" src="./images/plate.png" alt=""/>
            </div>  

            </div> 

           
            
            
            <div id="num-anim" className="right flex justify-center items-center w-full md:w-5/12">
            <div className="g2n  md:px-12 py-28 md:py-20">
                <div className="three absolute left-0 lg:left-16 xl:left-28  md:ml-20">
                  <img src="./images/three.png" alt=""/>  
                </div>
               <div className="text-3xl font-bold text-left mr-10 md:mr-0 mt-8 md:ml-40 w-24">G2N</div>
               <div className="text-3xl font-bold text-left mr-10 md:mr-0 md:ml-40 w-24">Foods</div>
             </div>
            </div>

        </div>
    )
}

export default SectionThree
