import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddOwnerComponent } from './add-owner/add-owner.component';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  public days: number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  
  public forms: any[]=["Por metro cuadrado","Equitativo"];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openAddOwner(){
    const dialogRef = this.dialog.open(AddOwnerComponent, {
      width: '400px',
      data: {
      }
    })
  }

}
