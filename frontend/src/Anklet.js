import React from "react";
import {Link} from 'react-router-dom';
import data from "./data";
import Rating from "./Rating";

function Anklet() {
  return (
          <div className="display">
{data.anklets.map((anklet) => (
              

<div key={anklet._id} className="card" style={{width: "18rem"}}>
<Link to={`/anklet/${anklet._id}`}>
  <img style={{height:"250px"}}  src={anklet.image}
                    alt={anklet.name} className="card-img-top img_change" />
  </Link>
  <div className="card-body" style={{backgroundColor:"#f5ebf4"}}>
  <Link to={`/anklet/${anklet._id}`} style={{textDecoration:"none",color:"#cf53b2"}}><h5 className="card-title">{anklet.name} </h5></Link>
    <p className="card-text price" style={{color:"#539dcf"}}><span style={{color:"black"}}>Rs.</span>{anklet.price}</p>
    <p className="card-text rating"><Rating rating={anklet.rating}
                 numReviews={anklet.numReviews}/></p>

    {/*<Link to="/" className="btn btn-primary">Add to cart</Link>
  */}
  </div>

</div>
))}


 </div> 
  )
}
export default Anklet;