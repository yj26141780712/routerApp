import { DynamicService } from './../../tool/service/dynamic.service';
import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DynamicDirective } from '../../tool/directive/dynamic.directive';
import { Dynamic } from '../../tool/class/dynamic';
import { DynamicInterface } from './dynamic.model';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  @Input() dynamics: Dynamic[];
  @Input() showIndex: number;
  @ViewChild(DynamicDirective) appdynamic: DynamicDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private dynamicService: DynamicService) {

  }

  ngOnInit() {
    this.loadComponent();
    this.dynamicService.dynamicsubject.asObservable().subscribe((index) => {
      this.showIndex = index;
      this.loadComponent();
    });
  }

  loadComponent() {

    let adItem = this.dynamics[this.showIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.appdynamic.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<DynamicInterface>componentRef.instance).data = adItem.data;
  }

}
