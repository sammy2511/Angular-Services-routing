import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  private url = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private _HttpClient: HttpClient) { }


  getFollowers(){
    return this._HttpClient.get(this.url,{observe:'response'})
      .pipe( response=> response);
  }
}
