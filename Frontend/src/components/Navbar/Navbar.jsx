import React from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import "./navbar.css"
const Navbar = (props) => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  }, [location]);
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push("/Login")
  }
  return (
    <div><nav class="navbar navbar-expand-lg " style={{backgroundColor: "lightblue"}}>
    <div class="container-fluid">
      <Link class="navbar-brand" href="#">CloudCar</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="#">Cars</Link>
          </li>
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" href="#">Action</Link></li>
              <li><Link class="dropdown-item" href="#">Another action</Link></li>
              <li><hr class="dropdown-divider"/></li>
              <li><Link class="dropdown-item" href="#">Something else here</Link></li>
            </ul>
          </li>
          <li class="nav-item">
            <Link class="nav-link disabled">Disabled</Link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search Car" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        {!localStorage.getItem('token') ? <ul className="d-grid gap-2 d-md-flex justify-content-md-end navbar-nav  mb-2 mb-lg-0"><li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/Login" ? "active" : ""}`} aria-current="page" to="/Login">Login</Link>
              </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/Signup" ? "active" : ""}`} aria-current="page" to="/SignUp">SignUp</Link>
                </li></ul> : <button className='btn btn-dark mx-2' onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar