import { createAction, props } from '@ngrx/store';
export const ACTIONS = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  SORT_PROJECTS: 'SORT_PROJECTS',
};

// main actions
export const toggleTheme = createAction(ACTIONS.TOGGLE_THEME);
// sorting order of projects
export const sortProjects = createAction(
  ACTIONS.SORT_PROJECTS,
  props<{ sortingOrder: any }>()
);
