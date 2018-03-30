import { LeftTreeTestComponent } from './left-tree-test/left-tree-test.component';
import { HttpComponent } from './http/http.component';
import { ChartsComponent } from './charts/charts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1.componnet';
import { Page3Component } from './page3.component';
import { Page2Component } from './page2.component';
import { ContainerComponent } from '../container/container.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from '../home/home.component';
import { TabsComponent } from './tabs/tabs.component';
import { UserComponent } from './user/user.component';
import { TableAnyComponent } from './table-any/table-any.component';
import { TableShowComponent } from './table-show/table-show.component';
import { NgxTabletestComponent } from './ngx-tabletest/ngx-tabletest.component';
import { UploadDemoComponent } from './upload-demo/upload-demo.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { TestComponent } from './test/test.component';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';
import { DerectiveListComponent } from './derective-list/derective-list.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';


const containerRoutes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'table-show', component: TableShowComponent },
      { path: 'ngx-tabletest', component: NgxTabletestComponent },
      { path: 'upload-demo', component: UploadDemoComponent },
      { path: 'http', component: HttpComponent },
      { path: 'left-tree-test', component: LeftTreeTestComponent },
      { path: 'ng-model', component: NgModelComponent },
      { path: 'test', component: TestComponent },
      { path: 'dynamic-list', component: DynamicListComponent },
      { path: 'derective-list', component: DerectiveListComponent },
      { path: 'form-list', component: FormListComponent },
      { path: 'form-submit', component: FormSubmitComponent },
      { path: 'form-dynamic', component: FormDynamicComponent },
      { path: '', component: UserComponent },
    ]
  }
];

// const containerRoutes: Routes = [
//   {
//     path: '',
//     component: ContainerComponent,
//     children: [
//       { path: 'button', component: ButtonComponent },
//       { path: 'navigation', component: NavigationComponent },
//     ]
//   }
// ];



@NgModule({
  imports: [RouterModule.forChild(containerRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class ContainerRoutingModule { }
