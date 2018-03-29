import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EmitServiceService {

  eventEmit:EventEmitter<any>

  constructor() { 
    this.eventEmit = new EventEmitter();
  }

}
