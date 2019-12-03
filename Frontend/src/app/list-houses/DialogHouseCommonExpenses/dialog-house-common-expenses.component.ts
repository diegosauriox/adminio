import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CommonExpenses } from "../list-houses.component";
import { Router } from "@angular/router";
import { state } from "@angular/animations";

@Component({
    selector: 'dialog-house-common-expenses',
    templateUrl: './dialog-house-common-expenses.html'
})

export class DialogHouseCommonExpenses implements OnInit{
  public total:number = 0;
    constructor(
        public dialogRef: MatDialogRef<DialogHouseCommonExpenses>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public route: Router) {}
    
        ngOnInit() {
          for(let i =0; i<this.data.commonExpenses.length; i++){
            this.total += this.data.commonExpenses[i].mount;
          }
        }
      onNoClick(): void {
        this.dialogRef.close();
      }

      payTotal(){
        this.dialogRef.close();
        this.route.navigate(['payment'],{state: {'mount': this.total}});
      }
      payMount(mount){
        this.dialogRef.close();
        this.route.navigate(['payment'],{state: {'mount': mount}})
      }
}