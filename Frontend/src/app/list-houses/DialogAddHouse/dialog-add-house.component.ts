import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HouseDetails } from '../list-houses.component';

@Component({
    selector: 'app-dialog-add-house',
    templateUrl: './dialog-add-house.component.html'
})

export class DialogAddHouseComponent {

  properties: Property[] = [] ;
    constructor(
        public dialogRef: MatDialogRef<DialogAddHouseComponent>,
        @Inject(MAT_DIALOG_DATA) public data: HouseDetails) {}

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
}

export interface Property {
  id: number;
  name: string;
  valor: string;
}
