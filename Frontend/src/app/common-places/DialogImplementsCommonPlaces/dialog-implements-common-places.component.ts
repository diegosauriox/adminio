import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
    selector: 'dialog-implements-common-places',
    templateUrl: './dialog-implements-common-places.html'
})

export class DialogImplementsCommonPlaces implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<DialogImplementsCommonPlaces>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}
    
        ngOnInit(){
            console.log(this.data);
        }
      onNoClick(): void {
        this.dialogRef.close();
      }
}