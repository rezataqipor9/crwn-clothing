import * as ActionType from "../actionType/actionType";
export const setCurrentUser = (user) => ({
  type: ActionType.SET_CURRENT_USER,
  payload: user
});
export const isDropDown = () => ({
  type: ActionType.TOGGLE_DROPDOWN
  });
