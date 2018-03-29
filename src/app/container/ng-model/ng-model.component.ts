import { EmitServiceService } from './../../tool/service/emit-service.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {

  @Input() name: string

  @Output() inputChange = new EventEmitter<string>();

  constructor(private emitService: EmitServiceService) { }

  ngOnInit() {
  }

  keyup(event: any) {
    //console.log(event);
    
    console.log(event.target.value);
    this.inputChange.emit(event.target.value);
  }



}
