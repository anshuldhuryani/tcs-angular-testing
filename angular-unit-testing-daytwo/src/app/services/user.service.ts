import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) { }

  getUserList(): Observable<any> {
    return this._httpClient.get(`https://reqres.in/api/users`);
  }

  getUserDetails(id) {
    return this._httpClient.get(`https://reqres.in/api/users/${id}`)
      .pipe(map((data) => this.transformResponse(data)));
  }

  // This method transforms the response and add "university" property to the json.
  transformResponse(response) {
    response["data"]["university"] = 'Amity University';
    return response;
  }

}
