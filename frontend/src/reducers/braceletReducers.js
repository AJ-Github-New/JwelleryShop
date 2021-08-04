const {
    BRACELET_LIST_REQUEST,
    BRACELET_LIST_SUCCESS,
    BRACELET_LIST_FAIL,
  } = require('../constants/braceletConstants');
  
  const {
    BRACELET_DETAILS_FAIL,
      BRACELET_DETAILS_REQUEST,
      BRACELET_DETAILS_SUCCESS} 
      = require('../constants/braceletConstants');  
  
  export const braceletListReducer = (
    state = { loading: true, bracelets: [] },
    action
  ) => {
    switch (action.type) {
      case BRACELET_LIST_REQUEST:
        return { loading: true };
      case BRACELET_LIST_SUCCESS:
        return { loading: false, bracelets: action.payload };
      case BRACELET_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  export const braceletDetailsReducer = (
    state = { bracelet: {}, loading: true },
    action
  ) => {
    switch (action.type) {
      case BRACELET_DETAILS_REQUEST:
        return { loading: true };
      case BRACELET_DETAILS_SUCCESS:
        return { loading: false, bracelet: action.payload };
      case BRACELET_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };