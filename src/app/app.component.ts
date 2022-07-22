import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from './service/employee.service';
//import { Employee } from './models/employee.model';
import { get } from 'mongoose';
import { Employee } from './models/employee.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
    employees: any;
    employeeService: any;
    buttontemp: any;
    BirthDay: any;
    LastName: any;
    FirstName: any;
    Gender: any;
    Contact: any;
    Address: any;
    PanCard: any;
    BloodGroup: any;
    EmergencyContact: any;
    EmergencyContactName: any;
    MaritalStatus: any;
    FamilyDetails: any;
    Hobbies: any;
    employeesToDisplay: any;
    ngAfterViewInit(): void {
        throw new Error('Method not implemented.');
    }
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('addEmployeeButton') addEmployeeButton: any;
  title = 'EmployeeCRUD';

  employeeForm: FormGroup | undefined;
    fb: any;

  //employees: Employee[];
  employeesToDisplay: Employee[];
  educationOptions = [
    '10th pass',
    '12th pass'
    'diploma',
    'graduate',
    'post graduate',
    'PhD',
  ];
//   FirstName: any;
//   LastName: any;
//   Gender: any;
//   BirthDay: any;
//   Contact: number | undefined;
//   Pan: string | undefined;
//   Emergency: string | undefined;
//   Marital: string | undefined;
//   Hobbies: any;
//   Family: string | undefined;
//   Address: any;
//   Blood: any;
//   Education: any;
//   Degree: any;
//   StartDate: any;
//   EndDate: any;
//   InstitueName: any;
//   buttontemp: any;
//   EmergencyContact: number | undefined;
//   PanCard: any;
//   BloodGroup: any;
//   EmergencyContactName: any;
//   MaritalStatus: any;
//   FamilyDetails: any;

  constructor(
    fb: FormBuilder  ) {
    this.employeeForm = fb.group({});
    this.employees = [];
    this.employeesToDisplay = this.employees;
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      birthday: this.fb.control(''),
      gender: this.fb.control(''),
      education: this.fb.control('default'),
      company: this.fb.control(''),
      jobExperience: this.fb.control(''),
      salary: this.fb.control(''),
    });

    this.employeeService.getEmployees().subscribe((res: any) => {
      for (let emp of res) {
        this.employees.unshift(emp);
      }
      this.employeesToDisplay = this.employees;
    });
  }

  ngAfterViewInit(): void {
    this.buttontemp.nativeElement.click();
  }

  addEmployee() {
    let employee: Employee = {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      birthdate: this.BirthDay.value,
      gender: this.Gender.value,
      address: this.Address.value,
      contactno: this.Contact.value,
      pancard: this.PanCard.value,
      bloodgroup: this.BloodGroup.value,
      emergencycontactname: this.EmergencyContactName.value,
      emergencycontactno: this.EmergencyContact.value,
      maritalstatus: this.MaritalStatus.value,
      hobbies: this.Hobbies.value,
      familydetails: this.FamilyDetails.value,
      education: undefined,
      institutename: function (institutename: any): void {
        throw new Error('Function not implemented.');
      },
      instituename: '',
      degree: '',
      startdate: 0,
      enddate: 0,
      companyname: '',
      designation: '',
      joiningdate: 0,
      revealingdate: 0
    };
    this.employeeService.postEmployee(employee).subscribe((res: any) => {
      this.employees.unshift(res);
      this.clearForm();
    });
  }
  clearForm() {
    throw new Error('Method not implemented.');
  }

  removeEmployee(event: any) {
    this.employees.forEach((val: { id: number; }, index: any) => {
      if (val.id === parseInt(event)) {
        this.employeeService.deleteEmployee(event).subscribe((res: any) => {
          this.employees.splice(index, 1);
        });
      }
    });
  }

  editEmployee(event: any) {
    this.employees.forEach((val: { id: any; }) => {
      if (val.id === event) {
        this.setForm(val);
      }
    });
    this.removeEmployee(event);
    this.addEmployeeButton.nativeElement.click();
  }
    setForm(val: any) {
        throw new Error('Method not implemented.');
    }

//   setForm(emp: Employee) {
//     this.FirstName.setValue(emp.firstname);
//     this.LastName.setValue(emp.lastname);
//     this.BirthDay.setValue(emp.birthdate);
//     this.Gender.setValue(emp.gender);
//     this.Address.setValue(emp.address);
//     this.Contact No.setValue(emp.contactno);
//     this.Pan Card.setValue(emp.pancard);
//     this.Blood Group.setValue(emp.bloodgroup);
//     this.EmergencyContactName.setValue(emp.emergencycontactname);
//     this.EmergencyContact.setValue(emp.emergencycontact);
//     this.MaritalStatus.setValue(emp.maritalstatus);
//     this.Hobbies.setValue(emp.hobbies);
//     this.Family Details.setValue(emp.familydetails);

    // let educationIndex = 0;
    // this.educationOptions.forEach((val: any, index: number) => {
    //   if (val === emp.education) educationIndex = index;
    // });
    // this.Education.setValue(educationIndex);

//     this.InstitueName.setValue(emp.institutename);
//     this.Degree.setValue(emp.degree);
//     this.StartDate.setValue(emp.startdate);
//     this.EndDate.setValue(emp.enddate);
//     this.fileInput.nativeElement.value = '';
//   }

//   let professionalIndex = 0;
//     this.educationOptions.forEach((val: any, index: any) => {
//       if (val === emp.education) educationIndex = index;
//     });
//     this.Education.setValue(educationIndex);

//     this.CompanyName.setValue(emp.companname);
//     this.Designation.setValue(emp.designation);
//     this.JoiningDate.setValue(emp.joiningdate);
//     this.RevealingDate.setValue(emp.revealingdate);
//     this.fileInput.nativeElement.value = '';
//   }

//   searchEmployees(event: any) {
//     let filteredEmployees: Employee[] = [];

//     if (event === '') {
//       this.employeesToDisplay = this.employees;
//     } else {
//       filteredEmployees = this.employees.filter((val, _index) => {
//         let targetKey = val.firstname.toLowerCase() + '' + val.lastname.toLowerCase();
//         let searchKey = event.toLowerCase();
//         return targetKey.includes(searchKey);
//       });
//       this.employeesToDisplay = filteredEmployees;
//     }
//   }

//   clearForm() {
//     this.FirstName.setValue('');
//     this.LastName.setValue('');
//     this.BirthDay.setValue('');
//     this.Gender.setValue('');
//     this.Address.setValue('');
//     this.ContactNo.setValue('');
//     this.PanCard.setValue('');
//     this.BloodGroup.setValue('');
//     this.EmergencyContactName.setValue('');
//     this.EmergencyContactNo.setValue('');
//     this.MaritalStatus.setValue('');
//     this.Hobbies.setValue('');
//     this.FamilyDetails.setValue('');
//     this.InstitueName.setValue('');
//     this.Degree.setValue('');
//     this.StartDate.setValue('');
//     this.EndDate.setValue('');
//     this.CompanyName.setValue('');
//     this.Designation.setValue('');
//     this.JoiningDate.setValue('');
//     this.RevealingDate.setValue('');
//   }

//   public get FirstName(): FormControl {
//     return this.employeeForm.get('firstname') as FormControl;
//   }
//   public get LastName(): FormControl {
//     return this.employeeForm.get('lastname') as FormControl;
//   }
//   public get BirthDay(): FormControl {
//     return this.employeeForm.get('birthday') as FormControl;
//   }
//   public get Gender(): FormControl {
//     return this.employeeForm.get('gender') as FormControl;
//   }
//   public get Address(): FormControl {
//     return this.employeeForm.get('address') as FormControl;
//   }
//   public get ContactNo(): FormControl {
//     return this.employeeForm.get('contactno') as FormControl;
//   }
//   public get PanCard(): FormControl {
//     return this.employeeForm.get('pancard') as FormControl;
//   }
//   public get BloodGroup(): FormControl {
//     return this.employeeForm.get('bloodgroup') as FormControl;
//   }
//   public get EmergencyContactName(): FormControl {
//     return this.employeeForm.get('emergencycontactname') as FormControl;
//   }
//   public get EmergencyContactNo(): FormControl {
//     return this.employeeForm.get('emergencycontactno') as FormControl;
//   }
//   public get MaritalStatus(): FormControl {
//     return this.employeeForm.get('maritalstatus') as FormControl;
//   }
//   public get Hobbies(): FormControl {
//     return this.employeeForm.get('hobbies') as FormControl;
//   }
//   public get FamilyDetails(): FormControl {
//     return this.employeeForm.get('familydetails') as FormControl;
//   }
//   public get InstitueName(): FormControl {
//     return this.employeeForm.get('instituename') as FormControl;
//   }
//   public get Degree(): FormControl {
//     return this.employeeForm.get('degree') as FormControl;
//   }
//   public get StartDate(): FormControl {
//     return this.employeeForm.get('startdate') as FormControl;
//   }
//   public get EndDate(): FormControl {
//     return this.employeeForm.get('enddate') as FormControl;
//   }
//   public get CompanyName(): FormControl {
//     return this.employeeForm.get('comapnyname') as FormControl;
//   }
//   public get Designation(): FormControl {
//     return this.employeeForm.get('designation') as FormControl;
//   }
//   public get JoiningDate(): FormControl {
//     return this.employeeForm.get('joiningdate') as FormControl;
//   }
//   public get RevealingDate(): FormControl {
//     return this.employeeForm.get('revealinggdate') as FormControl;
//   }

function CompanyName() {
  throw new Error('Function not implemented.');
}
function Address() {
  throw new Error('Function not implemented.');
}

function FamilyDetails() {
  throw new Error('Function not implemented.');
}

function EndDate() {
  throw new Error('Function not implemented.');
}
  }
