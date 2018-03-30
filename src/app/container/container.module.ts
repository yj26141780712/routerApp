import { ContainerComponent } from './container.component';
import { NgModule, Optional, SkipSelf } from '@angular/core';
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
import { NgModelComponent } from './ng-model/ng-model.component';
import { TestComponent } from './test/test.component';
import { EmitServiceService } from '../tool/service/emit-service.service';
import { DynamicComponent } from './dynamic/dynamic.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';
import { DynamicDirective } from '../tool/directive/dynamic.directive';
import { DynamicService } from '../tool/service/dynamic.service';
import { DerectiveListComponent } from './derective-list/derective-list.component';
import { HighlightDirective } from '../tool/directive/highlight.directive';
import { FormListComponent } from './form-list/form-list.component';
import { UserFromComponent } from './user/user-from/user-from.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { FromReactiveComponent } from './from-reactive/from-reactive.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';
import { FormDynamicQuestionComponent } from './form-dynamic-question/form-dynamic-question.component';




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
    ,KeysPipe, TableShowComponent, MenuLiComponent, NgxTabletestComponent, UploadDemoComponent
    , HttpComponent, TreeViewComponent, MenuTreeComponent, LeftTreeTestComponent, NgModelComponent
    , TestComponent, DynamicComponent, DynamicDirective, Component1Component, Component2Component
    , Component3Component, DynamicListComponent, DerectiveListComponent, HighlightDirective, FormListComponent, UserFromComponent, FormSubmitComponent, FromReactiveComponent, FormTemplateComponent, FormDynamicComponent, FormDynamicQuestionComponent],
  providers:[UserinfoService,EmitServiceService,DynamicService],
  entryComponents: [ Component1Component, Component2Component,Component3Component,UserFromComponent],
})
export class ContainerModule {
    constructor (@Optional() @SkipSelf() parentModule: ContainerModule) {
      if (parentModule) {
        throw new Error(
          'ContainerModule is already loaded. Import it in the AppModule only');
      }
    }
}
