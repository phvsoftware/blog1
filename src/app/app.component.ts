import { Component, OnInit } from '@angular/core';
import { Post } from './models/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  AppPosts: Post[] = [];

  title = 'blog';

  ngOnInit() {
    console.log("création des posts initiaux");
    
    var aPost = new Post('Mon premier post', 'le contenu de mon premier post');
    aPost.loveIts = 1; // pour qu'il soit vert
    this.AppPosts.push(aPost);

    aPost = new Post('Mon deuxième post', 'le contenu de mon 2eme post')
    aPost.loveIts = -1; // pour qu'il soit rouge
    this.AppPosts.push(aPost);

    aPost = new Post('Encore un post', 'le contenu de mon 3eme post');
    this.AppPosts.push(aPost);
  }
}
