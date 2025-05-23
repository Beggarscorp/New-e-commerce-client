'use client';
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";


const header = () => {

    const [MenuClass,setmenuclass] = useState("hidden md:flex gap-4 items-center h-full px-5 text-1xl");
    const [menuicon,setmenuicon] = useState("text-3xl md:hidden");
    const [closeicon,setcloseicon] = useState("text-3xl hidden");

    const menuclick = () => {
        setmenuclass("md:flex gap-4 items-center h-full px-5 text-1xl spa ");
        setmenuicon("text-3xl md:hidden hidden");
        setcloseicon("text-3xl md:hidden");
    }
    const closeclick = () => {
        setmenuclass("hidden md:flex gap-4 items-center h-full px-5 text-1xl");
        setmenuicon("text-3xl md:hidden");
        setcloseicon("text-3xl hidden");
    }

    return (
        <div className="header flex justify-between w-full bg-red-600 p-5">
            <div className="logo text-3xl">Logo</div>
            <div className="links">
                <div className="menu-icon flex justify-end">
                    <GiHamburgerMenu onClick={menuclick} className={menuicon} />
                    <RxCross2 onClick={closeclick} className={closeicon} />
                </div>
                <ul className={MenuClass}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">About us</Link>
                    </li>
                    <li>
                        <Link href="/">Contact us</Link>
                    </li>
                    <li>
                        <Link href="/">Blogs</Link>
                    </li>
                  
                </ul>
            </div>
        </div>
    
    )
 }
 
 export default header;