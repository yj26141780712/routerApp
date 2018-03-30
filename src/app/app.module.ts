import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CookieModule  } from 'ngx-cookie';
import { ModalModule,AlertModule,PaginationModule} from 'ngx-bootstrap';
import { HttpModule} from "@angular/http";
import { ForbiddenValidatorDirective } from './tool/directive/forbidden-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForbiddenValidatorDirective, //声明使用
  ],
  imports: [ //导入使用模块
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CookieModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    HttpModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: true } ),
  ],
  providers:[],//提供组件使用的服务
  bootstrap: [AppComponent]
})
export class AppModule { }
