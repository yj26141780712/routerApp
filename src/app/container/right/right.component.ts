import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  paths: string[] = ["home","container","user"];

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      if (params["path"]) {
        this.paths = params["path"].split('/');
        console.log(this.paths);
      }
    })
  }


}
