import React from 'react';
import { useLocation } from 'react-router-dom';
import BgImage from '../../Images/Aboutus/cab_banner-aboutUs.webp';


export default function BookingForm() {
  const location = useLocation();
  const { selectData } = location.state;
  console.log(selectData);
  return <>
    <div className="content">
      <div className="photos">
        <div className="thumbnails">
          <img src={BgImage} />
          <div className="black"></div>
          <div className="title font-mont font-[700] ">
            <div>Booking Form</div>
            <div className='flex space-x-3 text-[15px] font-[500]'>
              <p>Car Booking</p></div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row md:items-center image-left md:justify-between bg-white p-4 rounded-md shadow-md mb-4 px-40 space-x-20">
      <div class="relative mx-auto  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <a class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
          <div class="shadow p-4 rounded-lg bg-white">
            <div class="flex justify-center relative rounded-lg overflow-hidden ">
              <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                <div class="absolute inset-0 bg-black opacity-10"></div>
                <img src={`http://localhost:4200/uploads/${selectData.carImg}`} />
              </div>
            </div>

            <div class="mt-4">
              <h2 class="font-medium text-[20px] text-gray-800 text-center " >
                {selectData.car_name}
              </h2>
              <div className='px-5 py-5'>
                <div className='grid grid-cols-2 space-x-8'>
                  <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1">
                    Total KM : {selectData.totalKm}
                  </p>
                  <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1">
                    Base Fare : {selectData.baseFare}
                  </p>

                </div>
                <div className='grid grid-cols-2 space-x-8'>
                  <p class="mt-2 text-[15px] text-[#000] font-[600] line-clamp-1" >
                    Passenger: {selectData.pessenger}

                  </p>
                  <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1" >
                    Bags: {selectData.bags}

                  </p>
                </div>
                <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1">
                  State Tax: {selectData.stateTax}

                </p>
                <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1" >
                  Driver Allowance: {selectData.driverAllow}

                </p>
                <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1" >
                  Note: 100% Price Guarantee (One Way Trip)
                </p>
                <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1" >
                  Amount: {selectData.driverAllow == Number ? (Number(selectData.baseFare) + Number(selectData.tollTax) + Number(selectData.driverAllow))
                    : (Number(selectData.baseFare) + Number(selectData.tollTax))}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Text with Left Image</h2>
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
          Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
          sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
          a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
          molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
          Duis semper. Duis arcu, massa scelerisque ac, cursus et, sollicitudin a,
          orci.
        </p>
        <footer className="text-gray-600">(A dummy text)</footer>
      </div>
    </div>





  </>

}
