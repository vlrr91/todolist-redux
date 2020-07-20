import React from 'react';

// Actions
import { VisibilityFilters } from '../actions';

// Containers
import FilterTab from '../containers/FilterTab';

export default function Tabs() {
  return (
    <div>
      <span>Show: </span>
      <FilterTab filter={VisibilityFilters.SHOW_ALL}>
        All
      </FilterTab>
      <FilterTab filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </FilterTab>
      <FilterTab filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterTab>
    </div>
  );
}
