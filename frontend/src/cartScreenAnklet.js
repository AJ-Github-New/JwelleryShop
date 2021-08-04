
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAnkletToCart } from './actions/cartActionsAnklet.js';

export default function CartScreenNecklace(props) {
  const ankletId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (ankletId) {
      dispatch(addAnkletToCart
        (ankletId, qty));
    }
  }, [dispatch, ankletId, qty]);
 
  return (
    <div>
      <h1>Cart Screen Anklet</h1>
      <p>
        ADD TO CART : AnkletID : {ankletId} Qty: {qty}
      </p>
    </div>
  );
}