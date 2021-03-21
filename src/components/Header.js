import React from 'react'
import './header.css'
import { IoLocationOutline } from 'react-icons/io5';
import { FiHome } from 'react-icons/fi';
import { FiFilm } from 'react-icons/fi';


function Header() {
    return (
        <div>
              <div className="nav absolute w-full flex justify-between top-6">
                  <div className="nav-left ml-36">
                    <img src="./images/logo.png" alt="logo-image"/>
             </div>

                  <div className="nav-right flex text-white mr-20">
                      <ul className="flex mx-14 text-sm items-center">
                          <li className="px-7 py-2 cursor-pointer bg-transparent hover:bg-white hover:bg-opacity-20 transition duration-200 ease-in">Home</li>
                          <li className="ml-5 px-7 py-2 cursor-pointer bg-transparent hover:bg-white hover:bg-opacity-20 transition duration-200 ease-in">Events</li>
                          <li  className="ml-5 px-7 py-2 cursor-pointer bg-transparent hover:bg-white hover:bg-opacity-20 transition duration-200 ease-in">Food</li>
                          <li  className="ml-5 px-7 py-2 cursor-pointer bg-transparent hover:bg-white hover:bg-opacity-20 transition duration-200 ease-in">Deals</li>
                      </ul>

                      <div className="btn-header flex items-center justify-center px-6 text-sm cursor-pointer">
                          Add a listing
                      </div>
                  </div>
              </div>

              <div className="header-text absolute max-w-2xl top-56 left-36 w-full text-white">
                  <div className="flex">You’re one click away</div>
                  <div className="flex">From the best places you’ve</div>
                  <div className="flex">Ever wanted to visit</div>
              </div>

              <div className="input-section absolute bottom-0 right-0">
                  <div className="flex text-sm py-2">
                    <div className="flex ml-8 border-b-2 pb-2 cursor-pointer border-transparent hover:border-white transition ease-in duration-400">
                        <div className="icon mr-2 bg-transparent text-white">< IoLocationOutline size="1.3em" /></div>
                        <div className="label font-light hover:font-semibold text-white text-opacity-70 hover:text-opacity-100">Business</div>
                    </div>

                    <div className="flex mx-12 pb-2 border-b-2 cursor-pointer border-transparent hover:border-white transition ease-in duration-400">
                        <div className="icon mr-2 bg-transparent text-white"><  FiFilm size="1.3em" /></div>
                        <div className="label font-light hover:font-semibold text-white text-opacity-70 hover:text-opacity-100">Events</div>
                    </div>

                    <div className="flex pb-2 border-b-2 cursor-pointer border-transparent hover:border-white transition ease-in duration-400 text-opacity-50 hover:text-opacity-100">
                        <div className="icon mr-2 bg-transparent text-white">< FiHome size="1.3em" /></div>
                        <div className="label font-light hover:font-semibold text-white text-opacity-70 hover:text-opacity-100">Real Estate</div>
                    </div>
                  </div>

                  <div className="bottom flex text-sm py-2 bg-white bg-opacity-20">
                        <div className="input-1 ml-8 mb-6 w-2/6">
                            <input className="py-2 text-white placeholder-white outline-none w-full bg-transparent border-b border-white" placeholder="What are you looking for?" type="text"/>
                        </div>

                        <div className="input-2 mx-12 mb-6 w-2/6">
                            <input className="py-2 text-white placeholder-white outline-none w-full bg-transparent border-b" placeholder="Where to look" type="text"/>
                        </div>

                        <div className="btn flex items-center justify-center">
                        <div className="btn-header px-4 py-2 cursor-pointer text-white">
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
