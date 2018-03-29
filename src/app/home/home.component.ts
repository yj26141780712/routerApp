import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  name:string;
  constructor(private router: ActivatedRoute ) { }

  ngOnInit() {
    //console.log(this.router.snapshot);
    this.name = this.router.snapshot.queryParams['name'];
    //console.log(this.name);
  }

}
