import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import data from './data';

export default function AnkletS(props) {
  const anklet = data.anklets.find((x) => x._id === props.match.params.id);
  if (!anklet) {
    return <div> anklet Not Found</div>;
  }
  return (
    <div>
      <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="col-5">
          <img className="large" src={anklet.image} alt={anklet.name}></img>
        </div>
        <div className="col-3">
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
            <li>Price : ${anklet.price}</li>
            <li>
              Description:
              <p>{anklet.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${anklet.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
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
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}