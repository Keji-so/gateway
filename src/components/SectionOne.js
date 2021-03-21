import React from 'react'
import './sectionone.css'
import { BiRightArrowAlt } from 'react-icons/bi';

function SectionOne() {
    return (
        <div className="grid grid-cols-3 gap-8 px-20">
            <div className="w-11/12">      
                                <div className="blog px-12 pt-20">
                                    <div className="four absolute left-20">
                                         <img src="./images/one.png" alt=""/>  
                                    </div>
                                    <div className="text-3xl font-bold mt-5 text-left w-24 ml-7">About</div>
                                </div>
                         <div className="about-us flex w-32 ml-20 mt-24">
                <div className="text-sm">About us</div>
                 <div className="icon ml-8 cursor-pointer">< BiRightArrowAlt size="1.5em" /> </div>
             </div>       
          </div> 

             
                
            

            
                <div className="content w-11/12 py-24 text-left">
                <div className="heading text-2xl font-bold">
                    Who we are
                </div>
                <div className="heading-text text-sm mt-6 leading-6">
                    GatewaytoNigeria is a platform that helps you navigate your city in the best way
                    possible providing you with lifestyle services all around every sphere of life. We 
                    provide Hotel services, Restaurant and Relaxation centres. We have been able to provide
                    exellent services to all out clients both visitors and merchants, giving both parties
                    endless reasons to stick with us as we aim to reach the top altogether.
                </div>
            </div>

            <div className="content py-24 w-11/12 text-left">
                <div className="heading text-2xl font-bold">
                    What we do
                </div>
                <div className="heading-text text-sm mt-6 leading-6">
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
