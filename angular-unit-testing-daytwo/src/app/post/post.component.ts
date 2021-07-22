import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  message: string = '';

  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    this.message = this._postService.title;
    this._postService.getPosts().subscribe(result => {
      console.log(result);
    }, (error => { console.log(error); }))
  }

}
