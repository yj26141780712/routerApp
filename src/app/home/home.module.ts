import { AboutComponent } from './../about/about.component';
import { ContainerModule } from './../container/container.module';
import { HeaderComponent } from './../header/header.component';
import { LinkService } from './../link.service';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonComponent } from '../container/button/button.component';
import { LeftComponent } from '../container/left/left.component';
import { RightComponent } from '../container/right/right.component';
import { UserComponent } from '../container/user/user.component';
import { ContainerComponent } from '../container/container.component';
import { ContactComponent } from '../contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[],
  providers:[LinkService],
  declarations:[HomeComponent,AboutComponent,HeaderComponent,ContactComponent]
})
export class HomeModule { }
