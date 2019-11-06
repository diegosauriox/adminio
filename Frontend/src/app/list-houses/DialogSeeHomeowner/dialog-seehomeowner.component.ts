import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-dialog-see-homeowner',
    templateUrl: 'dialog-seehomeowner.component.html'
})

export class DialogSeeHomeOwnerComponent {
  enabled: boolean = true;
    constructor(
        public dialogRef: MatDialogRef<DialogSeeHomeOwnerComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}

      ngOnInit(){
      }

      onNoClick(): void {
        this.dialogRef.close();
      }

      updatedEnabled(enabled) {
        if(enabled){
          return  false;
        }else {
          return true;
        }
      }
}
