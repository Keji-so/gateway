import React, {useEffect} from 'react'
import './sectionone.css'
import { BiRightArrowAlt } from 'react-icons/bi';
import { textAnimation } from "../animations"

function SectionOne() {

    useEffect(() => {
        textAnimation()
      }, [])

     

    return (
        <div class="max-w-7xl mx-10 md:mx-12 lg:mx-24 my-10 md:my-10">
    <div class="grid gap-14 md:gap-10 lg:gap-14 sm:grid-cols-3">
      <div id="num-anim" class="w-full ">
             <div id="num-anim">      
                        <div className="blog">
                                <div className="four absolute top-5">
                                      <img src="./images/one.png" alt=""/>  
                                 </div>
                                 <div className="text-3xl font-bold pt-10 text-center md:w-32 md:ml-16">About</div>
                       </div>
                       <div className="about-us flex justify-center w-full lg:w-32 mt-20  lg:ml-20 md:mt-24 lg:mt-24">
                              <div className="text-sm ">About us</div>
                              <div className="icon ml-8 cursor-pointer">< BiRightArrowAlt size="1.5em" /> </div>
                      </div>       
           </div>  
      </div>


      <div id="text-anim"  class="w-full md:my-10">
             <div className="heading text-3xl md:text-2xl lg:text-2xl font-bold">
                     Who we are
            </div>
            <div className="heading-text text-sm xl:text-sm md:text-xs mt-6 xl:leading-6 leading-6 md:leading-relaxed">
                     GatewaytoNigeria is a platform that helps you navigate your city in the best way
                     possible providing you with lifestyle services all around every sphere of life. We 
                     provide Hotel services, Restaurant and Relaxation centres. We have been able to provide
                     exellent services to all out clients both visitors and merchants, giving both parties
                     endless reasons to stick with us as we aim to reach the top altogether.
             </div>
      </div>

      <div id="text-anim" class="w-full md:my-10">
               <div className="heading text-3xl md:text-2xl lg:text-2xl font-bold">
                    What we do
                </div>
                <div className="heading-text text-sm xl:text-sm md:text-xs mt-6 leading-6 xl:leading-6 md:leading-relaxed">
                     We are a lifestyle agency providing our users with wonderful experiences as they wish 
                     to visit new places and make memories with both friends and families. We do this by reaching 
                     out to the very best  service providers in every area of pleasure. Overtime, we’ve been
                     able to connect may peole with this top class locations and places. Why not make a moment with us today.
                 </div>
      </div>

    </div>
  </div>
    )
}

export default SectionOne

