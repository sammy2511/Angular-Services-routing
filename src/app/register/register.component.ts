import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: String;
  password: String;

  constructor(private _todoService:TodoService) { }

  ngOnInit() {
  }

  onRegister(){
    console.log(this.email);
    
    const user = {
      email:this.email,
      password:this.password
    }
    console.log(user);
    
    this._todoService.registerUser(user).subscribe(data =>{
      console.log(data)
    });

  //   this._todoService.registerUser(user);
  }

}
