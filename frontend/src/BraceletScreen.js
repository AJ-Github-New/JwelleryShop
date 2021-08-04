import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsBracelet } from './actions/braceletActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import Rating from './Rating';
import { ArrowLeft } from 'react-bootstrap-icons';


export default function BraceletScreen(props) {
  const dispatch = useDispatch();
  const braceletId = props.match.params.id;
  const braceletDetails = useSelector((state) => state.braceletDetails);
  const { loading, error, bracelet } = braceletDetails;
  const [qty, setQty] = useState(1);


  useEffect(() => {
    dispatch(detailsBracelet(braceletId));
  }, [dispatch, braceletId]);

  const addToCartHandler = () => {
    props.history.push(`/cartbracelet/${braceletId}?qty=${qty}`);
  };
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
    <div>
      <br></br>

        <br></br>  
      <Link to="/bracelet"><ArrowLeft color="#fc0362" size={50}/></Link>
      <br></br>

      <br></br>

      <div className="row ">
      <div className="col-md-3 col-lg-4" >
          <img className="large img-fluid" src={bracelet.image} alt={bracelet.name}></img>
        </div>
        <div className="col-md-3 col-lg-3" >
          <ul>
            <li>
              <h1>{bracelet.name}</h1>
            </li>
            <li>
              <Rating
                rating={bracelet.rating}
                numReviews={bracelet.numReviews}
              ></Rating>
            </li>
            <li>Price : Rs.{bracelet.price}</li>
            <li>
              Description:
              <p>{bracelet.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-lg-3 ">
          <div>
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">Rs.{bracelet.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {bracelet.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
            
               
              {bracelet.countInStock > 0 &&(
 <>
 <li>
   <div className="row">
     <div>Qty</div>
     <div>
       <select
         value={qty}
         onChange={(e) => setQty(e.target.value)}
       >
         {[...Array(bracelet.countInStock).keys()].map(
           (x) => (
             <option key={x + 1} value={x + 1}>
               {x + 1}
             </option>
           )
         )}
       </select>
     </div>
   </div>
 </li>
 <li>
   <button
     onClick={addToCartHandler}
     className="primary block"
   >
     Add to Cart
   </button>
 </li>
</>
              )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
