'use client'
import React, { useState } from 'react'
import Sidebar from '../components/dashboard/sidebar'
import { GiHamburgerMenu } from "react-icons/gi";

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {

        const [sidebar, setSidebar] = useState("col-span-2 sm:block md:block hidden");

    const opensidebar = () => {
        setSidebar("position-absolute left-0 top-0 z-50 bg-gray-800 h-screen p-3");
    }

    return (
        <div className='dashboard'>
            <div className="grid grid-cols-12">
                <div className={sidebar}>
                    <Sidebar/>
                </div>
                <div className="col-span-12 sm:col-span-10 md:col-span-10 h-screen overflow-auto">
                    <header className='px-3 py-5 bg-gray-800 sticky top-0 z-10'>
                        <div className="buttons text-end px-3">
                            <button className='mx-2 px-2 bg-white text-black font-bold rounded'>Active</button>
                            <button onClick={opensidebar} className='mx-2 px-2 bg-white text-black font-bold rounded'><GiHamburgerMenu /></button>
                        </div>
                    </header>
                    <div className="content p-5">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;