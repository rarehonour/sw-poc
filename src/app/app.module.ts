import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RequestsWorker } from '../shared/request-worker.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('./sw-custom.js', { enabled: environment.production })
  ],
  providers: [RequestsWorker],
  bootstrap: [AppComponent]
})
export class AppModule { }
