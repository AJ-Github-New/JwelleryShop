import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { earringListReducer } from './reducers/earringReducers';
import { necklaceListReducer } from './reducers/necklaceReducers';
import { braceletListReducer } from './reducers/braceletReducers';
import { ankletListReducer } from './reducers/ankletReducers';
import { earringDetailsReducer } from './reducers/earringReducers';
import { necklaceDetailsReducer } from './reducers/necklaceReducers';
import { braceletDetailsReducer } from './reducers/braceletReducers';
import { ankletDetailsReducer } from './reducers/ankletReducers';
import { cartReducer } from './reducers/cartReducer';


const initialState = {};
const reducer = combineReducers({
  earringList: earringListReducer,
  necklaceList:necklaceListReducer,
  braceletList:braceletListReducer,
  ankletList:ankletListReducer,
  earringDetails: earringDetailsReducer,
  necklaceDetails:necklaceDetailsReducer,
  braceletDetails:braceletDetailsReducer,
  ankletDetails:ankletDetailsReducer,
  cart: cartReducer


});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;