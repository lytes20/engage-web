export const viewContact = contact => {
  return dispatch => dispatch({ type: "SELECT_CONTACT", payload: contact });
};

export const openEditContact = contact => {
  return dispatch => dispatch({ type: "OPEN_EDIT_CONTACT", payload: contact });
};
