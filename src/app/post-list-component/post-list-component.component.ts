import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  posts: Post[] = [];

  constructor(public myapp: AppComponent) { }

  ngOnInit() {
    console.log("Récupération du tableau créé dans AppComponent");
    this.posts = this.myapp.AppPosts;
  }

  onLoveIt(id: number) {
    this.posts[id].loveIts++;
  }

  onDontLoveIt(id: number) {
    this.posts[id].loveIts--;
  }
}
