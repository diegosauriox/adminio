import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-dialog-add-homeowner',
    templateUrl: 'dialog-add-homeowner.component.html'
})
export class DialogAddHomeOwnerComponent implements OnInit {
    @Input() editable: boolean ;
    @Input() enabled: boolean;
    constructor(
        public dialogRef: MatDialogRef<DialogAddHomeOwnerComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}

      ngOnInit(){
      }

      onNoClick(): void {
        this.dialogRef.close();
      }

      addHomeOwner() {
        console.log('fsdfsdf');
      }
}