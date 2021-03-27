import React, {useEffect} from 'react'
import './sectiontwo.css'
import { imageAnimation } from "../animations"

function SectionTwo() {

  useEffect(() => {
    imageAnimation()
  }, [])

    return (

      <div className="grid md:h-gridd lg:h-tablet xl:h-desktop grid-rows-3 md:grid-cols-3 md:gap-4 lg:gap-8 md:px-12 px-10 lg:px-20 xl:pb-20 opacity-100">
            
      <div id="num-anim" className="w-11/12 h-1/2 md:h-full lg:h-full xl:h-full">      
         <div className="blog px-12 py-10">
             <div className="two absolute left-20 md:left-12 lg:left-20">
                  <img src="./images/two.png" alt=""/>  
             </div>
             <div className="text-3xl font-bold md:mt-5 text-left w-32 md:ml-7 mt-32">Featured</div>
             <div className="text-3xl font-bold text-left w-24 md:ml-7">Places</div>
         </div>
     </div> 

     <div  id="text-anim" className="md:w-11/12 w-full -mt-28 md:mt-0 h-full transition duration-500 ease-out transform hover:-translate-y-4">      
        <div className="reveal overflow-hidden">
          <img className="w-full image" src="./images/building1.png" alt=""/>
        </div>
        
        <div className="text-left p-4 border border-gray-200 hover:shadow-2xl ">
        <div className="title font-bold">Bessie Cooper</div>
         <div className="title-text my-2 font-light">Hotel</div>
        <div className="title-light my-2 font-light">Relaxation</div>
          <div className="title-last lg:w-4/5 md:text-xs">9207 Lakeshore Rd undefined Shreveport, Rhode Island 98563 United States</div>
        </div> 
     </div> 

     <div id="text-anim" className="md:w-11/12 w-full -mt-6 md:mt-0 h-full transition duration-500 ease-out transform hover:-translate-y-4">      
     <div className="reveal overflow-hidden">
          <img className="w-full image" src="./images/building2.png" alt=""/>
        </div>
        <div className="text-left p-4 border border-gray-200 hover:shadow-2xl ">
        <div className="title font-bold">Rosemary Nguyen</div>
         <div className="title-text my-2 font-light">Restaurant</div>
        <div className="title-light my-2 font-light">Hangout and Restaurant</div>
        <div className="title-last lg:w-4/5 md:text-xs">2875 Robinson Rd undefined Anaheim, Maryland 97133 United States</div>
        </div> 
     </div> 

</div>


    )
}

export default SectionTwo
