import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title;
  @Input() content;
  @Input() created_at;
  @Input() loveIts;

  constructor() { }

  ngOnInit() {
  }

  onLikeIt() {
    this.loveIts++;
  }

  onDontLikeIt() {
    this.loveIts--;
  }
}
