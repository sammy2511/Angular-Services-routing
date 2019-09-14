import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  user:any;
  authToken:any;

  constructor(private _http:HttpClient) { }

  registerUser(user):Observable<HttpResponse<any>>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    console.log(user)
    return this._http.post<any>('http://localhost:3000/users',user,{observe:'response'}).pipe(
      res => res
    )
  }


}
