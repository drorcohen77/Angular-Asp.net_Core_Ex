import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CompanyAComponent } from './Components/company-a/company-a.component';
import { CompanyBComponent } from './Components/company-b/company-b.component';
import { CompanyCComponent } from './Components/company-c/company-c.component';
import { HomeComponent } from './Components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpVariables } from './Core/Variables/uri-varaibles';
import { MainInterceptorService } from './Core/Services/main-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CompanyAComponent,
    CompanyBComponent,
    CompanyCComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MainInterceptorService, multi: true},
    HttpVariables 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
