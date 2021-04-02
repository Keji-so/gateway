import React, {useState, useEffect} from 'react'
import './header.css'
import { IoLocationOutline } from 'react-icons/io5';
import { FiHome } from 'react-icons/fi';
import { FiFilm } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import { landingAnimation, dropinAnimation } from "../animations"






function Header() {

    const [show, setShow] = useState(true);

    const handleMenu = () => {
        setShow(!show);
    }
    
    useEffect(() => {
        landingAnimation()
      }, [])

      useEffect(() => {
        dropinAnimation()
      }, [!show])

      


    return (
        <div>
            <div className={show ? "hidden" : "dropdown menu-active z-50 absolute bg-black opacity-95 text-gray-400 flex-col items-center hidden py-10 w-screen h-screen"}>
                <div className="top flex justify-between w-full px-10">
                    <div  className="nav-left">
                         <img src="./images/logo.png" alt="logo-image"/>
                    </div>

                     <div className="hamburger justify-center flex flex-col cursor-pointer" onClick={handleMenu}>
                        <div className="text-white">< IoCloseOutline size="1.3rem" /></div>
                     </div>
                </div>

                <ul className="text-3xl mt-4 pt-8">
                          <li className="py-4 cursor-pointer transition duration-200 ease-in hover:text-white ">Home</li>
                          <li className=" py-4 cursor-pointer transition duration-200 ease-in hover:text-white ">Events</li>
                          <li  className="py-4 cursor-pointer  transition duration-200 ease-in hover:text-white ">Food</li>
                          <li  className="pt-4 cursor-pointer transition duration-200 ease-in hover:text-white ">Deals</li>
                </ul>

                <div className="mt-6 py-4 px-6 flex items-center justify-center text-white cursor-pointer bg-transparent hover:bg-white hover:bg-opacity-20 transition duration-200 ease-in">
                          Add a listing
                </div>
            </div>
            
                 

              <div className="nav absolute w-full flex justify-between top-6">
                    <div id="logo-anim" className="nav-left ml-10 md:ml-12 lg:ml-36">
                        <img src="./images/logo.png" alt="logo-image"/>
                    </div>

                    <div className="nav-right flex text-white mr-14 md:mr-16 lg:mr-20">
                        <div id="nav-anim" className="hamburger justify-center flex flex-col md:hidden lg:hidden cursor-pointer" onClick={handleMenu}>
                            <div className="line w-5 rounded-sm"></div>
                            <div className="line w-3 mt-2 rounded-sm"></div>
                        </div>

                      <ul id="nav-anim" className="hidden md:flex lg:flex mx-14 md:mx-2 items-center">
                          <li className="px-7 text-sm md:text-xs py-2 md:px-2 cursor-pointer bg-transparent hover:bg-white hover:bg-opacity-20 transition duration-200 ease-in">Home</li>
                          <li className="ml-5 text-sm md:text-xs px-7  md:px-2 py-2 cursor-pointer bg-transparent hover:bg-white hover:bg-opacity-20 transition duration-200 ease-in">Events</li>
                          <li  className="ml-5 text-sm md:text-xs px-7 md:px-2 py-2 cursor-pointer bg-transparent hover:bg-white hover:bg-opacity-20 transition duration-200 ease-in">Food</li>
                          <li  className="ml-5 text-sm md:text-xs px-7 md:px-2 py-2 cursor-pointer bg-transparent hover:bg-white hover:bg-opacity-20 transition duration-200 ease-in">Deals</li>
                      </ul>

                     <div className="btn-header hidden md:flex lg:flex items-center justify-center px-6 md:px-5 md:ml-2 lg:ml-2 text-sm md:text-xs cursor-pointer hover:bg-transparent transition duration-200 ease-in">
                          Add a listing
                      </div>
                  </div>
              </div>

              <div className="lg:text-4xl xl:text-5xl text-xl md:text-3xl  font-semibold absolute max-w-32 xl:top-52 lg:top-44 md:top-40 md:max-w-4xl lg:max-w-4xl top-32 md:left-12 lg:left-36 left-10 w-full text-white">
                         <div className="overflow-hidden">
                            <span class="head-anim inline-block">You’re one click away</span>
                        </div>
                        <div className="overflow-hidden md:my-4 lg:my-6">
                            <span class="head-anim inline-block">From the best places you’ve</span>
                        </div>
                        <div className="overflow-hidden">
                            <span class="head-anim inline-block">Ever wanted to visit</span>
                        </div>
              </div>

              <div className="w-full md:w-4/11 lg:w-3/11 xl:w-4/11 absolute bottom-0 lg:right-0 md:right-0">
                  <div className=" text-xxs flex md:text-sm lg:text-sm py-2 mx-10 md:mx-0 lg:mx-0">
                        <div className="flex md:ml-8 lg:ml-8 border-b-2 pb-2 cursor-pointer border-transparent  items-center hover:border-white transition ease-in duration-400">
                        <div className="overflow-hidden">
                            <span class="icon-anim inline-block icons mr-2 bg-transparent text-white">< IoLocationOutline  /></span>
                            <div className="icon-anim inline-block label font-light hover:font-semibold text-white text-opacity-70 hover:text-opacity-100">Business</div>
                        </div>
                             
                             
                        </div>

                        <div className="flex mx-12 pb-2 border-b-2 cursor-pointer border-transparent  items-center hover:border-white transition ease-in duration-400">
                        <div className="overflow-hidden">
                            <span className="icon-anim inline-block icons mr-2 bg-transparent text-white"><  FiFilm  /></span>
                            <div className="icon-anim inline-block label font-light hover:font-semibold text-white text-opacity-70 hover:text-opacity-100">Events</div>
                            </div>
                        </div>

                        <div className="flex pb-2 border-b-2 cursor-pointer border-transparent items-center hover:border-white transition ease-in duration-400 text-opacity-50 hover:text-opacity-100">
                        <div className="overflow-hidden">
                            <span className="icon-anim inline-block icons mr-2 bg-transparent text-white">< FiHome  /></span>
                            <div className="icon-anim inline-block label font-light hover:font-semibold text-white text-opacity-70 hover:text-opacity-100">Real Estate</div>
                            </div>
                        </div>
                  </div>

                  <div className="bottom  md:px-3 lg:px-2  flex flex-col md:flex-row lg:flex-row icons md:text-sm lg:text-sm py-1 md:py-2 lg:py-2 bg-white bg-opacity-20">

                        <div className="inputs text-xxs md:text-sm flex justify-around md:w-4/5 lg:w-4/5">
                            <div className="input-1 mb-6 w-2/5">
                                 <input className="py-2 text-white placeholder-white outline-none w-full bg-transparent border-b border-white" placeholder="What are you looking for?" type="text"/>
                            </div>

                            <div className="input-2 mb-6 w-2/5">
                                <input className="py-2 text-white placeholder-white outline-none w-full bg-transparent border-b" placeholder="Where to look" type="text"/>
                            </div>
                        </div>
                        

                        <div className="btn flex items-center justify-center md:justify-start icons mx-5 mb-4 md:mb-0 lg:mb-0">
                             <div className="btn-header flex items-center justify-center text-xs md:text-sm lg:text-sm w-2/3  md:w-full px-2 py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 cursor-pointer text-white hover:bg-transparent transition duration-200 ease-in">
                                 Search
                            </div>
                        </div>
                        
                  </div>
              </div>
             

              <img className="w-full h-screen" src="./images/city.png" alt="bg-image"/> 

     
         </div>
    )
}

export default Header;
