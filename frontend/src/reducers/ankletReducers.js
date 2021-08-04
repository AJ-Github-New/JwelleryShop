const {
    ANKLET_LIST_REQUEST,
    ANKLET_LIST_SUCCESS,
    ANKLET_LIST_FAIL,
  } = require('../constants/ankletConstants');

  const {
    ANKLET_DETAILS_FAIL,
      ANKLET_DETAILS_REQUEST,
      ANKLET_DETAILS_SUCCESS} 
      = require('../constants/ankletConstants');  
  
  export const ankletListReducer = (
    state = { loading: true, anklets: [] },
    action
  ) => {
    switch (action.type) {
      case ANKLET_LIST_REQUEST:
        return { loading: true };
      case ANKLET_LIST_SUCCESS:
        return { loading: false, anklets: action.payload };
      case ANKLET_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  export const ankletDetailsReducer = (
    state = { anklet: {}, loading: true },
    action
  ) => {
    switch (action.type) {
      case ANKLET_DETAILS_REQUEST:
        return { loading: true };
      case ANKLET_DETAILS_SUCCESS:
        return { loading: false, anklet: action.payload };
      case ANKLET_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };