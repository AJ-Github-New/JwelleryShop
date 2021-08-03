import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import Rating from "./Rating";
import axios from 'axios';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

function Earring() {
  const [earrings, setearrings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fecthData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/earrings');
        setLoading(false);
        setearrings(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fecthData();
  }, []);
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


