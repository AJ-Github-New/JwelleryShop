import Axios from 'axios';


import {
    EARRING_LIST_FAIL,
    EARRING_LIST_REQUEST,
    EARRING_LIST_SUCCESS,
  } from '../constants/earringConstants';

  import {
    EARRING_DETAILS_FAIL,
      EARRING_DETAILS_REQUEST,
      EARRING_DETAILS_SUCCESS} 
      from '../constants/earringConstants';

export const listearrings = () => async (dispatch) => {
  dispatch({
    type: EARRING_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/earrings');
    dispatch({ type: EARRING_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: EARRING_LIST_FAIL, payload: error.message });
  }
};

export const detailsEarring = (earringId) => async (dispatch) => {
    dispatch({ type: EARRING_DETAILS_REQUEST, payload: earringId });
    try {
      const { data } = await Axios.get(`/api/earrings/${earringId}`);
      dispatch({ type: EARRING_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: EARRING_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };