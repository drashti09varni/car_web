import React, { useState, useEffect } from "react";
import Logo from '../../Images/Perfect Time, Perfrct Place copy 1.png';
import { IoIosCall } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai'
import { Link, Outlet } from "react-router-dom";    
export default function Header() {
    const [openNav, setOpenNav] = useState(false);
    const [navSize, setnavSize] = useState("4rem");
    const [navColor, setnavColor] = useState("transparent");
    const [boxShadow, setBoxShadow] = useState("none");


    const listenScrollEvent = () => {
        window.scrollY > 10 ? setBoxShadow("rgba(0, 0, 0, 0.24) 0px 3px 8px") : setBoxShadow("none");
        window.scrollY > 10 ? setnavColor("#2864dc") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("4rem") : setnavSize("4rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <div>
            <div className="flex navbar fixed " style={{
                backgroundColor: navColor,
                height: navSize,
                transition: "all 1s",
                boxShadow: boxShadow
            }}>

                <div className="flex flex-row items-center justify-between ">
                    <a  className="pl-7 flex logo lg:ml-10" href="/">
                        <img  src={Logo} alt="logo" className="w-[199px] h-[30px]"  />
                        <div className="ml-5 text-[#fff] lg:invisible xmd:invisible md:visible xsm:visible sm:visible xl:invisible 2xl:invisible ">
                            <div className="flex">
                                <IoIosCall size={20} />  <p className="mt-[-5px]">+91-9054865866</p>
                            </div>

                        </div>
                    </a>

                    {/* --------- Mobile design header ---------- */}

                    <a onClick={() => setOpenNav(true)} className="sm:absolute xl:absolute  2xl:absolute sm:right-14 xl:right-14  2xl:right-14 hamburger lg:invisible">
                        <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.124103 1.33333C0.124103 0.596954 0.721057 0 1.45744 0H18.6667C19.403 0 20 0.596954 20 1.33333C20 2.06971 19.403 2.66667 18.6667 2.66667H1.45744C0.721056 2.66667 0.124103 2.06971 0.124103 1.33333ZM0 8C0 7.26362 0.596954 6.66667 1.33333 6.66667H18.6667C19.403 6.66667 20 7.26362 20 8C20 8.73638 19.403 9.33333 18.6667 9.33333H1.33333C0.596955 9.33333 0 8.73638 0 8ZM0 14.6667C0 13.9303 0.596953 13.3333 1.33333 13.3333H18.6667C19.403 13.3333 20 13.9303 20 14.6667C20 15.403 19.403 16 18.6667 16H1.33333C0.596953 16 0 15.403 0 14.6667Z" fill="#fff" /></svg>
                    </a>
                    {
                        openNav &&
                        <div className="absolute top-0 w-full h-auto bg-yellow p-5">
                            <div onClick={() => setOpenNav(false)} className="absolute right-12 top-9">
                                <AiOutlineClose size={25} />
                            </div>
                            <div className="flex flex-col  h-full  ml-auto z-50">
                                <Link to="/"> <a onClick={() => setOpenNav(false)} href="/"
                                    className=" text-xl font-semibold text-blue-800 py-2">
                                    Home
                                </a>
                                </Link>
                                <Link to="/about-us"><a onClick={() => setOpenNav(false)}
                                    className="text-xl font-semibold text-blue-800  py-2 transition-all hover:text-orange-500">
                                    about us </a>
                                </Link>

                                <Link to="/driver"><a onClick={() => setOpenNav(false)} href="#faq"
                                    className="text-xl font-semibold text-blue-800  py-2 transition-all hover:text-orange-500">
                                    driver
                                </a> </Link>
                                <Link to="/contact-us"> <a onClick={() => setOpenNav(false)} 
                                    className="text-xl font-semibold text-blue-800  py-2 transition-all hover:text-orange-500">
                                    Tour
                                </a> </Link>
                                <Link to="/contact-us"> <a onClick={() => setOpenNav(false)} 
                                    className="text-xl font-semibold text-blue-800  py-2 transition-all hover:text-orange-500">
                                    Contact us
                                </a> </Link>
                                <a className="flex text-[15px] font-semibold text-blue-800 bg-blue px-6 border-1 w-[215px] my-2
                        border-yellow text-[#fff] rounded-2xl  py-1">Call @+91-9054865866</a>
                            </div>
                        </div>
                    }

                    {/* --------- web design header ---------- */}

                    <ul className="flex uppercase justify-around mr-0 lg:visible xmd:visible md:invisible xsm:invisible sm:invisible xl:invisible 2xl:invisible right-8 absolute">
                        <Link to="/"><li className="text-[16px] font-semibold text-blue-800 transition-all">Home</li></Link>
                        <li className="text-xl mt-[-5px]">|</li>
                        <Link to="/about-us"><li href="#product" className="text-[16px]  font-semibold text-blue-800 transition-all ">about us</li> </Link>
                        <li className="text-xl mt-[-5px]">|</li>
                        <Link to="/driver"><li href="#faq" className="text-[16px]  font-semibold text-blue-800 transition-all">driver</li></Link>
                        <li className="text-xl mt-[-5px]">|</li>
                        <Link to="/tours"><li href="#faq" className="text-[16px]  font-semibold text-blue-800 transition-all">Tour</li></Link>
                        <li className="text-xl mt-[-5px]">|</li>
                        <Link to="/contact-us"><li href="#contact" className="text-[16px]  font-semibold text-blue-800 transition-all ">Contact us</li></Link>
                        <a className="flex text-[15px] font-semibold text-blue-800 bg-yellow px-6 border-1 ml-10 
                        border-yellow rounded-2xl py-1"   href = 'https://api.whatsapp.com/send?phone=917600060604&text='>Call @+91-9054865866</a>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

// AIzaSyAeTi-6NRAKnBU2TPhZnrDo5isx97Xz2x0