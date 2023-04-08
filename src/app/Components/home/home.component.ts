import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import {
  addPost,
  deletePost,
  filterPosts,
  getPosts,
} from 'src/app/Store/Actions/postActions';
import { TableState } from 'src/app/Store/Reducers/postReducer';
import { postSelector } from 'src/app/Store/Selectors/postSelector';

const { v4: uuidv4 } = require('uuid');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  search: FormGroup;
  searchClear = true;
  posts$ = this.store.pipe(select(postSelector));

  constructor(private store: Store<TableState>) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
    this.search = new FormGroup({
      filter: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.store.dispatch(getPosts());
    this.posts$.subscribe((data) => console.log(data));
  }

  addPost() {
    let post = this.form.value;
    post['id'] = uuidv4();
    this.store.dispatch(addPost(post));
    this.form.reset();
  }

  filterPosts() {
    this.store.dispatch(filterPosts(this.search.value.filter));
    this.searchClear = false;
  }
  cleanSearch() {
    this.store.dispatch(getPosts());
    this.searchClear = true;
    this.search.reset();
  }

  delete(id: string) {
    this.store.dispatch(deletePost(id));
  }
}
