import React from 'react'
import './footer.css'

function Footer() {

    return (
        <div className="flex flex-col md:flex-row text-left text-white opacity-100">
            
            <div className="left-footer w-full md:w-7/11 text-white text-xs flex flex-col justify-center items-center py-16 md:py-12 lg:py-16">

                <div id="text-anim" className="w-2/3 lg:w-1/2">
                    <img src="./images/logo.png" alt="logo-image"/>
                </div>
                 
                 <div id="text-anim" className="w-2/3 lg:w-1/2 text-left leading-6 md:mt-2 lg:mt-4 mt-4">
                    Laboris duis qui proident cillum. Amet sit ullamco
                    ut culpa adipisicing exercitation tempor nulla. 
                    Aute est laborum id nisi ad veniam fugiat. Culpa tempor
                    anim sunt occaecat proident. Cillum adipisicing labore
                    eu est do sit sunt.
                 </div>
            </div>

            <div className="right-footer w-full md:w-4/11 flex pt-16 justify-evenly pb-10 px-8">
                <div id="text-anim" className="hidden md:flex flex-col">
                    <div className="font-bold mb-4">WEBSITE</div>
                    <div className="links text-xs cursor-pointer">
                        <div className="opacity-70 hover:opacity-100">Home</div>
                        <div className="my-3 opacity-70 hover:opacity-100">About us</div>
                        <div className="my-3 opacity-70 hover:opacity-100">Services</div>
                        <div className="my-3 opacity-70 hover:opacity-100">Foods</div>
                        <div className="my-3 opacity-70 hover:opacity-100">Events</div>
                        <div className="opacity-70 hover:opacity-100">Deals</div>
                    </div>
                </div>

                <div id="text-anim" className="hidden md:flex px-4 flex-col">
                    <div className="font-bold mb-4">SUPPORT</div>
                    <div className="links text-xs cursor-pointer">
                        <div className="opacity-70 hover:opacity-100">Contacts Us</div>
                        <div className="my-3 opacity-70 hover:opacity-100">Privacy Policy</div>
                        <div className="my-3 opacity-70 hover:opacity-100">Support service</div>
                        <div className="my-3 opacity-70 hover:opacity-100">Customer care</div>
                        <div className="opacity-70 hover:opacity-100">Terms and Conditions</div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="font-bold mb-5">CONTACT US</div>
                    <div className="links w-60 md:w-44 lg:w-60 text-xs">
                        <input className="text-footer py-2 pl-3 outline-none w-full" placeholder="Email" type="text"/>
                        <textarea className="text-footer h-24 my-3 pl-3 pt-3 resize-none outline-none w-full" placeholder="Type a message"></textarea>
                        <div className="py-2 btn-footer flex items-center justify-center w-full cursor-pointer text-white">
                        Send message
                      </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
