
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiSolidQuoteLeft } from 'react-icons/bi';

export default function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'theClass',
    arrows: false,
  };

  return (
    <div>
      <center className='text-[30px] font-mont font-[700]'>Why People Love </center>
      <div id="slider-container" className="max-w-2xl mx-auto mt-12 mb-20 ">
        <Slider {...settings}>

          <article className="p-2 gap-10   ">
            <div className='p-5  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-[185px]'>
              <BiSolidQuoteLeft size={25} fill='#fcaf21' />
              <p className="text-gray-800">
                Your cab services offer the most affordable rates. The trips are value for money, so I'm really happy about it.
              </p>
              <span className="text-lg text-gray-700 font-semibold">Abhishek, Vadodara</span>
            </div>
          </article>

          <article className="p-2 gap-10  ">
            <div className='p-5  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  h-[185px]'>
              <BiSolidQuoteLeft size={25} fill='#fcaf21' />
              <p className="text-gray-800">
                Buzzway has been the most reliable cab services I've opted for so far. Kudos to the team for providing safe taxi services in today's given conditions.
              </p>
              <span className="text-lg text-gray-700 font-semibold">Vinay Shukla, Morbi</span>
            </div>
          </article>

          <article className="p-2 gap-10  ">
            <div className='p-5  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  h-[185px]'>
              <BiSolidQuoteLeft size={25} fill='#fcaf21' />
              <p className="text-gray-800">
              Your cab services offer the most affordable rates. The trips are value for money, so I'm really happy about it.
               
              </p>
              <span className="text-lg text-gray-700 font-semibold">Vinay Shukla, Morbi</span>
            </div>
          </article>

          <article className="p-2 gap-10  ">
            <div className='p-5  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-[185px]'>
              <BiSolidQuoteLeft size={25} fill='#fcaf21' />
              <p className="text-gray-800">
              Buzzway has been the most reliable cab services I've opted for so far. Kudos to the team for providing safe taxi services in today's given conditions.
                
              </p>
              <span className="text-lg text-gray-700 font-semibold">Vinay Shukla, Morbi</span>
            </div>
          </article>

        </Slider>
      </div>
    </div>
  );
}


