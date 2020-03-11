export const viewContact = contact => {
  return dispatch => dispatch({ type: "SELECT_CONTACT", payload: contact });
};
