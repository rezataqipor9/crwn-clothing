import * as ActionType from "../actionType/actionType";
export const setCurrentUser = (user) => ({
  type: ActionType.SET_CURRENT_USER,
  payload: user
});
export const isDropDown = () => ({
  type: ActionType.TOGGLE_DROPDOWN
  });
export const addItem=(item)=>({
  type:ActionType.ADD_ITEM,
  payload:item
})
export const ClearItemFromCart=(id)=>({
  type:ActionType.CLEAR_IETM_FROM_CART,
  payload:id
})
export const EliminateCart=(item)=>({
  type:ActionType.ELIMINATE_CART_ITEM,
  payload:item
})