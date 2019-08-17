import { SAVE_COMMENT } from '../actions/comments/actionTypes';

const INITIAL_STATE = {
  comments: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    default:
      return state;
  }
};
