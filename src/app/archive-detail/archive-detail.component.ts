import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive-detail',
  templateUrl: './archive-detail.component.html',
  styleUrls: ['./archive-detail.component.css']
})
export class ArchiveDetailComponent implements OnInit {
  private year:any;
  private month:any;
  constructor(private route : ActivatedRoute,private router :Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param =>{
      this.year = param.get('year');
      this.month = param.get('month');
    })
  }

  goHome(){
    this.router.navigate(['/archives'])
  }

}
