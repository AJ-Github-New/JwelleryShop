import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsNecklace } from './actions/necklaceActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import Rating from './Rating';
import { ArrowLeft } from 'react-bootstrap-icons';


export default function NecklaceScreen(props) {
  const dispatch = useDispatch();
  const necklaceId = props.match.params.id;
  const necklaceDetails = useSelector((state) => state.necklaceDetails);
  const { loading, error, necklace } = necklaceDetails;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(detailsNecklace(necklaceId));
  }, [dispatch, necklaceId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${necklaceId}?qty=${qty}`);
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
      <Link to="/necklace"><ArrowLeft color="#fc0362" size={50}/></Link>
      <br></br>

      <br></br>

      <div className="row">
      <div className="col-md-3 col-lg-4" >
          <img className="large img-fluid" src={necklace.image} alt={necklace.name}></img>
        </div>
        <div className="col-md-3 col-lg-3" >
          <ul>
            <li>
              <h1>{necklace.name}</h1>
            </li>
            <li>
              <Rating
                rating={necklace.rating}
                numReviews={necklace.numReviews}
              ></Rating>
            </li>
            <li>Price : Rs.{necklace.price}</li>
            <li>
              Description:
              <p>{necklace.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-lg-3 ">
          <div>
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">Rs.{necklace.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {necklace.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
            
                {necklace.countInStock > 0 &&(
 <>
 <li>
   <div className="row">
     <div>Qty</div>
     <div>
       <select
         value={qty}
         onChange={(e) => setQty(e.target.value)}
       >
         {[...Array(necklace.countInStock).keys()].map(
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
