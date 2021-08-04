
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsAnklet } from './actions/ankletActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import Rating from './Rating';
import { ArrowLeft } from 'react-bootstrap-icons';


export default function AnkletScreen(props) {
  const dispatch = useDispatch();
  const ankletId = props.match.params.id;
  const ankletDetails = useSelector((state) => state.ankletDetails);
  const { loading, error, anklet } = ankletDetails;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(detailsAnklet(ankletId));
  }, [dispatch, ankletId]);

  const addToCartHandler = () => {
    props.history.push(`/cartanklet/${ankletId}?qty=${qty}`);  };

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
      <Link to="/anklet"><ArrowLeft color="#fc0362" size={50}/></Link>
      <br></br>

      <br></br>
    <div className="row" >
        <div className="col-md-3 col-lg-4" >
          <img className="large img-fluid" src={anklet.image} alt={anklet.name}></img>
        </div>

        <br>
        </br>
        <br></br>
        <br>
        </br>
        <br></br>
        <br>
        </br>
        <br></br>
        <div className="col-md-3 col-lg-3" >
          <ul>
            <li>
              <h1>{anklet.name}</h1>
            </li>
            <li>
              <Rating
                rating={anklet.rating}
                numReviews={anklet.numReviews}
              ></Rating>
            </li>
            <li>Price : Rs.{anklet.price}</li>
            <li>
              Description:
              <p>{anklet.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-lg-3 ">
          <div>
            <ul>
              <li>
                <div className="row" >
                  <div>Price</div>
                  <div className="price">Rs.{anklet.price}</div>
                </div>
              </li>
              <li>
                <div className="row" >
                  <div>Status</div>
                  <div>
                    {anklet.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
            
              {anklet.countInStock > 0 &&(
 <>
 <li>
   <div className="row">
     <div>Qty</div>
     <div>
       <select
         value={qty}
         onChange={(e) => setQty(e.target.value)}
       >
         {[...Array(anklet.countInStock).keys()].map(
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
