import { createAction } from '@ngrx/store';
import { Post } from 'src/app/Models/Post';

export const getPosts = createAction('[Posts] Get posts');
export const getPostSucceeded = createAction(
  '[Posts] Get posts succeeded',
  (posts: ReadonlyArray<Post>) => ({ posts })
);

export const filterPosts = createAction(
  '[Text] Filter posts',
  (text: string) => ({
    text,
  })
);
export const filterPostsSucceeded = createAction(
  '[Posts] Filter posts succeeded',
  (posts: Post[]) => ({ posts })
);

export const addPost = createAction('[Post] Add post', (post: Post) => ({
  post,
}));
export const addPostSucceeded = createAction(
  '[Post] Add post succeeded',
  (newPost: Post) => ({ newPost })
);

export const deletePost = createAction(
  '[Post] Delete post',
  (postId: Post['id']) => ({ postId })
);
export const deletePostSucceeded = createAction(
  '[Post] Delete post succeeded',
  (postId: Post['id']) => ({ postId })
);
