import * as actionType from "../actions/actions.js";

// Design slice of state

 const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
  };

  // create one reducer for all slice

  export const reducer = (state = initialState, action) => {
    switch(action.type) {
      case actionType.FETCH:
        return {
          ...state,
          fetchingSmurfs:true
        }
        case actionType.FETCH_SUCCESS:
          return {
            ...state,
            fetchingSmurfs: false,
            smurfs: action.payload
          }
        case actionType.FETCH_FAILED:
          return {
            ...state,
            fetchingSmurfs:false,
            error: action.payload
          }
        case actionType.ADD_SMURF:
          return {
            ...state,
            addingSmurf: true,
          }
        case actionType.ADD_SUCCESS : 
          return {
            ...state,
            addingSmurf: false,
            smurfs: action.payload
          }
        case actionType.ADD_FAILED: 
          return {
            ...state,
            addingSmurf: false,
            error: action.payload
          }
      default:
        return state
    }
  }