import React from 'react';
import BgImage from '../../Images/Aboutus/cab_banner-aboutUs.webp';
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';

export default function ContactUs() {
    return <>
        <div class="content">
            <div class="photos">
                <div class="thumbnails">
                    <img src={BgImage} />
                    <div class="black"></div>
                    <div class="title font-mont font-[700] ">
                        <div>Contact Us</div>
                        <div className='flex space-x-3 text-[15px] font-[500]'>
                            <Link to="/"><p>Home</p></Link> <p>&gt;</p> <p>Contact Us</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center my-5'>
            <div className='lg:w-[1000px] xmd:w-[1000px] md:w-[835px] xsm:w-[660px] sm:w-[472px] xl:w-[350px] 2xl:w-[343px] bg-[#f4f4f4] p-10'>
                <h1 className='text-[30px] font-[800] font-mont text-center'>Request A Call Back</h1>
                <p className='text-[15px] text-center font-mont mt-2'>Buzzway is one of the leading online cab booking platform in Rajkot(Gujrat) which offers riders a stop solution to book cabs of their choice for their Intercity as well as Local travel needs. We target to grip technology as a platform to remove the gap between Riders and Cab Partners to book and accept their travel bookings in Rajkot (India). One can easily book the cab of their choice in just 30 seconds and that too with affordable fares.Request a call back to connect with us.</p>
            </div>
            <div className='bg-[#144298] lg:w-[1250px] xmd:w-[1000px] md:w-[920px] xsm:w-[740px] sm:w-[470px] xl:w-[350px]  xl:w-[200px]'>
                <div class="flex flex-col items-center bg-gray-200 text-gray-800">
                    <div class="lg:p-4 xmd:p-4 md:p-4 xsm:p-1 sm:p-4 w-full">
                        <div class="grid lg:grid-cols-12 xmd:grid-cols-12 md:grid-cols-12 xsm:grid-cols-12 
                        sm:grid-cols-3
                        gap-2 p-5">
                            <div class="lg:col-span-4 xmd:col-span-4 md:col-span-4 xsm:col-span-4 sm:col-span-12 xl:col-span-12 2xl:col-span-12">
                                <div class="flex flex-row bg-white shadow-sm rounded p-4">
                                    <div class="flex items-center justify-center bg-yellow flex-shrink-0 h-12 w-12  bg-blue-100 text-blue-500">
                                        <BsFillTelephoneFill size={20} fill='#616163' />
                                    </div>
                                    <div class="flex flex-col ml-4">
                                        <div class="text-[16px] text-[#fff] font-mont">Call Us</div>
                                        <div class=" text-[#fff] font-mont text-[16px]">+91-9054865866</div>
                                    </div>
                                </div>
                            </div>
                            <div class="lg:col-span-4 xmd:col-span-4 md:col-span-4 xsm:col-span-4 sm:col-span-12 xl:col-span-12 2xl:col-span-12">
                                <div class="flex flex-row bg-white shadow-sm rounded p-4">
                                    <div class="flex items-center justify-center bg-yellow flex-shrink-0 h-12 w-12  bg-blue-100 text-blue-500">
                                        <MdEmail size={25} fill='#616163' />
                                    </div>
                                    <div class="flex flex-col  ml-4">
                                        <div class="text-[16px] text-[#fff] font-mont">E-Mail Us</div>
                                        <div class=" text-[#fff] font-mont text-[16px]">booking@buzzway.in</div>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-4 xmd:col-span-4 md:col-span-4 xsm:col-span-4 sm:col-span-12 xl:col-span-12 2xl:col-span-12">
                                <div class="flex flex-row bg-white shadow-sm rounded p-4">
                                    <div class="flex items-center justify-center bg-yellow flex-shrink-0 h-12 w-12  bg-blue-100 text-blue-500">
                                        <HiLocationMarker size={25} fill='#616163' />
                                    </div>
                                    <div class="flex flex-col lg:w-[300px] xmd:w-[300px] md:w-[300px] xsm:w-[300px] sm:w-[180px] xl:w-[180px] 2xl:w-[180px]
                                    ml-4">
                                        <div class="text-[16px] text-[#fff] font-mont">Address</div>
                                        <div class=" text-[#fff] font-mont text-[16px]">Shakti Plaza, 15 A Jagnath Plot Opp. Hotel Imperial Palace Rajkot, Gujarat 360001</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#2766dd] lg:w-[1250px] xmd:w-[1000px] md:w-[920px] xsm:w-[740px] sm:w-[470px]  xl:w-[350px]  2xl:w-[315px]' >
                <div class="flex flex-col items-center bg-gray-200 text-gray-800">
                    <div class="p-4 w-full">
                        <section class="text-gray-600 body-font relative lg:px-[92px]
                        xmd:px-[92px] md:px-[92px] xsm:px-[0px] sm:px-[0px] xl:px-[0px] 2xl:px-[0px]">
                            <div class="mx-auto">
                                <div class="flex flex-col text-center w-full mb-12">
                                    <h1 class="lg:text-4xl  xmd:text-4xl  md:text-4xl xsm:text-4xl sm:text-3xl lg:text-4xl 
                                    my-3 font-mont font-[800] text-[#fff]">
                                        Send Your Query
                                    </h1>
                                </div>
                                <div class="lg:w-[70%] xmd:w-[70%] md:w-[70%] xsm:w-[70%] sm:w-[100%] xl:w-[100%] 2xl:w-[100%] mx-auto">
                                    <div class="flex flex-wrap -m-2">
                                        <div class="p-2 w-1/2">
                                            <div class="relative">
                                                <input type="text" name="name" class="w-full rounded py-5 px-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" placeholder='Your Name' />
                                            </div>
                                        </div>
                                        <div class="p-2 w-1/2">
                                            <div class="relative">
                                                <input type="tel" placeholder='Enter Contact Number' class="w-full rounded py-5 px-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" />
                                            </div>
                                        </div>
                                        <div class="p-2 w-full">
                                            <div class="relative">
                                                <input type="email" placeholder='Email Adreess' class="w-full rounded py-5 px-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] " />
                                            </div>
                                        </div>
                                        <div class="p-2 w-full">
                                            <div class="relative">
                                                <textarea name="message" placeholder='Your Message' class="w-full rounded py-5 px-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" ></textarea>
                                            </div>
                                        </div>
                                        <div class="p-2 w-full">
                                            <button class="flex mx-auto text-[] bg-yellow py-3 px-10 font-[600] text-[20px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">Send Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" 
            width="67%" height="600" frameborder="0" ></iframe>
        </div>
       
{/* <div class="container my-24 mx-auto md:px-6">
 
  <section class="mb-32">
    <div
      class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]">
    </div>
    <div class="container px-6 md:px-12">
      <div
        class="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
        <div class="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="mx-auto mb-12 text-center lg:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
            </svg>
            <h6 class="font-medium">Unites States</h6>
          </div>
          <div class="mx-auto mb-12 text-center lg:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <h6 class="font-medium">New York, 94126</h6>
          </div>
          <div class="mx-auto mb-6 text-center md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <h6 class="font-medium">+ 01 234 567 89</h6>
          </div>
          <div class="mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
            <h6 class="font-medium">Tax ID: 273 384</h6>
          </div>
        </div>
        <div class="mx-auto max-w-[700px]">
          <form>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input type="text"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput90" placeholder="Name" />
              <label
                class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                for="exampleInput90">Name
              </label>
            </div>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input type="email"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput91" placeholder="Email address" />
              <label
                class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                for="exampleInput91">Email address
              </label>
            </div>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <textarea
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
              <label for="exampleFormControlTextarea1"
                class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Message</label>
            </div>
            <div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
              <input
                class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox" value="" id="exampleCheck96" checked />
              <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck96">
                Send me a copy of this message
              </label>
            </div>
            <button type="button" data-te-ripple-init data-te-ripple-color="light"
              class="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</div> */}

    </>
}





