import { ContainerComponent } from './container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { ContainerRoutingModule } from './container-routing.module';
import { ButtonComponent } from './button/button.component';
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
import { TableAnyComponent } from './table-any/table-any.component'; 
import { KeysPipe } from '../tool/pipe/keys.pipe';
import { TableShowComponent } from './table-show/table-show.component';
import { MenuLiComponent } from './menu-li/menu-li.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxTabletestComponent } from './ngx-tabletest/ngx-tabletest.component';
import { UploadDemoComponent } from './upload-demo/upload-demo.component';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpComponent } from './http/http.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { MenuTreeComponent } from './menu-tree/menu-tree.component';
import { LeftTreeTestComponent } from './left-tree-test/left-tree-test.component';




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
    NgxDatatableModule,
    FileUploadModule ,
  ],
  declarations: [ButtonComponent, SearchComponent, ToolsComponent, TableComponent
    , TabsComponent,ContainerComponent,LeftComponent,RightComponent
    ,UserComponent, HeaderNavigationComponent, ChartsComponent, TableAnyComponent
    ,KeysPipe, TableShowComponent, MenuLiComponent, NgxTabletestComponent, UploadDemoComponent, HttpComponent, TreeViewComponent, MenuTreeComponent, LeftTreeTestComponent],
  providers:[UserinfoService]
})
export class ContainerModule { }
