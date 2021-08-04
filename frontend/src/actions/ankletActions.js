import Axios from 'axios';
import {
  ANKLET_LIST_FAIL,
  ANKLET_LIST_REQUEST,
  ANKLET_LIST_SUCCESS,
} from '../constants/ankletConstants';


import {
    ANKLET_DETAILS_FAIL,
      ANKLET_DETAILS_REQUEST,
      ANKLET_DETAILS_SUCCESS} 
      from '../constants/ankletConstants';
      
export const listanklets = () => async (dispatch) => {
  dispatch({
    type: ANKLET_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/anklets');
    dispatch({ type: ANKLET_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ANKLET_LIST_FAIL, payload: error.message });
  }
};

export const detailsAnklet = (ankletId) => async (dispatch) => {
    dispatch({ type: ANKLET_DETAILS_REQUEST, payload: ankletId });
    try {
      const { data } = await Axios.get(`/api/anklets/${ankletId}`);
      dispatch({ type: ANKLET_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ANKLET_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };