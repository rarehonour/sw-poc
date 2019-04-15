import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


import { employee } from './employee.model';

@Injectable({
  providedIn : 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {
  }

  getEmployees() {
    return this.http.get<employee[]>('http://dummy.restapiexample.com/api/v1/employees')
  }

}


