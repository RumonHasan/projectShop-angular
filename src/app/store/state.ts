import { projectData } from './utilities/projectData';
export const initialStates = {
  toggleTheme: false,
  projectCategories: [
    {
      category: 'All',
      path: 'all',
    },
    {
      category: 'React JS',
      path: 'react',
    },
    {
      category: 'Vanilla JS',
      path: 'javascript',
    },
    {
      category: 'Angular JS',
      path: 'angular',
    },
    {
      category: 'Plain HTML and CSS',
      path: 'htmlcss',
    },
  ],
  // basic project data and path
  projectData: projectData,
  // sorting order
  sortingOrder: 'default',
};
