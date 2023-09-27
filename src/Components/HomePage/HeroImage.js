import React, { useEffect } from "react";
import carImage from '../../Images/car_b.webp';
import HeroForm from './HeroForm';
import AboutUs from './Home-About';
import OurService from './Our-Service';
import HowItWork from './How-it-work';
import Testimonial from './Testimonial';

export default function HeroImage() {
  
        
    return (
        <>
            <div >

                <div className="w-full lg:h-[100vh] xmd:h-[80vh] md:h-[75vh]  xsm:h-[65vh] sm:h-[65vh] 
                lg:rounded-none xmd:rounded-none md:rounded-none  xsm:rounded-none  sm:rounded-b-[60px] xl:rounded-b-[60px] 2xl:rounded-b-[60px]
                bg-dunes bg-cover bg-center flex justify-center" >
                    <div className='mt-[110px]'>
                        <div className='grid grid-cols-2 '>
                            <div className="lg:left-[85px] xmd:left-[52px] md:left-[52px] xsm:left-[52px] absolute 
                              lg:block xmd:block md:block xsm:block sm:hidden xl:hidden 2xl:hidden">
                                <h1 className="lg:text-[53px] xsm:text-[33px] font-[700] text-yellow font-mont capitalize animation-1
                               ">Book A Cab </h1>
                                <h1 className="animation-2 lg:text-[55px] xsm:text-[33px] font-[700] text-[#fff] font-mont capitalize tracking-[1.3px]  mt-[-2px]">In 3 Easy Steps </h1>
                                <p className='animation-3 lg:text-[30px] xsm:text-[18px] text-[#fff] tracking-[2px] mt-[0px] font-mont'>Reliable & Safe Transparent</p>
                            </div>
                            <div className='ml-auto'>

                                <div className="lg:w-[45%] xsm:w-[45%] absolute right-12 lg:block xmd:block md:block xsm:block sm:hidden xl:hidden 2xl:hidden car-animation
                                ">
                                    <img src={carImage} alt="Image Description" className="w-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:mt-[550px] xmd:mt-[400px] md:mt-[350px] xsm:mt-[290px] sm:mt-[50px] xl:mt-[50px] '>
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
        </>
    )
}

