import { useLocation } from 'react-router-dom';

const  CarList= () => {
  const location = useLocation();
  const { distance, formattedDate, formattedTime } = location.state;
  console.log(distance);
  console.log(formattedDate);

  console.log(formattedTime);


  // Now you can access the passed props here and use them in your component

  return <><h1>sdada</h1></>
};

export default CarList;