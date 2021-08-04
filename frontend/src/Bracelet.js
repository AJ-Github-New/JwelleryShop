import React,{useEffect} from "react";
import {Link} from 'react-router-dom';
import Rating from "./Rating";

import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listbracelets } from "./actions/braceletActions";

  
function Bracelet() {
  const dispatch = useDispatch();
  const braceletList = useSelector((state) => state.braceletList);
  const { loading, error, bracelets } = braceletList;

  useEffect(() => {
    dispatch(listbracelets());
  }, [dispatch]);

  return (
    <div>
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
          <div className="display">
{bracelets.map((bracelet) => (
              

<div key={bracelet._id} className="card" style={{width: "18rem"}}>
<Link to={`/bracelet/${bracelet._id}`}>
  <img style={{height:"250px"}}  src={bracelet.image}
                    alt={bracelet.name} className="card-img-top img_change" />
  </Link>
  <div className="card-body" style={{backgroundColor:"#f5ebf4"}}>
  <Link to={`/bracelet/${bracelet._id}`} style={{textDecoration:"none",color:"#cf53b2"}}><h5 className="card-title">{bracelet.name} </h5></Link>
    <p className="card-text price" style={{color:"#539dcf"}}><span style={{color:"black"}}>Rs.</span>{bracelet.price}</p>
    <p className="card-text rating"><Rating rating={bracelet.rating}
                 numReviews={bracelet.numReviews}/></p>

    {/*<Link to="/" className="btn btn-primary">Add to cart</Link>
  */}
  </div>

</div>
))}


 </div> 
    )}
        </div>

 
  )
}
export default Bracelet;