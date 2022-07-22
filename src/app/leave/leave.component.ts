import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
@Component({
    selector: 'app-leave-main',
    templateUrl: './leave-main.component.html',
  })

  export class LeaveMainComponent implements OnInit {
  
    public role: String | undefined;
    public leaveData: any;
    public pageSize = 10;
    public pageIndex = 0;
    public displayedColumns = ['sn', 'leaveType', 'description', 'leaveFrom', 'leaveTo', 'appliedOn', 'leaveStatus'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    constructor(
      private router: Router,
      public dialog: MatDialog
    ) { }ngOnInit(): void {
          throw new Error('Method not implemented.');
    }
  }
