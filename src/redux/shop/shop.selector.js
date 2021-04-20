import { createSelector } from 'reselect'

const shopItemsSelector = state => state.shop

export const ShopSelector = createSelector(
  shopItemsSelector,
  items => items.collection
)