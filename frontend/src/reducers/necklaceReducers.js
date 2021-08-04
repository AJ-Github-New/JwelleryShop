const {
    NECKLACE_LIST_REQUEST,
    NECKLACE_LIST_SUCCESS,
    NECKLACE_LIST_FAIL,
  } = require('../constants/necklaceConstants');
  
  const {
    NECKLACE_DETAILS_FAIL,
    NECKLACE_DETAILS_REQUEST,
    NECKLACE_DETAILS_SUCCESS} 
      = require('../constants/necklaceConstants');  
      
      
  export const necklaceListReducer = (
    state = { loading: true, neclaces: [] },
    action
  ) => {
    switch (action.type) {
      case NECKLACE_LIST_REQUEST:
        return { loading: true };
      case NECKLACE_LIST_SUCCESS:
        return { loading: false, necklaces: action.payload };
      case NECKLACE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const necklaceDetailsReducer = (
    state = { necklace: {}, loading: true },
    action
  ) => {
    switch (action.type) {
      case NECKLACE_DETAILS_REQUEST:
        return { loading: true };
      case NECKLACE_DETAILS_SUCCESS:
        return { loading: false, necklace: action.payload };
      case NECKLACE_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };