import React, { useEffect } from "react";
import carImage from '../../Images/car_b.webp';
import HeroForm from './HeroForm';
import AboutUs from './Home-About';
import OurService from './Our-Service';
import HowItWork from './How-it-work';
import Testimonial from './Testimonial';
import Memories from "./Memories";

export default function HeroImage() {

    
   

    return (
        <>
            <div className="bg-dunes bg-cover bg-center">
                <div className="mx-auto px-14 pt-28">
                    <div className="grid grid-cols-2 gap-12 ">
                        <div className="text-left lg:block xmd:block md:block xsm:block sm:hidden xl:hidden 2xl:hidden">
                            <h1 className="lg:text-[53px] xsm:text-[33px] font-[700] text-yellow font-mont capitalize animation-1
                               ">Book A Cab </h1>
                            <h1 className="animation-2 lg:text-[55px] xsm:text-[33px] font-[700] text-[#fff] font-mont capitalize tracking-[1.3px]  mt-[-2px]">In 3 Easy Steps </h1>
                            <p className='animation-3 lg:text-[30px] xsm:text-[18px] text-[#fff] tracking-[2px] mt-[0px] font-mont'>Reliable & Safe Transparent</p>
                        </div>

                        <div className="lg:w-[90%] xmd:w-[90%]  md:w-[90%] xsm:w-[90%]   relative right-12 lg:block xmd:block md:block xsm:block sm:hidden xl:hidden 2xl:hidden">
                            <img src={carImage} alt="Image Description" className="w-full" />
                        </div>
                    </div>




                </div>
                <div className=" ">
                    <div className=" mx-auto">
                        <HeroForm />
                    </div>
                </div>
            </div>


            <AboutUs />
            <OurService />
            <div className='lg:block xmd:block md:block xsm:block sm:hidden xl:hidden 2xl:hidden'>
                <HowItWork />
            </div>
            <Testimonial />
            <Memories />
        </>
    )
}

// mongodb+srv://varniinfosoft:eI5JppJU5SKhtfs9@cluster0.g1lyz1s.mongodb.net/demo?retryWrites=true&w=majority