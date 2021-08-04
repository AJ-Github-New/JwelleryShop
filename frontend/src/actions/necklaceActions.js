import Axios from 'axios';
import {
  NECKLACE_LIST_FAIL,
  NECKLACE_LIST_REQUEST,
  NECKLACE_LIST_SUCCESS,
} from '../constants/necklaceConstants';

import {
  NECKLACE_DETAILS_FAIL,
    NECKLACE_DETAILS_REQUEST,
    NECKLACE_DETAILS_SUCCESS,} 
    from '../constants/necklaceConstants';

export const listnecklaces = () => async (dispatch) => {
  dispatch({
    type: NECKLACE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/necklaces');
    dispatch({ type: NECKLACE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: NECKLACE_LIST_FAIL, payload: error.message });
  }
};


export const detailsNecklace = (necklaceId) => async (dispatch) => {
  dispatch({ type: NECKLACE_DETAILS_REQUEST, payload: necklaceId });
  try {
    const { data } = await Axios.get(`/api/NECKLACEs/${necklaceId}`);
    dispatch({ type: NECKLACE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NECKLACE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};