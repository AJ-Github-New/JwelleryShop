
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBraceletToCart } from './actions/cartActionsBracelet.js';

export default function CartScreenNecklace(props) {
  const braceletId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (braceletId) {
      dispatch(addBraceletToCart
        (braceletId, qty));
    }
  }, [dispatch, braceletId, qty]);
 
  return (
    <div>
      <h1>Cart Screen Bracelet</h1>
      <p>
        ADD TO CART : BraceletID : {braceletId} Qty: {qty}
      </p>
    </div>
  );
}