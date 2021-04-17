import { createSelector } from "reselect";
const selectCart = (state) => state.cart;
export const selectCardItems = createSelector(
  [selectCart],
  (cart) => cart.cardItem
);
export const selectToggle=createSelector(
  [selectCart],
  (toggle)=>toggle.isShow
)
export const selectCartTotal=createSelector(
  [selectCardItems],
  cardItem =>
  cardItem.reduce(
    (accumulator, cardItem) => accumulator + (cardItem.quantity*cardItem.price),
    0
  )
)

export const selectCardCount = createSelector([selectCardItems],
  cardItem =>
  cardItem.reduce(
    (accumulator, cardItem) => accumulator + cardItem.quantity,
    0
  )
);

