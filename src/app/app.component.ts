import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    { id:1 , name:"course1"},
    { id:2 , name:"course2"},
    { id:3 , name:"course3"}
  ];

  add(){
    let count = this.courses.length;
    this.courses.push({
      id: count+1,
      name:`course${count+1}`
    })
  }

  remove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }
}
