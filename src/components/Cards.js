import React from 'react'
import './cards.css'


function Cards() {

    return (
      <div class="max-w-7xl mx-10 md:mx-12 lg:mx-24 my-14 lg:my-20">
      <div class="grid gap-14 md:gap-10 lg:gap-14 sm:grid-cols-3">

      <div id="text-anim" class="w-full hover:shadow-2xl transition duration-500 ease-out">
      <div class="aspect-w-3 aspect-h-3 reveal overflow-hidden">
        <img class="object-cover image" src="./images/card1.png" alt="building" />
      </div>
      <div class="text-left p-4 border">
        <p class="title font-bold">Rice flakesr</p>
        <h2 class="title-text my-2 font-light">Food</h2>
        <p class="title-light my-2 font-light">Hangout and Restaurant</p>
        <p class="title-last lg:w-4/5 md:text-xs">4140 Parker Rd undefined Allentown, New Mexico 31134 United States</p>
      </div>
    </div>

    <div id="text-anim" class="w-full hover:shadow-2xl transition duration-500 ease-out">
      <div class="aspect-w-3 aspect-h-3 reveal overflow-hidden">
        <img class="object-cover image" src="./images/card2.png" alt="building" />
      </div>
      <div class="text-left p-4 border">
        <p class="title font-bold">Waffles</p>
        <h2 class="title-text my-2 font-light">Food</h2>
        <p class="title-light my-2 font-light">Hangout and Restaurant</p>
        <p class="title-last lg:w-4/5 md:text-xs">7409 E Little York Rd undefined Orlando, Washington 50418 United States</p>
      </div>
    </div>

    <div id="text-anim" class="w-full hover:shadow-2xl transition duration-500 ease-out">
      <div class="aspect-w-3 aspect-h-3 reveal overflow-hidden">
        <img class="object-cover image" src="./images/card3.png" alt="building" />
      </div>
      <div class="text-left p-4 border">
        <p class="title font-bold">Fruit Samples</p>
        <h2 class="title-text my-2 font-light">Food</h2>
        <p class="title-light my-2 font-light">Hangout and Restaurant</p>
        <p class="title-last lg:w-4/5 md:text-xs">6405 Thornridge Cir undefined Jacksonville, Hawaii 80417 United States</p>
      </div>
    </div>

  </div>
</div>
    )
}

export default Cards

