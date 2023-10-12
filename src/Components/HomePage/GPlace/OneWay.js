import React, { useEffect, useRef, useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimePicker } from 'antd';
import { FaClock } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";




export default function OneWay() {
    const navigate = useNavigate();
    const [place1, setPlace1] = useState();
    const [place2, setPlace2] = useState();

    const placeInputRef1 = useRef(null);
    const placeInputRef2 = useRef(null);
    const [lat1, setLat1] = useState();
    const [lng1, setLng1] = useState();
    const [lat2, setLat2] = useState();
    const [lng2, setLng2] = useState();
    const [distance, setDistance] = useState(null);
    const [tripData, setTripData] = useState([]);


    const [selectedTime, setSelectedTime] = useState();
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

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

        new window.google.maps.event.addListener(
            autocomplete1,
            autocomplete2,
            'place_changed',
        );
    };


    useEffect(() => {
        setLat1(place1?.lat);
        setLng1(place1?.lng);
        setLat2(place2?.lat);
        setLng2(place2?.lng);

    }, [place1][place2]);


    const calculateDistance = () => {
        const radians = (degrees) => {
            return degrees * (Math.PI / 180);
        };

        const haversine = (lat1, lng1, lat2, lng2) => {
            const earthRadius = 6371; // Earth's radius in kilometers

            const dLat = radians(lat2 - lat1);
            const dLon = radians(lng2 - lng1);

            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = earthRadius * c;

            return distance;
        };



        if (lat1 && lng1 && lat2 && lng2) {
            // Calculate distance
            const calculatedDistance = haversine(parseFloat(lat1), parseFloat(lng1), parseFloat(lat2), parseFloat(lng2)).toFixed(2);
            const averageSpeed = 60; // 60 km/h, adjust this as needed

            const travelTimeHours = calculateTime(calculatedDistance, averageSpeed);
            console.log(travelTimeHours.toFixed(2))
            const day = selectedDate?.getDate();
            const month = selectedDate?.getMonth() + 1; // Adding 1 to month because it's zero-based.
            const year = selectedDate?.getFullYear() % 100;
            const paddedDay = day < 10 ? `0${day}` : day;
            const paddedMonth = month < 10 ? `0${month}` : month;
            const paddedYear = year < 10 ? `0${year}` : year;
            const Date = `${paddedDay}/${paddedMonth}/${paddedYear}`;

            const hours = selectedTime?.$d?.getHours();
            const minutes = selectedTime?.$d?.getMinutes();
            const seconds = selectedTime?.$d?.getSeconds();

            // Determine AM or PM
            const amOrPm = hours >= 12 ? 'PM' : 'AM';

            // Ensure that the hours, minutes, and seconds have two digits
            const formattedHours = String(hours % 12 || 12).padStart(2, '0'); // Convert 0 to 12 for 12-hour format
            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(seconds).padStart(2, '0');

            // Create the hh:mm:ss AM/PM string
            const Time = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amOrPm}`;

            // Create an object with all three values and push it to the results array
            console.log(distance);
            console.log(Date);
            console.log(Time);

            const tripInfo = {
                distance: calculatedDistance,
                formattedDate: Date,
                formattedTime: Time,
            };
            setTripData([...tripData, tripInfo]);


            navigate('/car-list/one-way', {
                state: {
                    distance: calculatedDistance,
                    formattedDate: Date,
                    formattedTime: Time,
                    travelTime: travelTimeHours.toFixed(2),
                    address_first: place1,
                    address_sec: place2
                },
            });

        }
    }

    const calculateTime = (distance, speed) => {
        // Calculate time in hours
        const timeHours = distance / speed;
        return timeHours;
    };

    return <>
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
                        selected={selectedDate}
                        onChange={handleDateChange}
                        placeholderText='Select a date'
                        className="pl-8 z-0 pr-2 py-6 border-0 rounded-lg w-[100%] lg:border-0 xmd:border-0 md:border-0 xsm:border-0 sm:border xl:border 2xl:border border-[#dadada]"
                    />

                    {/* {selectedDate && (
                                                            <p>Selected Date: {selectedDate.toDateString()}</p>
                                                    )} */}

                </div>


                <div className="relative">
                    <FaClock className="absolute left-2 top-1/2 " />
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
                                                font-[700] " onClick={() => { calculateDistance() }} >
                    Search Cab
                </button>


            </div>
        </div>
    </>
}
