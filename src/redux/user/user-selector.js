import { createSelector } from 'reselect'

const usersSelector = state => state.user


export const selectUser = createSelector(
    [usersSelector],
  (item) => item.currentUser 
)
