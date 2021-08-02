import React from "react";
import {Link} from 'react-router-dom';
import data from "./data";

function Earring() {
  return (
          <div className="display">
{data.earrings.map((earring) => (
              

<div key={earring._id} className="card" style={{width: "18rem"}}>
<Link to={`/earring/${earring._id}`}>
  <img style={{height:"250px"}}  src={earring.image}
                    alt={earring.name} className="card-img-top img_change" />
  </Link>
  <div className="card-body" style={{backgroundColor:"#f5ebf4"}}>
  <Link to={`/earring/${earring._id}`}><h5 className="card-title">{earring.name} </h5></Link>
    <p className="card-text price">Rs.{earring.price}</p>
    <p className="card-text rating"><span> <i class="fa fa-star"></i> </span>
                          <span> <i class="fa fa-star"></i> </span>
                          <span> <i class="fa fa-star"></i> </span>
                          <span> <i class="fa fa-star"></i> </span>
                          <span> <i class="fa fa-star"></i> </span></p>

    <Link to="/" className="btn btn-primary">Add to cart</Link>
  </div>

</div>
))}





 


 </div> 
  )
}
export default Earring;