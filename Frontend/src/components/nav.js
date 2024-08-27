import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Suisseintl from 'next/font/local';
import { Inter } from 'next/font/google';

import { LuBrainCircuit } from "react-icons/lu"

const inter = Inter({ subsets: ['latin'] })

const suisseintl = Suisseintl({
    src: '../../public/fonts/SuisseIntl-Bold.otf',
    display: 'swap',
})

const nav = () => {
    return (
        <>
            <nav className="flex bg-primary-100 text-white items-center justify-between ">
                <div className="p-4">
                    <ul className={`flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 ${inter.className}`}>
                        <li className="p-4 hover:underline cursor-pointer relative" >
                            About Us

                        </li>
                        <li className="p-4">
                            <Link href="/about">
                                FAQs
                            </Link>
                        </li>
                        <li className="p-4">
                            <Link href="/about">
                                Discover
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="md:hidden sm:block px-4">
                    <button
                        type="button"
                        className="text-black px-4 py-3 rounded "
                    // onClick={handleToggle}
                    >
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                <div className="hidden  md:block md:w-auto " id="mobile-menu">
                    <Image src="/logo.svg" width={30} height={30} alt="logo" />
                </div>

                <div className="hidden md:block">
                    <ul className={`flex items-center flex-col mt-4 md:flex-row md:space-x-4 md:mt-0  `}>

                        <li className={`p-4 ${inter.className} `}>
                            <Link href="/about" className={` inline-flex items-center justify-between  `}> 
                                <span className="text-orange text-xl mx-3">
                                    <LuBrainCircuit/>
                                </span>
                                Ask AI
                            </Link>
                        </li>

                        <li className="p-4 relative">
                            <Link href="/account/login">
                                <button
                                    className={`bg-orange rounded-full text-white px-8 py-2 ${inter.className} `}>
                                   Sign In
                                </button>
                            </Link>
                        </li>
                        <button
                            type="button"
                            className="text-white px-4 py-3 rounded "
                        // onClick={handleToggle}
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>

                    </ul>
                </div>
            </nav>

        </>
    );
}

export default nav;