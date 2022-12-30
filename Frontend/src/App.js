import Home from "./components/Home/Home"
import React ,{useState} from 'react'
import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login"
import Signup from "./components/SignUp/Signup"
import Contact from "./components/contact/Contact"
import axios from "axios";
// import CarDetails from "./components/CarDetails/Cardetails"
import Car from "./components/Car/Car"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Cardetails from "./components/CarDetails/Cardetails"
import { useEffect } from "react"
function App() {
  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `http://localhost:3006/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
      console.log(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

  const [alert, setAlert] = useState(null)
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  return (
    <>
    <Router>
  <Navbar/>
      <Switch>
      <Route exact path='/Signup' >< Signup showAlert={showAlert}/></Route>
      <Route exact path='/CarDetails' ><Cardetails/></Route>
      <Route exact path='/Login' >< Login showAlert={showAlert} /></Route>
      <Route exact path='/Car' >< Login showAlert={showAlert} /></Route>
      <Route exact path='/Contact' ><Contact/></Route>
      <Route exact path='/' ><Home/></Route>
      </Switch>
    </Router>

    </>
  );
}

export default App;
