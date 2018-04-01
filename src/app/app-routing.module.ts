import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { patch } from 'webdriver-js-extender';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "home",  loadChildren: 'app/home/home.module#HomeModule'},
  { path: "**", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" }, //prefix
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
