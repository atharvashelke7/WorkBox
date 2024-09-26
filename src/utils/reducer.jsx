export const initialState = {
  projectDetails: {},
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROJECT_DETAILS':
      return {
        ...state,
        projectDetails: action.payload,
      };
    default:
      return state;
  }
};