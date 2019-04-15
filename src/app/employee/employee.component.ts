import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { employee } from './employee.model';
import { EmployeeService } from './employee.service';
import { RequestsWorker } from '../../shared/request-worker.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeComponent {
  employees;


  constructor(
    private requestsWorker: RequestsWorker ) {
    /*employeeService.getEmployees().subscribe(response => {
      console.log(response)
      this.employees = response;
    });*/
    requestsWorker.send('sendng a random msg')
      .then((response) => {
        console.log("response -->>> ",response)
      })
  }




}
