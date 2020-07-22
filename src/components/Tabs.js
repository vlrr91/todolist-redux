import React from 'react';

// Actions
import { VisibilityFilters } from '../actions';

// Containers
import FilterTab from '../containers/FilterTab';

// Styles
import './Tabs.css';

export default function Tabs() {
  return (
    <div className="tabs-todo">
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
