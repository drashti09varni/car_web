import React from 'react';
import img from '../Images/banner.webp';
import carImage from '../Images/car_b.webp';
import HeroForm from './HeroForm';
import AboutUs from './About-us';

export default function HeroImage() {
    return (
        <>
            <div >

                <div class="w-full lg:h-[100vh] xmd:h-[80vh] md:h-[75vh]  xsm:h-[65vh] sm:h-[65vh] 
                lg:rounded-none xmd:rounded-none md:rounded-none  xsm:rounded-none  sm:rounded-b-[60px] xl:rounded-b-[60px] 2xl:rounded-b-[60px]
                bg-dunes bg-cover bg-center flex justify-center" >
                    <div className='mt-[110px]'>
                        <div className='grid grid-cols-2 '>
                            <div class="md:w-[100%] lg:left-[85px] xmd:left-[52px] md:left-[52px] xsm:left-[52px] absolute 
                              lg:block xmd:block md:block xsm:block sm:hidden xl:hidden 2xl:hidden">
                                <h1 class="lg:text-[53px] xsm:text-[33px] font-[700] text-yellow font-mont capitalize
                               ">Book A Cab </h1>
                                <h1 class="lg:text-[55px] xsm:text-[33px] font-[700] text-[#fff] font-mont capitalize tracking-[1.3px]  mt-[-2px]">In 3 Easy Steps </h1>
                                <p className='lg:text-[30px] xsm:text-[18px] text-[#fff] tracking-[2px] mt-[0px] font-mont'>Reliable & Safe Transparent</p>
                            </div>
                            <div className='ml-auto'>

                                <div class="lg:w-[45%] xsm:w-[45%] absolute right-12 lg:block xmd:block md:block xsm:block sm:hidden xl:hidden 2xl:hidden">
                                    <img src={carImage} alt="Image Description" class="w-full" />
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
        </>
    )
}

