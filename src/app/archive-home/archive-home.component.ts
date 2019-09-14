import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-home',
  templateUrl: './archive-home.component.html',
  styleUrls: ['./archive-home.component.css']
})
export class ArchiveHomeComponent implements OnInit {

  private posts = ['2017/1','2017/2','2017/3'];

  constructor() { }

  ngOnInit() {
  }

}
