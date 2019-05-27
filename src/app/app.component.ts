import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'blog';

  posts = [
    {
      title: 'Mon premier post',
      content: 'le contenu de mon premier post',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'le contenu de mon 2eme post',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'le contenu de mon 3eme post',
      loveIts: 0,
      created_at: new Date()
    }
  ];

}
