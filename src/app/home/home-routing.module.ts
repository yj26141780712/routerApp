import { ContainerComponent } from './../container/container.component';
import { ContactComponent } from './../contact/contact.component';
import { AboutComponent } from './../about/about.component';



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { HomeComponent } from './home.component';
import { ButtonComponent } from '../container/button/button.component';
import { AuthGuardService } from '../auth-guard.service';





const homeRoutes: Routes = [
  {
     path: '',
     component: HomeComponent,
     children: [
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'container', loadChildren:"app/container/container.module#ContainerModule" },
      { path: '', loadChildren:"app/container/container.module#ContainerModule" }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule { }
