import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { HouseDetails } from '../list-houses.component';
import { FormControl, Validators } from '@angular/forms';
import { DialogAddHomeOwnerComponent } from '../DialogAddHomeOwner/dialog-add-homeowner.component';

@Component({
    selector: 'app-dialog-add-house',
    templateUrl: './dialog-add-house.component.html'
})

export class DialogAddHouseComponent {

  title: string;
  subtitle: string;
  titleButton: string;

  properties: Property[] = [] ;
  ownerControl = new FormControl('', [Validators.required]);
    constructor(
        public dialogRef: MatDialogRef<DialogAddHouseComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialog) {
          this.title = data.title;
          this.subtitle = data.subtitle;
          this.titleButton = data.titleButton;
        }

      onNoClick(): void {
        this.dialogRef.close();
      }

      addProperty() {
        console.log(this.properties.length);
        const newProperty = {} as Property;
        newProperty.id = this.properties.length + 1;
        this.properties.push({
          id: newProperty.id,
          name: newProperty.name,
          valor: newProperty.valor,
        })
      }

      deleteProperty(id: number) {
        const properties: Property[] = [];
        let j = 0;
        for ( let i = 0; i < this.properties.length; i++) {
          if ( this.properties[i].id !== id) {
            j = j + 1;
            this.properties[i].id = j;
            properties.push(this.properties[i]);
          }
        }
        this.properties = properties;
      }
      isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    openAddHomeOwner(){
      const dialogRef = this.dialog.open(DialogAddHomeOwnerComponent, {
        data: {}
      })
    }
}

export interface Property {
  id: number;
  name: string;
  valor: string;
}
