import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import data from './data';
import { ArrowLeft } from 'react-bootstrap-icons';

export default function AnkletScreen(props) {
  const anklet = data.anklets.find((x) => x._id === props.match.params.id);
  if (!anklet) {
    return <div> anklet Not Found</div>;
  }
  return (
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
            
                <button className="primary block">Add to Cart</button>
             
            </ul>
          </div>
        </div>
    </div>
</div>
  );
}
