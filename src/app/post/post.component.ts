import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  posts:any = [];
  url:string = 'https://jsonplaceholder.typicode.com/posts';
  title:string;
  constructor(private _http :HttpClient) { 
    
    _http.get(this.url).subscribe((results) =>{
      this.posts = results;
    })

  }

  createPost(input : HTMLInputElement){
    let post ={
      title:input.value
    }
    this._http.post(this.url,post).subscribe((result)=>{
      this.posts.push(result);
    })
  }


}
