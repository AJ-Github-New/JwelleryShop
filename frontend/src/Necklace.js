import React from "react";
import {Link} from 'react-router-dom';
import data from "./data";
import Rating from "./Rating";

function Necklace() {
  return (
          <div className="display">
{data.necklaces.map((necklace) => (
              

<div key={necklace._id} className="card" style={{width: "18rem"}}>
<Link to={`/necklace/${necklace._id}`}>
  <img style={{height:"250px"}}  src={necklace.image}
                    alt={necklace.name} className="card-img-top img_change" />
  </Link>
  <div className="card-body" style={{backgroundColor:"#f5ebf4"}}>
  <Link to={`/necklace/${necklace._id}`} style={{textDecoration:"none",color:"#cf53b2"}}><h5 className="card-title">{necklace.name} </h5></Link>
    <p className="card-text price" style={{color:"#539dcf"}}><span style={{color:"black"}}>Rs.</span>{necklace.price}</p>
    <p className="card-text rating"><Rating rating={necklace.rating}
                 numReviews={necklace.numReviews}/></p>

    {/*<Link to="/" className="btn btn-primary">Add to cart</Link>
  */}
  </div>

</div>
))}


 </div> 
  )
}
export default Necklace;