import { NgModule } from '@angular/core';

import { EmployeeComponent } from './employee/employee.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:  '**', component: EmployeeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
