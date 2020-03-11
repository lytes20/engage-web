export const viewContact = contact => {
  console.log("I get called");
  return dispatch => dispatch({ type: "SELECT_CONTACT", payload: contact });
};
