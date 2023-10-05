import React, { useEffect, useRef, useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';
import { BiSolidTimeFive } from 'react-icons/bi';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimePicker } from 'antd';

const GPlace = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const [subOpenTab, setSubOpenTab] = React.useState(1);
    const [secOpenTab, setSecOpenTab] = React.useState(1);
    const [basicDate, setBasicDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);

    const [lat1, setLat1] = useState('');
    const [lon1, setLon1] = useState('');
    const [lat2, setLat2] = useState('');
    const [lon2, setLon2] = useState('');
    const [distance, setDistance] = useState(null);

    const [place1, setPlace1] = useState(null);
    const [place2, setPlace2] = useState(null);

    console.log(place1)
    console.log(place2)



    const calculateDistance = () => {
        const radians = (degrees) => {
            return degrees * (Math.PI / 180);
        };

        const haversine = (lat1, lon1, lat2, lon2) => {
            const earthRadius = 6371; // Earth's radius in kilometers

            const dLat = radians(lat2 - lat1);
            const dLon = radians(lon2 - lon1);

            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = earthRadius * c;

            return distance;
        };

        if (lat1 && lon1 && lat2 && lon2) {
            const result = haversine(parseFloat(lat1), parseFloat(lon1), parseFloat(lat2), parseFloat(lon2));
            setDistance(result.toFixed(2));
        } else {
            setDistance(null);
        }
    };


    const placeInputRef1 = useRef(null);
    const placeInputRef2 = useRef(null);
    const placeInputRef3 = useRef(null);
    const placeInputRef4 = useRef(null);
    const placeInputRef5 = useRef(null);

    const handleTimeChange = (time) => {
        setSelectedTime(time);
    };

    useEffect(() => {
        initPlaceAPI();

    }, []);





    const initPlaceAPI = () => {
        let autocomplete1 = new window.google.maps.places.Autocomplete(
            placeInputRef1.current,
        );
        new window.google.maps.event.addListener(
            autocomplete1,
            'place_changed',
            function () {
                let place = autocomplete1.getPlace();
                setPlace1({
                    address: place.formatted_address,
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                });
            }
        );

        let autocomplete2 = new window.google.maps.places.Autocomplete(
            placeInputRef2.current,
        );
        new window.google.maps.event.addListener(
            autocomplete2,
            'place_changed',
            function () {
                let placee = autocomplete2.getPlace();
                setPlace2({
                    address: placee.formatted_address,
                    lat: placee.geometry.location.lat(),
                    lng: placee.geometry.location.lng()
                });
            }
        );
        let autocomplete3 = new window.google.maps.places.Autocomplete(
            placeInputRef3.current,

        );
        let autocomplete4 = new window.google.maps.places.Autocomplete(
            placeInputRef4.current,

        );
        let autocomplete5 = new window.google.maps.places.Autocomplete(
            placeInputRef5.current,

        );

        new window.google.maps.event.addListener(
            autocomplete1,
            autocomplete2,
            autocomplete3,
            autocomplete4,
            autocomplete5,

            'place_changed',
        );
    };

    return (
        <>
            {/* <div>
      <h1>Distance Calculator</h1>
      <div>
        <label>Latitude 1:</label>
        <input type="number" value={lat1} onChange={(e) => setLat1(e.target.value)} />
      </div>
      <div>
        <label>Longitude 1:</label>
        <input type="number" value={lon1} onChange={(e) => setLon1(e.target.value)} />
      </div>
      <div>
        <label>Latitude 2:</label>
        <input type="number" value={lat2} onChange={(e) => setLat2(e.target.value)} />
      </div>
      <div>
        <label>Longitude 2:</label>
        <input type="number" value={lon2} onChange={(e) => setLon2(e.target.value)} />
      </div>
      <button onClick={calculateDistance}>Calculate Distance</button>
      {distance !== null && <p>The distance is {distance} kilometers.</p>}
    </div> */}
            <div className="flex justify-center items-center ">
                <div className="w-full">
                    <ul className="flex list-none flex-wrap pt-3 pb-4 flex-row lg:mb-0 xmd:mb-0 md:mb-0 xsm:mb-0  sm:mb-4 ml-[-15px]" role="tablist">
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
                    <div className="relative flex flex-col break-words lg:bg-blue xmd:bg-blue  md:bg-blue  xsm:bg-blue sm:bg-[#fff]  lg:w-[1100px]
                     xmd:w-[900px] md:w-[850px]  xsm:w-[650px] sm:w-[454px] xl:w-[316px] 2xl:w-[350px]  mb-6 mx-auto mt-[-7px] 
                     lg:rounded-none xmd:rounded-none md:rounded-none xsm:rounded-none sm:rounded-2xl">
                        <div className="px-4 py-5 flex-auto">
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

                                    <div className={subOpenTab === 1 ? "block" : "hidden"} >
                                        <div >
                                            <div className="grid lg:grid-cols-4 xmd:grid-cols-4 md:grid-cols-4 xsm:grid-cols-4 gap-3">

                                                <div className="col-span-1 relative">
                                                    <span className="material-icons absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                                                        <HiLocationMarker fill='#1254d0' size={20} />
                                                    </span>

                                                    <input
                                                        type="text"
                                                        name="input1"
                                                        className="pl-8 pr-2 py-6  rounded-lg w-full placehoder:font-bold
                                                        lg:border-0 xmd:border-0 md:border-0 xsm:border-0 sm:border xl:border 2xl:border border-[#dadada]"
                                                        placeholder="From City" ref={placeInputRef1}  
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
                                                        placeholder="To City" ref={placeInputRef2}
                                                    />
                                                </div>



                                                <div className="col-span-1 relative">
                                                    <span className="material-icons absolute z-96 left-0 top-3 flex items-center pl-2 text-[#000]">
                                                        <MdDateRange fill='#1254d0' size={20} /></span>
                                                    <DatePicker
                                                        onChange={(date) => setBasicDate(date)}
                                                        placeholderText='Choose Date' className="pl-8 z-0 pr-2 py-6 border-0  rounded-lg w-[115%]
                                                            lg:border-0 xmd:border-0 md:border-0 xsm:border-0 sm:border xl:border 2xl:border border-[#dadada]"

                                                    />
                                                </div>



                                                <div className="col-span-1 relative">
                                                    <span className="material-icons absolute inset-y-0 left-0 flex items-center pl-2 text-[#000]">
                                                        <BiSolidTimeFive fill='#1254d0' size={20} /></span>
                                                    {/* <input
                                                        type="time"
                                                        name="input4"
                                                        className="pl-8 pr-2 py-6 border-0 rounded-lg w-full
                                                        lg:border-0 xmd:border-0 md:border-0 xsm:border-0 sm:border xl:border 2xl:border border-[#dadada]"
                                                        placeholder="Choose Time"
                                                    /> */}
                                                    <TimePicker
                                                        format="h:mm a"
                                                        showNow={false}
                                                        use12Hours
                                                        value={selectedTime}
                                                        onChange={handleTimeChange}
                                                        showSecond={false}
                                                        hideDisabledOptions
                                                        minuteStep={5}
                                                        className="pl-8 pr-2 py-3 border-0  rounded-lg w-full
                                                        lg:border-0 xmd:border-0 md:border-0 xsm:border-0 sm:border xl:border 2xl:border border-[#dadada]"
                                                    />
                                                </div>
                                                

                                            </div>

                                            <div className="flow-root ">
                                                <button className="float-right border-0 text-[#1254d0] bg-yellow px-8 py-2 text-[18px] font-mont  my-3 rounded-3xl 
                                                font-[700] " onClick={calculateDistance}>
                                                    Search Cab
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={subOpenTab === 2 ? "block" : "hidden"} >
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

                                    <div className={subOpenTab === 3 ? "block" : "hidden"} >
                                        <h1>3</h1>
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
                                    <div className={secOpenTab === 1 ? "block" : "hidden"} >
                                        <div >
                                            <div className="grid grid-cols-1 md:grid-cols-4 xsm:grid-cols-4 gap-3">

                                                <div className="col-span-1 relative">
                                                    <span className="material-icons absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                                                        <HiLocationMarker fill='#1254d0' size={20} />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        name="input1"
                                                        className="pl-8 pr-2 py-6 border-0 rounded-lg w-full
                                                        lg:border-0 xmd:border-0 md:border-0 xsm:border-0 sm:border xl:border 2xl:border border-[#dadada]"
                                                        placeholder="Pick Up City"
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
                                                        placeholder="Select Hours/Kms"
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


                                            </div>

                                            <div className="flow-root ">
                                                <p className="float-right border-0 text-[#1254d0] bg-yellow px-8 py-2 text-[18px] font-mont  my-3 rounded-3xl font-[700] ">
                                                    Search Cab
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={secOpenTab === 2 ? "block" : "hidden"} >
                                        <div >
                                            <div className="grid grid-cols-1 md:grid-cols-4 xsm:grid-cols-4 gap-3">

                                                <div className="col-span-1 relative">
                                                    <span className="material-icons absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                                                        <HiLocationMarker fill='#1254d0' size={20} />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        name="input1"
                                                        className="pl-8 pr-2 py-6 border-0 rounded-lg w-full
                                                        lg:border-0 xmd:border-0 md:border-0 xsm:border-0 sm:border xl:border 2xl:border border-[#dadada]"
                                                        placeholder="Pickup City"
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
                                                        placeholder="Select Airport"
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
                                            </div>

                                            <div className="flow-root ">
                                                <p className="float-right border-0 text-[#1254d0] bg-yellow px-8 text-[18px] my-3 font-mont rounded-3xl font-[700] ">
                                                    Search Cab
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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

