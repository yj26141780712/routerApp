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
import { HeaderNavigationComponent } from './user/header-navigation/header-navigation.component';
import { AlertModule, PaginationModule } from 'ngx-bootstrap';
import { ChartsComponent } from './charts/charts.component';
import { NgxEchartsModule} from 'ngx-echarts';
import { TableAnyComponent } from './user/table-any/table-any.component'; 




@NgModule({
  imports: [
    CommonModule,
    ContainerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    //ModalModule.forRoot(),
    AlertModule.forRoot(),
    PaginationModule.forRoot(),
    NgxEchartsModule,
  ],
  declarations: [ButtonComponent,NavigationComponent, SearchComponent
    , ToolsComponent, TableComponent, TabsComponent,
  ContainerComponent,LeftComponent,RightComponent,UserComponent, HeaderNavigationComponent, ChartsComponent, TableAnyComponent],
  providers:[UserinfoService]
})
export class ContainerModule { }
