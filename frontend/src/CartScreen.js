import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions/cartActions';

export default function CartScreen(props) {
  const earringId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (earringId) {
      dispatch(addToCart(earringId, qty));
    }
  }, [dispatch, earringId, qty]);
 
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : EarringID: {earringId} Qty: {qty}
      </p>
    </div>
  );
}
