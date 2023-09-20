import React from 'react';
import about_img from '../Images/about_img.webp';

export default function AboutUs() {
    return (
        <>

            <section class="w-full bg-white pt-7 pb-7 pt-20 ">
                <div class="box-border flex flex-col items-center content-center lg:px-8  xmd:px-8 md:px-8 xsm:px-8 sm:px-0 mx-auto leading-6 text-black border-0 border-gray-300 border-solid 
                md:flex-row max-w-7xl lg:px-16">


                    <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                        <img src={about_img} class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
                    </div>


                    <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            About Hindustan Rides
                        </h2>
                        <br /><p>Welcome to hindustan Rides Cab Rental One of the oldest car hire companies with the youngest fleet of cars in West India. Buzzway allows you to hire a rental car of your choice at an affordable rate. Book yourself a car with a chauffeur conveniently through online booking or on your smartphone. To make your travel memorable, rewarding & hassle-free, we offer high-quality service and a host of benefits to heighten your experience. </p>
                        <br /><br />
                        <p>We offer the best car rental service for the tourists who wish to make their holidays comfortable and unforgettable. We always make the effort to bring much more satisfaction, our clients pla</p>
                        <br /><p>Know More</p>
                        <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span class="text-sm font-bold">✓</span></span> Maximize productivity and growth
                            </li>
                            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span class="text-sm font-bold">✓</span></span> Speed past your competition
                            </li>
                            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span class="text-sm font-bold">✓</span></span> Learn the top techniques
                            </li>
                        </ul>
                    </div>

                </div>

            </section>





        </>
    )
}
