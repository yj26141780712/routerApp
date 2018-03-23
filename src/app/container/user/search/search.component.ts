import { UserinfoService } from './../../../userinfo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private keyword: string;
  public keywordFilter: FormControl = new FormControl();
  constructor(private userinfoService: UserinfoService) {
    // this.keywordFilter.valueChanges.subscribe( //change事件
    //   value => {
    //      this.keyword = value;
    //     //console.log(this.keyword);
    //   }
    // );
  }

  onSubmit() {
    this.userinfoService.subject.next(this.keywordFilter.value);
  }
  ngOnInit() {
  }

}
