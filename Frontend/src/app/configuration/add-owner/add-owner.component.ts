import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.scss']
})

export class AddOwnerComponent implements OnInit {

  constructor(  
    public dialogRef: MatDialogRef<AddOwnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {} 
  
    public properties:any[]=["House1","House2","House3","House4"];
  ngOnInit(
  ) {
  
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
