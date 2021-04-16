import { createSelector } from "reselect";
const selectCart = (state) => state.cart;
export const selectCardItems = createSelector(
  [selectCart],
  (cart) => cart.cardItem
);

export const selectCardCount = createSelector([selectCardItems],
  cardItem =>
  cardItem.reduce(
    (accumulator, cardItem) => accumulator + cardItem.quantity,
    0
  )
);

