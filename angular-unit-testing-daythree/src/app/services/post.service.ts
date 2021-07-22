import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  title: string = "Post Management";
  REST_API: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>(`${this.REST_API}`)
  }
}
