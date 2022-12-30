
import CarContext from "./carContext";
import { useEffect, useState } from "react";
import axios from 'axios';
const CarState = (props) => {
  const host = "http://localhost:3006"
  const carsIntial = []
  const [cars, setcars] = useState(carsIntial);
  const [user, setuser] = useState([])

 
  //get all cars
  const getcars = async () => {
    //TODO API
    const response = await fetch(`${host}/api/cars/fetchallcars`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        // 'authtoken': localStorage.getItem('token')
      }
    });
    const json = await response.json()
    console.log(json)
    setcars(json)
  }
  //get user detail
  const getuser = async () => {
    //TODO API
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    console.log(json);
setuser(json);
  }
 


      
  return (<CarContext.Provider value={{getuser,user, cars,getcars}}>
    {props.children}
  </CarContext.Provider>)


}


export default CarState