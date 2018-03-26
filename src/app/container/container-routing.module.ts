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


const containerRoutes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'table-show', component: TableShowComponent },
      { path: 'navigation', component: TableAnyComponent },
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
