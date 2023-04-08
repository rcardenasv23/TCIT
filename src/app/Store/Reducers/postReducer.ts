import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/Models/Post';
import {
  addPostSucceeded,
  deletePostSucceeded,
  filterPostsSucceeded,
  getPostSucceeded,
} from '../Actions/postActions';

export interface TableState {
  posts: Array<Post>;
}

const initialState: ReadonlyArray<Post> = [];

export const postReducer = createReducer(
  initialState,
  on(addPostSucceeded, (state, { newPost }) => [...state, newPost]),
  on(deletePostSucceeded, (state, { postId }) =>
    state.filter((post) => (postId !== post.id ? post : null))
  ),
  on(getPostSucceeded, (state, { posts }) => [...posts]),
  on(filterPostsSucceeded, (state, { posts }) => [...posts])
);
