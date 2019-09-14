import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../services/github-service.service';


@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  private Followers :any = [];


  constructor(private _GithubServiceService : GithubServiceService) { }

  ngOnInit() {
    this._GithubServiceService.getFollowers()
      .subscribe(response => {
        this.Followers = response.body;
      });
  }

}
