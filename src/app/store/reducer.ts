import { createReducer, on } from '@ngrx/store';
import { initialStates } from './state';
// get the actions
import { sortProjects, toggleTheme } from './actions';

const reducer = createReducer(
  initialStates,
  // toggling the theme
  on(toggleTheme, (state: any) => {
    return {
      ...state,
      toggleTheme: !state.toggleTheme,
    };
  }),
  // sort projects based on ascending or descending order
  on(sortProjects, (state: any, action: any) => {
    const { sortingOrder } = action;
    console.log(sortingOrder);
    // ascending order
    if (sortingOrder == 'asc') {
      console.log(
        state.projectData.sort(
          (a: any, b: any) => a.name.toLowerCase() - b.name.toLowerCase()
        )
      );
      let newProjects = state.projectData.sort(
        (projectA: any, projectB: any) => {
          let projectAName = projectA.name.toLowerCase();
          let projectBName = projectB.name.toLowerCase();
          return projectAName.localeCompare(projectBName);
        }
      );
      return {
        ...state,
      };
    } else if (sortingOrder == 'desc') {
      return {
        ...state,
      };
    }
    return {
      ...state,
    };
  })
);

export const storeReducer = (state: any, action: any) => {
  return reducer(state, action);
};
