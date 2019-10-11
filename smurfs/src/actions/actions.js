import axios from 'axios';


// Design types of actions
export const FETCH = "FETCH";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILED = "ADD_FAILED";

// Fetched data from the smurf API
export const fetchSmurfs = () => dispatch => {
  dispatch({type: FETCH})
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data)
      dispatch({type:FETCH_SUCCESS, payload: res.data})
    })
    .catch( () => {
      dispatch({type: FETCH_FAILED, payload: 'We failed to fetch smurfs'})
    })
}

export const addSmurfs = (addSmurf) => dispatch => {
  dispatch({ type:ADD_SMURF })
  axios.post('http://localhost:3333/smurfs', addSmurf)
    .then(res => {
      dispatch({ type:ADD_SUCCESS, payload: res.data })
    })
    .catch( () => {
      dispatch({ type: ADD_FAILED, payload: 'We failed to add smurfs'})
    })
}
