const initialState = {
  contact: {}
};
export default (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "SELECT_CONTACT":
      console.log(action.payload);
      return { ...state, contact: action.payload };
    default:
      return state;
  }
};
