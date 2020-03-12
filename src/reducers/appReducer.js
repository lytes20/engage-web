const initialState = {
  contact: {},
  openEditContact: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CONTACT":
      return { ...state, contact: action.payload };
    case "OPEN_EDIT_CONTACT":
      return { ...state, contact: action.payload, openEditContact: true };
    case "CLOSE_EDIT_CONTACT":
      return { ...state, openEditContact: false };
    default:
      return state;
  }
};
