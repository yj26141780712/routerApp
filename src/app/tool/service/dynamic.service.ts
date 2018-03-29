import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Dynamic } from '../class/dynamic';
import { Component1Component } from '../../container/component1/component1.component';
import { Component3Component } from '../../container/component3/component3.component';
import { Component2Component } from '../../container/component2/component2.component';

@Injectable()
export class DynamicService {

 dynamicsubject=new Subject<number>();



  constructor() { }

  getDynamics() {
    return [
      new Dynamic(Component1Component, {}),
      new Dynamic(Component2Component, {}),
      new Dynamic(Component3Component, {}),
    ]
  }

  setShowIndex(index:number){
     
  }

}
