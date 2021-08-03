import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import data from './data';
import { ArrowLeft } from 'react-bootstrap-icons';

export default function EarringScreen(props) {
  const earring = data.earrings.find((x) => x._id === props.match.params.id);
  if (!earring) {
    return <div> Earring Not Found</div>;
  }
  return (
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
            
                <button className="primary block">Add to Cart</button>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
