import { createSelector } from 'reselect'

const directorySelector = state => state.directory
export const directoryselectf = createSelector(
    directorySelector,
    items => items.section
  )