import React, {  useRef } from 'react';
import OneWay from './GPlace/OneWay';
import { HiLocationMarker } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';
import { BiSolidTimeFive } from 'react-icons/bi';
import RoundTrip from './GPlace/RoundTrip';


const GPlace = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const [subOpenTab, setSubOpenTab] = React.useState(1);
    const [secOpenTab, setSecOpenTab] = React.useState(1);
    
    const placeInputRef3 = useRef(null);
    const placeInputRef4 = useRef(null);
    const placeInputRef5 = useRef(null);

    return (
        <>
             <div className="flex justify-center items-center ">
                <div className="w-full">
                    <div className="relative flex flex-col break-words  lg:w-[1100px]
                     xmd:w-[900px] md:w-[850px]  xsm:w-[650px] sm:w-[454px] xl:w-[316px] 2xl:w-[350px]  mb-6 mx-auto mt-[-7px] 
                     lg:rounded-none xmd:rounded-none md:rounded-none xsm:rounded-none sm:rounded-2xl">
                                                
                        {/* header 2 local and outstation */}
                        
                        <ul className="flex list-none pt-3 pb-4 flex-row lg:mb-0 xmd:mb-0 md:mb-0 xsm:mb-0  sm:mb-4 " role="tablist">
                            <li className=" text-center ">


                                <a className={"text-[16px] font-[500] uppercase lg:px-14 lg:py-3 xmd:px-14 xmd:py-3 md:px-14 md:py-3 xsm:px-14 xsm:py-3 sm:px-14 sm:py-3 xl:px-10 xl:py-3 2xl:px-10 2xl:py-3 lg:border-l lg:border-t lg:border-b xmd:border-l xmd:border-t xmd:border-b md:border-l md:border-t md:border-b  xsm:border-l xsm:border-t xsm:border-b " +
                                    (openTab === 1
                                        ? "text-white lg:bg-yellow xmd:bg-yellow md:bg-yellow xsm:bg-yellow  sm:border-b-4 sm:border-yellow xl:border-b-4 xl:border-yellow 2xl:border-b-4 2xl:border-yellow"
                                        : "text-white -600 ")}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }} data-toggle="tab" href="#link1" role="tablist" >
                                    Outstation
                                </a>
                            </li>
                            <li className=" text-center">
                                <a className={
                                    "text-[16px] font-[500]  uppercase px-14 py-3 lg:border-l lg:border-r lg:border-t lg:border-b xmd:border-l xmd:border-r  xmd:border-t xmd:border-b md:border-r  md:border-l md:border-t md:border-b xsm:border-r  xsm:border-l xsm:border-t xsm:border-b   ml-[-36px] " +
                                    (openTab === 2
                                        ? "text-white lg:bg-yellow xmd:bg-yellow md:bg-yellow xsm:bg-yellow sm:border-b-4 sm:border-yellow xl:border-b-4 xl:border-yellow 2xl:border-b-4 2xl:border-yellow"
                                        : "text-white -600 ")}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }} data-toggle="tab" href="#link2" role="tablist" >
                                    Local
                                </a>
                            </li>
                        </ul>


                        {/* 3 way code oneway, round trip, multicity */}

                        <div className="px-4 py-5 flex-auto lg:bg-[#144298] xmd:bg-[#144298]  md:bg-[#144298]  xsm:bg-[#144298] sm:bg-[#fff] xl:bg-[#fff] 2xl:bg-[#fff] ">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    
                                    <ul
                                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row justify-center mb-4 lg:w-[1000px] xmd:w-[800px] md:w-[800px] xsm:w-[600px] sm:w-[410px] xl:w-[290px] 2xl:w-[290px]"
                                        role="tablist"
                                    >
                                        <li className="text-center">
                                            <a className={"text-[16px] font-[600] lg:px-14 lg:py-2.5 xmd:px-14 xmd:py-2.5 md:px-14 md:py-2.5  xsm:px-14 xsm:py-2.5  sm:px-6 sm:py-2.5  xl:px-1 xl:py-2.5  2xl:px-1 2xl:py-2.5  border rounded-lg border-[#e0e1e4]  " +
                                                (subOpenTab === 1 ? "text-blue bg-yellow" : "text-blue  bg-[#fff]")
                                            }
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setSubOpenTab(1);
                                                }} data-toggle="tab" href="#link1" role="tablist" >
                                                One Way
                                            </a>
                                        </li>
                                        <li className="text-center">
                                            <a className={"text-[16px] font-[600] lg:px-14 lg:py-2.5 xmd:px-14 xmd:py-2.5 md:px-14 md:py-2.5  xsm:px-14 xsm:py-2.5  sm:px-6 sm:py-2.5  xl:px-1 xl:py-2.5  2xl:px-1 2xl:py-2.5  ml-[-28px] border rounded-lg border-[#e0e1e4] " +
                                                (subOpenTab === 2 ? "text-blue bg-yellow" : "text-blue   bg-[#fff] ")
                                            }
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setSubOpenTab(2);
                                                }} data-toggle="tab" href="#link2" role="tablist" >
                                                Round Trip
                                            </a>
                                        </li>
                                        <li className="text-center">
                                            <a className={"text-[16px] font-[600] lg:px-14 lg:py-2.5 xmd:px-14 xmd:py-2.5 md:px-14 md:py-2.5  xsm:px-14 xsm:py-2.5  sm:px-6 sm:py-2.5  xl:px-1 xl:py-2.5  2xl:px-1 2xl:py-2.5  ml-[-28px] border rounded-lg border-[#e0e1e4] " +
                                                (subOpenTab === 3 ? "text-blue bg-yellow" : "text-blue   bg-[#fff] ")
                                            }
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setSubOpenTab(3);
                                                }} data-toggle="tab" href="#link2" role="tablist" >
                                                Multi city
                                            </a>
                                        </li>
                                    </ul>

                            {/* --------oneway--------- */}

                                    <div className={subOpenTab === 1 ? "block" : "hidden"} >
                                       <OneWay />
                                    </div>

                            {/* --------Round trip--------- */}

                                    <div className={subOpenTab === 2 ? "block" : "hidden"} >
                                        <RoundTrip/>
                                    </div>



                            {/* --------multi city--------- */}
                            <div className={subOpenTab === 3 ? "block" : "hidden"} >
                                        <div >
                                            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">

                                                <div className="col-span-1 relative">
                                                    <span className="material-icons absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                                                        <HiLocationMarker fill='#1254d0' size={20} />
                                                    </span>

                                                    <input
                                                        type="text"
                                                        name="input1"
                                                        className="pl-8 pr-2 py-6 border-0 rounded-lg w-full
                                                        lg:border-0 xmd:border-0 md:border-0 xsm:border-0 sm:border xl:border 2xl:border border-[#dadada]"
                                                        placeholder="From City" ref={placeInputRef3}
                                                    />
                                                    
                                                </div>



                                                <div className="col-span-1 relative">
                                                    <span className="material-icons absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                                                        <HiLocationMarker fill='#1254d0' size={20} /></span>
                                                    <input
                                                        type="text"
                                                        name="input2"
                                                        className="pl-8 pr-2 py-6 border-0  rounded-lg w-full
                                                        lg:border-0 xmd:border-0 md:border-0 xsm:border-0 sm:border xl:border 2xl:border border-[#dadada]"
                                                        placeholder="To City" ref={placeInputRef4}
                                                    />
                                                </div>

                                                <div className="col-span-1 relative">
                                                    <span className="material-icons absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                                                        <MdDateRange fill='#1254d0' size={20} /></span>
                                                    <input
                                                        type="text"
                                                        name="input3"
                                                        className="pl-8 pr-2 py-6 border-0  rounded-lg w-full
                                                        lg:border-0 xmd:border-0 md:border-0 xsm:border-0 sm:border xl:border 2xl:border border-[#dadada]"
                                                        placeholder="Choose Date"
                                                    />
                                                </div>


                                                <div className="col-span-1 relative">
                                                    <span className="material-icons absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                                                        <BiSolidTimeFive fill='#1254d0' size={20} /></span>
                                                    <input
                                                        type="text"
                                                        name="input4"
                                                        className="pl-8 pr-2 py-6 border-0 rounded-lg w-full
                                                        lg:border-0 xmd:border-0 md:border-0 xsm:border-0 sm:border xl:border 2xl:border border-[#dadada]"
                                                        placeholder="Choose Time"
                                                    />
                                                </div>
                                                <div className="col-span-1 relative">
                                                    <span className="material-icons absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                                                        <HiLocationMarker fill='#1254d0' size={20} />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        name="input1"
                                                        className="pl-8 pr-2 py-6 border-0 rounded-lg w-full
                                                        lg:border-0 xmd:border-0 md:border-0 xsm:border-0 sm:border xl:border 2xl:border border-[#dadada]"
                                                        placeholder="From City" ref={placeInputRef5}
                                                    />
                                                </div>

                                            </div>

                                            <div className="flow-root ">
                                                <p className="float-right border-0 text-[#1254d0] bg-yellow px-8 py-2 text-[18px] font-mont  my-3 rounded-3xl font-[700] ">
                                                    Search Cab
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <ul
                                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row justify-center mb-4 lg:w-[1000px] xmd:w-[800px] md:w-[800px] xsm:w-[600px] sm:w-[410px] xl:w-[318px] 2xl:w-[290px]"
                                        role="tablist"
                                    >
                                        <li className="text-center">
                                            <a
                                                className={
                                                    "text-[16px] font-[500] lg:px-14 lg:py-2.5 xmd:px-14 xmd:py-2.5 md:px-14 md:py-2.5  xsm:px-14 xsm:py-2.5  sm:px-6 sm:py-2.5  xl:px-3 xl:py-2.5  2xl:px-1 2xl:py-2.5 border rounded-lg border-[#e0e1e4]  " +
                                                    (secOpenTab === 1 ? "text-blue bg-yellow" : "text-blue   bg-[#fff]")
                                                }
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setSecOpenTab(1);
                                                }}
                                                data-toggle="tab"
                                                href="#link1"
                                                role="tablist"
                                            >
                                                Hourly Basis
                                            </a>
                                        </li>
                                        <li className="text-center">
                                            <a
                                                className={
                                                    "text-[16px] font-[500] lg:px-14 lg:py-2.5 xmd:px-14 xmd:py-2.5 md:px-14 md:py-2.5  xsm:px-14 xsm:py-2.5  sm:px-6 sm:py-2.5  xl:px-3 xl:py-2.5  2xl:px-2 2xl:py-2.5  ml-[-28px] border rounded-lg border-[#e0e1e4]  " +
                                                    (secOpenTab === 2 ? "text-blue bg-yellow" : "text-blue   bg-[#fff] ")
                                                }
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setSecOpenTab(2);
                                                }}
                                                data-toggle="tab"
                                                href="#link2"
                                                role="tablist"
                                            >
                                                Airport Transfer
                                            </a>
                                        </li>

                                    </ul>


                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div></div>







        </>
    );
};

export default GPlace;

