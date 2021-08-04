const {
    EARRING_LIST_REQUEST,
    EARRING_LIST_SUCCESS,
    EARRING_LIST_FAIL,
  } = require('../constants/earringConstants');
  const {
    EARRING_DETAILS_FAIL,
      EARRING_DETAILS_REQUEST,
      EARRING_DETAILS_SUCCESS} 
      = require('../constants/earringConstants');  
      
    export const earringListReducer = (
    state = { loading: true, earrings: [] },
    action
  ) => {
    switch (action.type) {
      case EARRING_LIST_REQUEST:
        return { loading: true };
      case EARRING_LIST_SUCCESS:
        return { loading: false, earrings: action.payload };
      case EARRING_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const earringDetailsReducer = (
    state = { earring: {}, loading: true },
    action
  ) => {
    switch (action.type) {
      case EARRING_DETAILS_REQUEST:
        return { loading: true };
      case EARRING_DETAILS_SUCCESS:
        return { loading: false, earring: action.payload };
      case EARRING_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };