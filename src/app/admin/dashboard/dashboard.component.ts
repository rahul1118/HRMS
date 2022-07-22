import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Availability } from './app.availability'; 
import { AdminService } from './admin.service';

@Component({
  selector: 'admin-hrms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    private _adminService: AdminService;
    public get adminService(): AdminService {
        return this._adminService;
    }
    public set adminService(value: AdminService) {
        this._adminService = value;
    }

availability: Availability = {
    boysStandardRooms: 0,  
    boysDeluxeRooms: 0,  
    
  };

  constructor(private router: Router) { 

    this.adminService.boysSuperDeluxRooms().subscribe((total: string | any[]) => { this.availability.boysSuperDeluxeRooms = total.length; });
    

  this.ngOnInit() ; void {
  }

}
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
Footer: any
}
