import { createSelector } from '@ngrx/store';
import { TableState } from '../Reducers/postReducer';
import { Post } from 'src/app/Models/Post';

export const selectPosts = (state: TableState) => state.posts;

export const postSelector = createSelector(
  selectPosts,
  (posts: Post[]) => posts
);
