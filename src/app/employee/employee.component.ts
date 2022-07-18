import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employee.models';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input()
  employee!: Employee;
  @Output() onRemoveEmployee = new EventEmitter<number>();
  @Output() onEditEmployee = new EventEmitter<number>();

  constructor() {
    this.employee = {
      firstname: '',
      lastname: '',
      birthdate: '',
      gender: '',
      address: '',
      contactno: 
      pancard: '',
      bloodgroup: '',
      emergencycontactname:'',
      emergencycontactno:,
      maritalstatus: '',
      hobbies: '',
      familydetails:'',
      instituename: '',
      degree: '',
      startdate:,
      enddate: ,
      companyname:'',
      designation: '',
      joiningdate:,
      revealingdate:
},
    }ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  }

  ngOnInit(): void {
    console.log(this.employee),
  }

  editEmployeeClicked() {
    this.onRemoveEmployee.emit(this.employee.id);
  }

  editEmployeeClicked(){
    this.onEditEmployee.emit(this.employee.id);
  }

function editEmployeeClicked() {
  throw new Error('Function not implemented.');
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

