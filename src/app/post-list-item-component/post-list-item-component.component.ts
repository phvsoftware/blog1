import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() created_at: any;
  @Input() loveIts: number;
  @Input() indexOfPost: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() { }

  onLikeIt() {
    this.postsService.loveIt(this.indexOfPost);
  }

  onDontLikeIt() {
    this.postsService.dontLoveIt(this.indexOfPost);
  }

  onDeletePost() {
    if(confirm('Etes-vous sûr de vouloir supprimer ce post ?')) {
      this.postsService.removePost(this.indexOfPost);
    } else {
      return null;
    }
  }
}
