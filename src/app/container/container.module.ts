import { ContainerComponent } from './container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { ContainerRoutingModule } from './container-routing.module';
import { ButtonComponent } from './button/button.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './user/search/search.component';
import { ToolsComponent } from './user/tools/tools.component';
import { TableComponent } from './user/table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { UserComponent } from './user/user.component';
import { UserinfoService } from '../userinfo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    ContainerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [ButtonComponent,NavigationComponent, SearchComponent
    , ToolsComponent, TableComponent, TabsComponent,
  ContainerComponent,LeftComponent,RightComponent,UserComponent],
  providers:[UserinfoService]
})
export class ContainerModule { }
