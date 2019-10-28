import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CommonExpenses } from "../list-houses.component";

@Component({
    selector: 'dialog-house-common-expenses',
    templateUrl: './dialog-house-common-expenses.html'
})

export class DialogHouseCommonExpenses implements OnInit{
    constructor(
        public dialogRef: MatDialogRef<DialogHouseCommonExpenses>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}
    
        ngOnInit(){
            console.log(this.data);
        }
      onNoClick(): void {
        this.dialogRef.close();
      }
      
}