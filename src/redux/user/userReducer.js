import * as ActionType from "../actionType/actionType";
const initialState = {
  currentUser: null,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
