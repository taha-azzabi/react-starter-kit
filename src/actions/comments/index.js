import { SAVE_COMMENT, REMOVE_COMMENT } from './actionTypes';

export const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment,
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  payload: comment,
});
