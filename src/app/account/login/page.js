import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Suisseintl from 'next/font/local';
import Druk from 'next/font/local';
import { Inter } from 'next/font/google';

import styles from '@/styles/accounts.module.scss';
import { FcGoogle } from 'react-icons/fc';
import Testimonials from '@/components/testimonials';

const inter = Inter({ subsets: ['latin'] })

const suss = Suisseintl({
    src: '../../../../public/fonts/SuisseIntl-Bold.otf',
    display: 'swap',
})

const druk = Druk ({
  src: '../../../../public/fonts/druk.otf',
  display: 'swap',
})


const page = () => {
    return (
       <>
            <main className="grid grid-cols-2 gap-2">
                <section className={` container px-12 `}>
                    <div className={` form-sec p-16`}>
                        {/* form section */}
                        <div className={` ${styles.welcome}`}>
                            <h2 className={` text-center ${druk.className} `}>
                                Welcome Back.
                            </h2>
                            <p className={` text-center ${inter.className} `}>
                                Learning & Teaching has never been easier.
                            </p>
                        </div>
                        <div className="form-section mt-5 px-14">
                            <form class={` ${styles.formSec} space-y-4 md:space-y-6`} action="#">
                                <div>
                                    <label htmlFor="email" class="block mb-2 text-sm font-medium ">Your email :</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-midblack text-black sm:text-sm rounded-lg focus:ring-grey focus:border-grey block w-full p-2.5" placeholder="name@company.com" required=""/>
                                </div>
                                <div>
                                    <label htmlFor="password" class="block mb-2 text-sm font-medium">Password :</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-midblack text-black sm:text-sm rounded-lg focus:ring-grey focus:border-grey block w-full p-2.5" required=""/>
                                </div>
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-grey rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label htmlFor="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                            <div>
                                <Link href="/dhas" className='my-5'>
                                    <button type="submit" class="w-full text-white bg-primary-100 hover:bg-orange focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ">Sign in</button>
                                    </Link>
                            </div>
                                <button type="submit" class="inline-flex items-center justify-center w-full text-white bg-black hover:bg-sfteal focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ">
                                    <span className='text-2xl px-4'>
                                    <FcGoogle/>
                                    </span>
                                    <p>
                                        Sign in With Google
                                    </p>
                                    
                                </button>
                                
                            </form>
                            
                        
                        </div>
                        <div className="sign-up-sec mt-10 text-center">
                            <div className="create-account">
                                <p>
                                    Don't have an account? <Link href="/account/sign-up"><span className='text-orange underline font-bold'>
                                        Create an account</span></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={` bg-orange `}>
                    {/* testimanioal slider component */}
                    <Testimonials/>
                </section>
            </main>
       </>
    );
}

export default page;