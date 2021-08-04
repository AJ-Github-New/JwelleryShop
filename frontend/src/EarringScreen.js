import Rating from './Rating';
import { ArrowLeft } from 'react-bootstrap-icons';

import React, { useEffect ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsEarring } from './actions/earringActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

export default function EarringScreen(props) {
  const dispatch = useDispatch();
  const earringId = props.match.params.id;
  const earringDetails = useSelector((state) => state.earringDetails);
  const { loading, error, earring } = earringDetails;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(detailsEarring(earringId));
  }, [dispatch, earringId]);


  const addToCartHandler = () => {
    props.history.push(`/cart/${earringId}?qty=${qty}`);
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
      <Link to="/earring"><ArrowLeft color="#fc0362" size={50}/></Link>
      <br></br>

      <br></br>

      <div className="row">
      <div className="col-md-3 col-lg-4" >
          <img className="large img-fluid" src={earring.image} alt={earring.name}></img>
        </div>
        <div className="col-md-3 col-lg-3" >
          <ul>
            <li>
              <h1>{earring.name}</h1>
            </li>
            <li>
              <Rating
                rating={earring.rating}
                numReviews={earring.numReviews}
              ></Rating>
            </li>
            <li>Price : Rs.{earring.price}</li>
            <li>
              Description:
              <p>{earring.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-lg-3 ">
          <div>
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">Rs.{earring.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {earring.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              {earring.countInStock > 0 &&(
 <>
 <li>
   <div className="row">
     <div>Qty</div>
     <div>
       <select
         value={qty}
         onChange={(e) => setQty(e.target.value)}
       >
         {[...Array(earring.countInStock).keys()].map(
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
