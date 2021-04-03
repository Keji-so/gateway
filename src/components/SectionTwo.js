import React, {useEffect} from 'react'
import './sectiontwo.css'
import { imageAnimation } from "../animations"

function SectionTwo() {

  useEffect(() => {
    imageAnimation()
  }, [])

    return (
      <div class="max-w-7xl mx-10 md:mx-12 lg:mx-24 my-10 md:mb-14 lg:mb-20">
        <div class="grid gap-14 md:gap-10 lg:gap-14 sm:grid-cols-3">

        <div id="num-anim" class="w-full my-16 md:my-0">
             <div id="num-anim">      
                        <div className="blog">
                                <div className="four absolute top-5">
                                      <img src="./images/two.png" alt=""/>  
                                 </div>
                                 <div className="text-3xl font-bold pt-10 md:w-32 ml-20">Featured</div>
                                  <div className="text-3xl font-bold  md:w-24 ml-20">Places</div>
                       </div>
                             
           </div>  
      </div>

      <div id="text-anim" class="w-full hover:shadow-2xl transition duration-500 ease-out">
        <div class="aspect-w-3 aspect-h-3 reveal overflow-hidden">
          <img class="object-cover image" src="./images/building1.png" alt="building" />
        </div>
        <div class="text-left p-4 border">
          <p class="title font-bold">Bessie Cooper</p>
          <h2 class="title-text my-2 font-light">Hotel</h2>
          <p class="title-light my-2 font-light">Relaxation</p>
          <p class="title-last lg:w-4/5 md:text-xs">9207 Lakeshore Rd undefined Shreveport, Rhode Island 98563 United States</p>
        </div>
      </div>

      <div id="text-anim" class="w-full hover:shadow-2xl transition duration-500 ease-out">
        <div class="aspect-w-3 aspect-h-3 reveal overflow-hidden">
          <img class="object-cover image" src="./images/building2.png" alt="building" />
        </div>
        <div class="text-left p-4 border">
          <p class="title font-bold">Rosemary Nguyen</p>
          <h2 class="title-text my-2 font-light">Restaurant</h2>
          <p class="title-light my-2 font-light">Hangout and Restaurant</p>
          <p class="title-last lg:w-4/5 md:text-xs">2875 Robinson Rd undefined Anaheim, Maryland 97133 United States</p>
        </div>
      </div>

    </div>
  </div>
    )
}

export default SectionTwo





