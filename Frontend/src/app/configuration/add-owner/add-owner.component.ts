import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html'
})

export class AddOwnerComponent implements OnInit {

  constructor(  
    public dialogRef: MatDialogRef<AddOwnerComponent>) {} 

  ngOnInit(
  ) {
  
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
