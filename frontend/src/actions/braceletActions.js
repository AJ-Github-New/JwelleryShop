import Axios from 'axios';
import {
  BRACELET_LIST_FAIL,
  BRACELET_LIST_REQUEST,
  BRACELET_LIST_SUCCESS,
} from '../constants/braceletConstants';

import {
    BRACELET_DETAILS_FAIL,
      BRACELET_DETAILS_REQUEST,
      BRACELET_DETAILS_SUCCESS,} 
      from '../constants/braceletConstants';
       

export const listbracelets = () => async (dispatch) => {
  dispatch({
    type: BRACELET_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/bracelets');
    dispatch({ type: BRACELET_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: BRACELET_LIST_FAIL, payload: error.message });
  }
};

export const detailsBracelet = (braceletId) => async (dispatch) => {
    dispatch({ type: BRACELET_DETAILS_REQUEST, payload: braceletId });
    try {
      const { data } = await Axios.get(`/api/bracelets/${braceletId}`);
      dispatch({ type: BRACELET_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: BRACELET_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };