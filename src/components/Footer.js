import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className="flex text-left text-white">
            
            <div className="left-footer text-white text-xs flex flex-col justify-center items-center py-16">

                <div className="content-footer">
                    <img src="./images/logo.png" alt="logo-image"/>
                </div>
                 
                 <div className="content-footer text-left leading-6 mt-4">
                    Laboris duis qui proident cillum. Amet sit ullamco
                    ut culpa adipisicing exercitation tempor nulla. 
                    Aute est laborum id nisi ad veniam fugiat. Culpa tempor
                    anim sunt occaecat proident. Cillum adipisicing labore
                    eu est do sit sunt.
                 </div>
            </div>

            <div className="right-footer flex pt-16 justify-evenly pb-10">
                <div>
                    <div className="font-bold mb-4">WEBSITE</div>
                    <div className="links text-xs">
                        <div>Home</div>
                        <div className="my-3">About us</div>
                        <div className="my-3">Services</div>
                        <div className="my-3">Foods</div>
                        <div className="my-3">Events</div>
                        <div>Deals</div>
                    </div>
                </div>

                <div>
                    <div className="font-bold mb-4">SUPPORT</div>
                    <div className="links text-xs">
                        <div >Contacts Us</div>
                        <div className="my-3">Privacy Policy</div>
                        <div className="my-3">Support service</div>
                        <div className="my-3">Customer care</div>
                        <div>Terms and Conditions</div>
                    </div>
                </div>

                <div>
                    <div className="font-bold mb-5">CONTACT US</div>
                    <div className="links w-60 text-xs">
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
