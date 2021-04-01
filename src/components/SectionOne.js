import React, {useEffect} from 'react'
import './sectionone.css'
import { BiRightArrowAlt } from 'react-icons/bi';
import { textAnimation } from "../animations"

function SectionOne() {

    useEffect(() => {
        textAnimation()
      }, [])

     

    return (
        <div  className="grid md:h-gridd lg:h-gridd xl:h-gridd  md:min-h-gridd lg:min-h-gridd xl:min-h-gridd  grid-rows-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-4 lg:gap-8 px-10 md:px-12 lg:px-20 xl:pb-20 opacity-100">
            <div id="num-anim" className="md:w-11/12 lg:w-11/12 h-full">      
                                <div className="blog px-12 pt-20">
                                    <div className="four absolute left-0">
                                         <img src="./images/one.png" alt=""/>  
                                    </div>
                                    <div className="text-3xl font-bold mt-5 text-left w-24 ml-7">About</div>
                                </div>
                         <div className="about-us flex justify-center w-full lg:w-32 mt-20  lg:ml-20 md:mt-24 lg:mt-24">
                <div className="text-sm ">About us</div>
                 <div className="icon ml-8 cursor-pointer">< BiRightArrowAlt size="1.5em" /> </div>
             </div>       
          </div> 

             
                
            

            
            <div id="text-anim" className="content pb-14 md:pb-0 md:w-11/12 lg:w-11/12 md:pt-16 lg:py-24 text-left h-full">
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

            <div id="text-anim" className="content md:pt-16 lg:py-24 md:w-11/12 lg:w-11/12 text-left h-full">
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
    )
}

export default SectionOne
