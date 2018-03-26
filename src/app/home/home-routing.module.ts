import { ContactComponent } from './../contact/contact.component';
import { AboutComponent } from './../about/about.component';



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContainerComponent } from '../container/container.component';
import { ButtonComponent } from '../container/button/button.component';
import { AuthGuardService } from '../auth-guard.service';





const homeRoutes: Routes = [
  {
     path: '',
     component: HomeComponent,
     //canActivate: [AuthGuardService],

    // //canActivateChild: [AuthGuardService],
     children: [
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', loadChildren:"app/container/container.module#ContainerModule" }
     ]
      // { path: 'container', component: ContainerComponent },
      // { path: '', component: ContainerComponent
      // ,children:[
      //     { path: 'button', component: ButtonComponent },
      //     { path: 'navigation', component: NavigationComponent },
      //     //{ path: '', component: ButtonComponent },        
      // ] 
      //{ path: '', loadChildren:"app/container/container.module#ContainerModule" }
   // ]

    // children: [
    //   { path: 'about', component: AboutComponent },
    //   { path: 'contact', component: ContactComponent },
    //   { path: 'container', component: ContainerComponent }
    // ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule { }
