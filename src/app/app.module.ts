import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './pages/upload/upload.component';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import { DataareaComponent } from './component/dataarea/dataarea.component';
import {RecordComponent} from './component/record/record.component';
import { ModuleComponent } from './component/module/module.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    LoginComponent,
    HomeComponent,
    DataareaComponent,
    RecordComponent,
    RecordComponent,
    ModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    PerfectScrollbarModule,
    MatSidenavModule,
    FlexModule,
    ExtendedModule
  ],
  providers: [ {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: {
      suppressScrollX: true,
    },
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
