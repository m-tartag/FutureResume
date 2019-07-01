// uuid gives a universal ID on the fly
import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';


// This is made possible by Thunk middleware
export const setAlert = (msg, alertType) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
};