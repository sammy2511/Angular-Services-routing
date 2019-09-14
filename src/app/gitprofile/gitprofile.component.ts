import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Observable } from 'rxjs';
import {combineLatest} from 'rxjs'

@Component({
  selector: 'app-gitprofile',
  templateUrl: './gitprofile.component.html',
  styleUrls: ['./gitprofile.component.css']
})
export class GitprofileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router :Router) { }

  ngOnInit() {

    let obs = combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])

    obs.subscribe((combined) =>{
      console.log(combined[0].get('id'),combined[0].get('username'))
      console.log(combined[1].get('page'),combined[1].get('order'))
      console.log(combined)
    })

    // this.route.paramMap.subscribe(param => {
    //   console.log(param.get('id'),param.get('username'))
    // })
  }

  doMagic(){
    this.router.navigate(['/followers'])
  }

}
