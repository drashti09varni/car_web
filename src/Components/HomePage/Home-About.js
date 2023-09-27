import React from 'react';
import about_img from '../../Images/about_img.webp';

export default function AboutUs() {
    return (
        <>

            <div className="w-full bg-white pt-7 pb-7  ">
                <div className="box-border flex   items-center content-center lg:px-8  xmd:px-8 md:px-8 xsm:px-2 sm:px-0 mx-auto leading-6 text-black border-0 border-gray-300 border-solid 
                 max-w-7xl lg:px-16">


                    <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5  text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none
                     lg:mb-0 lg:w-[60%] xmd:w-[50%] xl:pl-10 lg:block xmd:block md:block xsm:block sm:hidden xl:hidden 2xl:hidden">
                        <img src={about_img} className="p-2 pl-6 lg:pl-16 lg:pr-20 about-img" />
                    </div>


                    <div className="box-border  w-full text-black border-solid lg:w-[40%]  xmd:w-[50%] md:pl-10 md:order-none lg:p-0 md:p-0 xsm:p-0 sm:p-5  xl:p-5 2xl:p-5 ">
                        <h2 className="m-0 lg:text-[42px]  xmd:text-[42px]  md:text-[42px] xsm:text-[42px] sm:text-[25px] xl:text-[25px] 2xl:text-[20px] mb-[12px] pb-[5px] font-[600] leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl about-text font-mont">
                            About Hindustan Rides
                        </h2>
                        <p className='text-[#292a2c] text-[15px] font-[500]  leading-7'>
                            Welcome to hindustan Rides Cab Rental One of the oldest car hire companies with the youngest fleet of cars in West India. Buzzway allows you to hire a rental car of your choice at an affordable rate. Book yourself a car with a chauffeur conveniently through online booking or on your smartphone. To make your travel memorable, rewarding & hassle-free, we offer high-quality service and a host of benefits to heighten your experience. </p>
                        <br />
                        <p className='text-[#292a2c] text-[15px] font-[500]  leading-7'>We offer the best car rental service for the tourists who wish to make their holidays comfortable and unforgettable. We always make the effort to bring much more satisfaction, our clients pla</p>
                        <br /><p>Know More</p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Speed past your competition
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Learn the top techniques
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}
