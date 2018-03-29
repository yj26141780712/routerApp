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
import { HighlightDirective } from './tool/directive/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HighlightDirective,
  ],
  imports: [
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
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
