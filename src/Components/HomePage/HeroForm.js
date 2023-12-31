import React, { useState, useEffect } from 'react';
import GPlace from './GPlace';




// API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyD4KIhIGbj_4Oxg-aTiM6JfCn6UwbYGgPQ';

// load google map script
const loadGoogleMapScript = callback => {
  if (
    typeof window.google === 'object' &&
    typeof window.google.maps === 'object'
  ) {
    callback();
  } else {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', callback);
  }
};

const HeroForm = () => {
  const [loadMap, setLoadMap] = useState(false);
  const [basicDate, setBasicDate] = useState(new Date());
  
  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true);
    });
  }, []);

  return (
    <div className="App">
  
     
      {!loadMap ? <div>Loading...</div> : <GPlace  />}
      <br />
      <br />
    </div>
  );
};

export default HeroForm;
