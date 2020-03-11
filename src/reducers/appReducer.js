const initialState = {
  contact: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CONTACT":
      return { ...state, contact: action.payload };
    default:
      return state;
  }
};
