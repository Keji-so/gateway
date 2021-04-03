import React from 'react'
import './sectionfour.css'


function SectionFour() {

    return (
      <div class="max-w-7xl mx-10 md:mx-12 lg:mx-24 my-10 md:my-14 lg:mb-20">
        <div class="grid gap-14 md:gap-10 lg:gap-14 sm:grid-cols-3">

        <div id="num-anim" class="w-full mt-16 mb-20 md:my-0">
             <div id="num-anim">      
                        <div className="blog">
                                <div className="four absolute top-5">
                                      <img src="./images/four.png" alt=""/>  
                                 </div>
                                 <div className="text-3xl font-bold pt-10 md:w-32 ml-20">Blogs</div>
                       </div>
                             
           </div>  
      </div>

      <div id="text-anim" class="w-full hover:shadow-2xl transition duration-500 ease-out">
        <div class="aspect-w-3 aspect-h-3 reveal overflow-hidden">
          <img class="object-cover image" src="./images/card4.png" alt="building" />
        </div>
        <div class="text-left p-4 border">
          <p class="title font-bold">Life as a freelance lettering artist featuring Jack Smith</p>
          <p class="title-light my-2 font-light">Estate and Housing</p>
          <p class="title-last lg:w-4/5 md:text-xs">There are certain topics that even some of the smartest people I talk with who aren’t…</p>
        </div>
      </div>

      <div id="text-anim" class="w-full hover:shadow-2xl transition duration-500 ease-out">
        <div class="aspect-w-3 aspect-h-3 reveal overflow-hidden">
          <img class="object-cover image" src="./images/card5.png" alt="building" />
        </div>
        <div class="text-left p-4 border">
          <p class="title font-bold py-2">Welcome to the vast lands</p>
          <p class="title-light my-2 pb-1 font-light">Hangout and Restaurant</p>
          <p class="title-last lg:w-4/5 md:text-xs">There are certain topics that even some of the smartest people I talk with who aren’t…</p>
        </div>
      </div>

    </div>
  </div>
    )
}

export default SectionFour


