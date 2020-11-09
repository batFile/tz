const initialState = {
    token: null,
    users: null,
    cur_user: null
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  
  switch (action.type) {
    case "CHANGE_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    break;
  }
  return newState;
};
  
export default reducer;