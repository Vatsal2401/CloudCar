import React from 'react'
import Car from "../Car/Car";
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
const Trendingcars = () => {
  return (
<div className='my-3'><h3 className='d-flex justify-content-center'>Trending Cars</h3>
    <div className="row my-3">
    <div className="col-md-4"><Car Name="BMW"  img={img1}/></div>
       <div className="col-md-4"><Car Name="Ferrari" img={img2}/></div>
       <div className="col-md-4"><Car Name="Audi" img={img3}/></div>
     </div></div>
  )
}

export default Trendingcars