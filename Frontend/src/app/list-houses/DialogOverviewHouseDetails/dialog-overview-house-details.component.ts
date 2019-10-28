import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { HouseDetails } from "../list-houses.component";

@Component({
    selector: 'dialog-overview-house-details',
    templateUrl: './dialog-overview-house-details.html',
  })
  export class DialogOverviewHouseDetails {
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewHouseDetails>,
      @Inject(MAT_DIALOG_DATA) public data: HouseDetails) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }