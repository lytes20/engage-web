const initialState = {
  contact: {},
  openEditContact: false,
  openDeleteContact: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CONTACT":
      return { ...state, contact: action.payload };
    case "OPEN_EDIT_CONTACT":
      return { ...state, contact: action.payload, openEditContact: true };
    case "CLOSE_EDIT_CONTACT":
      return { ...state, openEditContact: false };
    case "OPEN_DELETE_CONTACT":
      return { ...state, contact: action.payload, openDeleteContact: true };
    case "CLOSE_DELETE_CONTACT":
      return { ...state, openDeleteContact: false };
    default:
      return state;
  }
};
