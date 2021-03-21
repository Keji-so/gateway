import React from 'react'
import './sectiontwo.css'

function SectionTwo() {
    return (

      <div className="grid grid-cols-3 gap-8 px-20 pb-24">
            
      <div className="w-11/12">      
         <div className="blog px-12 py-10">
             <div className="two absolute left-20">
                  <img src="./images/two.png" alt=""/>  
             </div>
             <div className="text-3xl font-bold mt-5 text-left w-32 ml-7">Featured</div>
             <div className="text-3xl font-bold text-left w-24 ml-7">Places</div>
         </div>
     </div> 

     <div className="w-11/12 border border-gray-200 hover:shadow-2xl transition duration-500 ease-out transform hover:-translate-y-4">      
        <img className="w-full" src="./images/building1.png" alt=""/>
        <div className="text-left p-4">
        <div className="title font-bold">Bessie Cooper</div>
         <div className="title-text my-1 font-light">Hotel</div>
        <div className="title-light my-1 font-light">Relaxation</div>
          <div className="title-last w-4/5">9207 Lakeshore Rd undefined Shreveport, Rhode Island 98563 United States</div>
        </div> 
     </div> 

     <div className="w-11/12 border border-gray-200 hover:shadow-2xl transition duration-500 ease-out transform hover:-translate-y-4">      
        <img className="w-full" src="./images/building2.png" alt=""/>
        <div className="text-left p-4">
        <div className="title font-bold">Rosemary Nguyen</div>
         <div className="title-text my-1 font-light">Restaurant</div>
        <div className="title-light my-1 font-light">Hangout and Restaurant</div>
        <div className="title-last w-4/5">2875 Robinson Rd undefined Anaheim, Maryland 97133 United States</div>
        </div> 
     </div> 

</div>


        // <div  className="flex justify-evenly mb-24">
        //     <div className="about px-12 py-20">
        //         <div className="one absolute left-12">
        //           <img src="./images/two.png" alt=""/>  
        //         </div>
        //        <div className="text-3xl font-bold mt-5 text-left">Featured</div>
        //        <div className="text-3xl font-bold text-left">Places</div>
        //      </div>

        //      <div className="right flex w-4/6 pl-20">
        //             <div className="card w-1/2">
        //                 <div className="w-4/5  border border-gray-200 hover:shadow-xl">
        //                     <img className="w-full" src="./images/building1.png" alt=""/>
        //                     <div className="content text-left p-4">
        //                          <div className="font-bold">Bessie Cooper</div>
        //                          <div className="my-1 font-light">Hotel</div>
        //                          <div className="text-xs my-1 font-light">Relaxation</div>
        //                          <div className="w-4/5">9207 Lakeshore Rd undefined Shreveport, Rhode Island 98563 United States</div>
        //                 </div>
        //                 </div>
                        
        //             </div>
             
        //             <div className="card w-1/2">
        //                     <div className="w-4/5 border border-gray-200 hover:shadow-xl">
        //                        <img className="w-full" src="./images/building2.png" alt=""/>
        //                        <div className="content text-left p-4">
        //                          <div className="font-bold">Rosemary Nguyen</div>
        //                          <div className="my-1 font-light">Restaurant</div>
        //                          <div className="text-xs my-1 font-light">Hangout and Restaurant</div>
        //                          <div className="w-4/5">2875 Robinson Rd undefined Anaheim, Maryland 97133 United States</div>
        //                        </div> 
        //                     </div>   
        //             </div>
        //      </div>
                
        // </div>
    )
}

export default SectionTwo
