import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/nav'
import Footer from '@/components/footer'


import { BiSearchAlt2 } from 'react-icons/bi';

import styles from '../styles/home.module.scss';
import Suisseintl from 'next/font/local';
import Druk from 'next/font/local';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

const suss = Suisseintl({
    src: '../../public/fonts/SuisseIntl-Bold.otf',
    display: 'swap',
})

const druk = Druk ({
  src: '../../public/fonts/druk.otf',
  display: 'swap',
})

const page = () => {
  return (
    <>
    <Nav/>
      <main>
        <section className={` ${styles.heroText}  bg-primary-100  `} >
          <div className="flex flex-col items-center justify-center">
              <h1 className={`text-primary-50 ${suss.className} `}>
              Grow <span className='text-orange'>smarter</span> together.
              </h1>

            
                  <p className={` w-2/4 mt-2 text-white ${inter.className} `}>
                  We believe that education should be accessible to everyone. We are a dedicated online platform designed to help students connect, collaborate, and excel academically. Whether you're looking for study materials, lecture notes, or a platform to share your knowledge .
                  </p>
              
              <div className={`form mt-6`}>
                  <form className='w-96'>   
                      <label for="default-search" className="mb-2 text-sm font-medium text-gray sr-only dark:text-white">Search</label>
                      <div className="relative w-full">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg aria-hidden="true" className="w-5 h-5 text-gray dark:text-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                          </div>

                          <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray focus:border-gray " placeholder="Search for courses, books or documents
  ..." required />

                          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-orange focus:ring-4 focus:outline-none focus:ring-primary-50 font-medium rounded-full text-sm px-3 py-3 ">
                              <BiSearchAlt2/>
                          </button>
                      </div>
                  </form>
              </div>
              
          </div>
        </section> 

        <section className={` ${styles.allIncluded}  bg-gray p-7  `} >
          <div className="container">
              <h2 className={` text-primary-100 text-center ${druk.className} `}>
              <span> ALL </span> IS INCLUDED.
              </h2>
              <div>
                <p className={` text-center text-orange  mt-9 ${inter.className} `}>
                From study materials, lecture notes, or a platform to share your knowledge 
                </p>
              </div>
          </div>
        </section> 

        <section className={` ${styles.stats}  bg-gray   `} >
          <div className="container">
            <div className={`statsTitl text-center flex items-center justify-center `}>
            <div>
                {/* <Image className={ `${styles.statsImage}` } src="/durusu2.png" width={200} height={200} /> */}
                  <h3 className={` text-primary-100 text-center ${druk.className} `}>
                  540K students saved, and counting.
                  </h3>
                  <div className={` flex items-center justify-center mt-6 mb-7`}>
                    <p className={` w-2/4 ${inter.className} `}>
                    Incorporating an astounding 20,000 new study notes daily, this student community has undeniably secured its place as one of the world's most active, offering a vibrant tapestry of subjects and topics.
                    </p>
                  </div>
            </div>
            
            </div>
              {/* grid */}
              <div className={`grid grid-cols-4 gap-4 py-20`}>
                <div className={`flex flex-col items-center justify-center`}>
                  <h2 className={` text-orange  ${druk.className} `}>
                  <span> 1M </span>
                  </h2>
                  <div>
                    <p className={` text-black font-bold   ${inter.className} `}>
                    Students.
                    </p>
                  </div>
                </div>
                <div className={`flex flex-col items-center justify-center`}>
                  <h2 className={` text-orange  ${druk.className} `}>
                  <span> 1000+ </span>
                  </h2>
                  <div>
                    <p className={` text-black font-bold   ${inter.className} `}>
                    Institutions.
                    </p>
                  </div>
                </div>
                <div className={`flex flex-col items-center justify-center`}>
                  <h2 className={` text-orange  ${druk.className} `}>
                  <span> 100K + </span>
                  </h2>
                  <div>
                    <p className={` text-black font-bold   ${inter.className} `}>
                    Study resources
                    </p>
                  </div>
                </div>
                <div className={`flex flex-col items-center justify-center`}>
                  <h2 className={` text-orange  ${druk.className} `}>
                  <span> 100 + </span>
                  </h2>
                  <div>
                    <p className={` text-black font-bold   ${inter.className} `}>
                  Countries
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </section>

        <section className={` ${styles.why}  bg-primary-100   `} >
            <div className={`container p-16 `}>
                <div className={`flex flex-col items-center justify-center`}>
                      <h2 className={` ${druk.className} text-white `}>
                        We work hard & We play hard!
                      </h2>
                      <p className={` ${inter.className} text-white w-3/4 text-center `}>
                      Dive into a boundless learning adventure! Join our student community now and explore a daily influx of 20,000 fresh study notes. Uncover an ever-growing tapestry of resources spanning diverse subjects. Don't just learn, thrive – sign up today and fuel your knowledge journey!
                      </p>
                      <div className={` flex items-center justify-evenly `}>
                        <button className={`bg-orange text-white px-9 py-3 rounded-full mt-6 mx-6`}>
                          Join Now
                        </button>
                        <button className={`bg-orange text-white px-9 py-3 rounded-full mt-6 mr-6` }>
                          Check Our Opennings
                        </button>
                      </div>
                </div>
            </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default page;