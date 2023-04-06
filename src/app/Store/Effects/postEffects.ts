import {
  catchError,
  concatMap,
  switchMap,
  exhaustMap,
  map,
  tap,
  mergeMap,
} from 'rxjs/operators';
import {
  addPost,
  addPostSucceeded,
  deletePost,
  deletePostSucceeded,
  filterPosts,
  filterPostsSucceeded,
  getPostSucceeded,
  getPosts,
} from '../Actions/postActions';
import { Injectable } from '@angular/core';
import { PostServiceService } from 'src/app/Services/Post/post-service.service';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { Post } from 'src/app/Models/Post';

@Injectable()
export class PostEffects {
  loadPost$ = createEffect(() =>
    this.action$.pipe(
      ofType(getPosts),
      exhaustMap(() =>
        this.postService.getPosts().pipe(
          map((posts) => getPostSucceeded(posts)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  filterPost$ = createEffect(() =>
    this.action$.pipe(
      ofType(filterPosts),
      exhaustMap(({ filter }) =>
        this.postService.getPosts().pipe(
          map((posts: Post[]) =>
            filterPostsSucceeded(
              posts.filter((post) =>
                post.name.includes(filter.filter) ? post : null
              )
            )
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addPost$ = createEffect(() =>
    this.action$.pipe(
      ofType(addPost),
      concatMap(({ post }) =>
        this.postService.addPost(post).pipe(
          map((newPost) => addPostSucceeded(newPost)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.action$.pipe(
      ofType(deletePost),
      mergeMap(({ postId }) =>
        this.postService.deletePost(postId).pipe(
          map(() => deletePostSucceeded(postId)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private action$: Actions,
    private postService: PostServiceService
  ) {}
}
