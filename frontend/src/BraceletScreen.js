import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import data from './data';
import { ArrowLeft } from 'react-bootstrap-icons';

export default function BraceletScreen(props) {
  const bracelet = data.bracelets.find((x) => x._id === props.match.params.id);
  if (!bracelet) {
    return <div> bracelet Not Found</div>;
  }
  return (
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
            
                <button className="primary block">Add to Cart</button>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
