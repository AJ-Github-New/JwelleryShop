import React,{useEffect} from "react";
import {Link} from 'react-router-dom';
import Rating from "./Rating";
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listearrings } from "./actions/earringActions";

  
function Earring() {
  const dispatch = useDispatch();
  const earringList = useSelector((state) => state.earringList);
  const { loading, error, earrings } = earringList;

  useEffect(() => {
    dispatch(listearrings());
  }, [dispatch]);
  return (
    <div>
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (

          <div className="display">
{earrings.map((earring) => (
              

<div key={earring._id} className="card" style={{width: "18rem"}}>
<Link to={`/earring/${earring._id}`}>
  <img style={{height:"250px"}}  src={earring.image}
                    alt={earring.name} className="card-img-top img_change" />
  </Link>
  <div className="card-body" style={{backgroundColor:"#f5ebf4"}}>
  <Link to={`/earring/${earring._id}`} style={{textDecoration:"none",color:"#cf53b2"}}><h5 className="card-title">{earring.name} </h5></Link>
    <p className="card-text price" style={{color:"#539dcf"}}><span style={{color:"black"}}>Rs.</span>{earring.price}</p>
    <p className="card-text rating"><Rating rating={earring.rating}
                 numReviews={earring.numReviews}/></p>

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
export default Earring;


