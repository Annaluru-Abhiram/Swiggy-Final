import React from "react";
import { Link } from "react-router";

const Navbar = () => {
    console.log("Navbar rendered");

    return (
        <>
            <nav className="flex justify-between overflow-hidden gap-75 w-full mx-auto bg-white pl-7 pr-5 h-21 shadow-md 
            shadow-[0 15px 40px -20px rgba(40, 44, 63, .15)] fixed top-0 z-1000">
                <div className="nav-left flex 
                gap-9 items-center h-full">
                    <img src="/navbarLogo.png" className="w-15" />
                    <div className="drop-menu flex items-center gap-3 hover:cursor-pointer">
                        <p className="border-b-2 border-black font-bold text-[14px]"><Link to="/other">Other</Link></p>
                        <i style={{ color: "#fe5200" }} className="fa-solid fa-caret-down"></i>
                    </div>
                </div>

                <div className="nav-right text-[17px] flex gap-11 h-full font-semibold items-center">
                    <div id="op1" className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
                        <i className="fa-regular fa-square text-lg"></i>
                        <Link to="/swiggycorporate" className="flex items-center flex-shrink-0 min-w-[150px]">Swiggy Corporate</Link>
                    </div>

                    <div id="op2" className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
                        <i className="fa-solid fa-magnifying-glass text-lg"></i>
                        <Link to="/search" className="flex items-center flex-shrink-0">Search</Link>
                    </div>

                    <div id="op3" className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
                        <i className="fa-solid fa-percent text-lg"></i>
                        <Link to="/offers" className="flex items-center flex-shrink-0">
                            Offers<sup className="text-orange-400 ml-1">NEW</sup>
                        </Link>
                    </div>

                    <div id="op4" className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
                        <i className="fa-brands fa-hire-a-helper text-lg"></i>
                        <Link to="/help" className="flex items-center flex-shrink-0">Help</Link>
                    </div>

                    <div id="op5" className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
                        <i className="fa-solid fa-user text-lg"></i>
                        <Link to="/signin" className="flex items-center flex-shrink-0">Sign In</Link>
                    </div>

                    <div id="op6" className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
                        <i className="fa-solid fa-cart-shopping text-lg"></i>
                        <Link to="/cart" className="flex items-center flex-shrink-0">Cart</Link>
                    </div>
                </div>

            </nav>
            <div className="pt-24"></div>
        </>
    )
}

export default Navbar;