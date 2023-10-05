import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiFillStar } from 'react-icons/ai';
import image1 from '../../Images/Assured-Innova---Toyota-Innova1.webp';
import image2 from '../../Images/SUV---Maruti-Suzuki-Ertiga1.webp';
import image3 from '../../Images/Tempo-Traveller1.webp';
import image4 from '../../Images/Assured-Innova---Toyota-Innova1.webp';

export default function App() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay:true,
    dots: true,
    responsive: [
        {
            breakpoint: 768, // Define a breakpoint at a certain screen width
            settings: {
                slidesToShow: 2, // Adjust settings for screens with a width less than 768px
                slidesToScroll: 2,
            }
        },
        {
          breakpoint: 504, // Define a breakpoint at a certain screen width
          settings: {
              slidesToShow: 1, // Adjust settings for screens with a width less than 768px
              slidesToScroll: 1,
          }
      },
        {
            breakpoint: 480, // Define another breakpoint for smaller screens
            settings: {
                slidesToShow: 1, // Adjust settings for screens with a width less than 480px
                slidesToScroll: 1,
            }
        }
    ]
};


  return (
    <div>
      <div className="flex items-center justify-center bg-[#f5f5f5] pb-20">
        <div className=" mx-auto lg:px-24 xmd:px-20 md:px-10 xsm:px-16 sm:px-10 xl:px-2 2xl:px-2 lg:w-[1300px] xmd:w-[1000px] md:w-[1000px] xsm:w-[878px] sm:w-[519px] xl:w-[340px] 2xl:w-[340px]">
          <center className='text-[35px] font-mont font-[600] my-10'> Our Popular Fleets </center>
          <Slider className="custom-slider" {...settings}>
            <div className="my-1 lg:px-5 xmd:px-2 md:px-3 xsm:px-3 sm:px-1 xl:px-1 2xl:px-0 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden shadow-lg ">
                <a>
                  <img alt="Placeholder" className="block h-auto w-full" src={image1} />
                </a>
                <div className='text-center justify-center bg-[#fff] pb-5'>
                  <p className='text-[22px] py-3'>Toyota Innova Crysta (6+1)</p>
                  <div className='flex justify-center space-x-1'>
                    <AiFillStar fill='#fcaf21'  size={20} />
                    <AiFillStar fill='#fcaf21'  size={20}/>
                    <AiFillStar fill='#fcaf21'  size={20}/>
                    <AiFillStar fill='#fcaf21'  size={20}/>
                    <AiFillStar  fill='#fcaf21' size={20}/>
                  </div>
                  <p className='text-[20px] text-[#808080]'>194 Review</p>
                  <h3 className='text-[25px] font-[600] '>₹ 18.00/ KM</h3>
                  <button className='uppercase bg-yellow px-7 py-2 my-3 font-[600] rounded-3xl'>Book now</button>
                </div>
              </article>
            </div>


            <div className="my-1 lg:px-5 xmd:px-2 md:px-3 xsm:px-3 sm:px-1 xl:px-1 2xl:px-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden shadow-lg">
                <a  >
                  <img alt="Placeholder" className="block h-auto w-full" src={image2} />
                </a>
                <div className='text-center justify-center bg-[#fff] pb-5'>
                  <p className='text-[22px] py-3'>Toyota Innova Crysta (6+1)</p>
                  <div className='flex justify-center space-x-1'>
                    <AiFillStar fill='#fcaf21'  size={20} />
                    <AiFillStar fill='#fcaf21'  size={20}/>
                    <AiFillStar fill='#fcaf21'  size={20}/>
                    <AiFillStar fill='#fcaf21'  size={20}/>
                    <AiFillStar  fill='#fcaf21' size={20}/>
                  </div>
                  <p className='text-[20px] text-[#808080]'>194 Review</p>
                  <h3 className='text-[25px] font-[600] '>₹ 18.00/ KM</h3>
                  <button className='uppercase bg-yellow px-7 py-2 my-3 font-[600] rounded-3xl'>Book now</button>
                </div>
              </article>
            </div>



            <div className="my-1 lg:px-5 xmd:px-2 md:px-3 xsm:px-3 sm:px-1 xl:px-1 2xl:px-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden shadow-lg">
                <a  >
                  <img alt="Placeholder" className="block h-auto w-full" src={image3} />
                </a>
                <div className='text-center justify-center bg-[#fff] pb-5'>
                  <p className='text-[22px] py-3'>Toyota Innova Crysta (6+1)</p>
                  <div className='flex justify-center space-x-1'>
                    <AiFillStar fill='#fcaf21'  size={20} />
                    <AiFillStar fill='#fcaf21'  size={20}/>
                    <AiFillStar fill='#fcaf21'  size={20}/>
                    <AiFillStar fill='#fcaf21'  size={20}/>
                    <AiFillStar  fill='#fcaf21' size={20}/>
                  </div>
                  <p className='text-[20px] text-[#808080]'>194 Review</p>
                  <h3 className='text-[25px] font-[600] '>₹ 18.00/ KM</h3>
                  <button className='uppercase bg-yellow px-7 py-2 my-3 font-[600] rounded-3xl'>Book now</button>
                </div>
              </article>
            </div>



            <div className="my-1 lg:px-5 xmd:px-2 md:px-3 xsm:px-3 sm:px-1 xl:px-1 2xl:px-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden shadow-lg">
                <a  >
                  <img alt="Placeholder" className="block h-auto w-full" src={image4} />
                </a>
                <div className='text-center justify-center bg-[#fff] pb-5'>
                  <p className='text-[22px] py-3'>Toyota Innova Crysta (6+1)</p>
                  <div className='flex justify-center space-x-1'>
                    <AiFillStar fill='#fcaf21'  size={20} />
                    <AiFillStar fill='#fcaf21'  size={20}/>
                    <AiFillStar fill='#fcaf21'  size={20}/>
                    <AiFillStar fill='#fcaf21'  size={20}/>
                    <AiFillStar  fill='#fcaf21' size={20}/>
                  </div>
                  <p className='text-[20px] text-[#808080]'>194 Review</p>
                  <h3 className='text-[25px] font-[600] '>₹ 18.00/ KM</h3>
                  <button className='uppercase bg-yellow px-7 py-2 my-3 font-[600] rounded-3xl'>Book now</button>
                </div>
              </article>
            </div>


            <div className="my-1 lg:px-5 xmd:px-2 md:px-3 xsm:px-3 sm:px-1 xl:px-1 2xl:px-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden shadow-lg">
                <a  >
                  <img alt="Placeholder" className="block h-auto w-full" src={image1} />
                </a>
                <div className='text-center justify-center bg-[#fff] pb-5'>
                  <p className='text-[22px] py-3'>Toyota Innova Crysta (6+1)</p>
                  <div className='flex justify-center space-x-1'>
                    <AiFillStar fill='#fcaf21'  size={20} />
                    <AiFillStar fill='#fcaf21'  size={20}/>
                    <AiFillStar fill='#fcaf21'  size={20}/>
                    <AiFillStar fill='#fcaf21'  size={20}/>
                    <AiFillStar  fill='#fcaf21' size={20}/>
                  </div>
                  <p className='text-[20px] text-[#808080]'>194 Review</p>
                  <h3 className='text-[25px] font-[600] '>₹ 18.00/ KM</h3>
                  <button className='uppercase bg-yellow px-7 py-2 my-3 font-[600] rounded-3xl'>Book now</button>
                </div>
              </article>
            </div>

          </Slider>
        </div>
      </div>
    </div>
  );
}

