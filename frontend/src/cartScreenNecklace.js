import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNecklaceToCart } from './actions/cartActionNecklace.js';

export default function CartScreenNecklace(props) {
  const necklaceId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (necklaceId) {
      dispatch(addNecklaceToCart(necklaceId, qty));
    }
  }, [dispatch, necklaceId, qty]);
 
  return (
    <div>
      <h1>Cart Screen Necklace</h1>
      <p>
        ADD TO CART : NecklaceId : {necklaceId} Qty: {qty}
      </p>
    </div>
  );
}
