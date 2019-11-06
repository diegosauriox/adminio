import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { HouseDetails } from "../list-houses.component";
import { DialogAddHouseComponent } from "../DialogAddHouse/dialog-add-house.component";

@Component({
    selector: 'dialog-overview-house-details',
    templateUrl: './dialog-overview-house-details.html',
  })
  export class DialogOverviewHouseDetails {
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewHouseDetails>,
      @Inject(MAT_DIALOG_DATA) public data: HouseDetails,
      public dialog: MatDialog) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    openUpdateHouse() {
      const dialogRef = this.dialog.open(DialogAddHouseComponent,{
        width: '600px',
        height: '445px',
        data: { title: 'Update House', subtitle: 'Actualice los datos de la casa', titleButton: 'Update', owners: ELEMENT_DATA}
      });
    }
  
  }
  const ELEMENT_DATA: HouseDetails[] = [
    {checked: false, position: 1, name: 'House 1', mtCuadrado: 12,
    commonExpenses: [
      {title: 'Luz', mount: 232},
      {title: 'Agua', mount: 8342} ],
      propietario: 'Gabriela'
  },
    {checked: false, position: 2, name: 'House 2', mtCuadrado: 22,
    commonExpenses: [
      {title: 'Luz', mount: 234},
      {title: 'Agua', mount: 6342} ],
      propietario: 'Gabriela'
    },
    {checked: false, position: 3, name: 'House 3', mtCuadrado: 12,
      commonExpenses: [
        {title: 'Luz', mount: 2343},
        {title: 'Agua', mount: 5342} ],
        propietario: 'Gabriela'
      },
    {checked: false, position: 4, name: 'House 4', mtCuadrado: 12,
      commonExpenses: [
        {title: 'Luz', mount: 2343},
        {title: 'Agua', mount: 5342} ],
        propietario: 'Gustavo'
      },
    {checked: false,  position: 5, name: 'House 5', mtCuadrado: 23,
      commonExpenses: [
        {title: 'Luz', mount: 22343}
        , {title: 'Agua', mount: 6742} ],
        propietario: 'Gustavo'
      },
    {checked: false, position: 6, name: 'House 6', mtCuadrado: 12,
      commonExpenses: [
        {title: 'Luz', mount: 2334},
        {title: 'Agua', mount: 2742} ],
        propietario: 'Gustavo'
      },
    {checked: false, position: 7, name: 'House 7', mtCuadrado: 14,
      commonExpenses: [
        {title: 'Luz', mount: 234},
        {title: 'Agua', mount: 2942} ],
        propietario: 'Gustavo'}
          ,
    {checked: false, position: 8, name: 'House 8', mtCuadrado: 12,
      commonExpenses: [
        {title: 'Luz', mount: 2343},
        {title: 'Agua', mount: 2340} ],
        propietario: 'Gustavo'
      },
    {checked: false, position: 9, name: 'House 9' , mtCuadrado: 17,
      commonExpenses: [
        {title: 'Luz', mount: 2343},
        {title: 'Agua', mount: 2042} ],
        propietario: 'Gustavo'
      },
    {checked: false, position: 10, name: 'House 10', mtCuadrado: 18,
      commonExpenses: [
        {title: 'Luz', mount: 2343},
        {title: 'Agua', mount: 2342} ],
        propietario: 'Gustavo'
      },
    {checked: false, position: 11, name: 'House 11', mtCuadrado: 19,
      commonExpenses: [
        {title: 'Luz', mount: 2233},
        {title: 'Agua', mount: 1352} ],
        propietario: 'Gustavo'
      },
    {checked: false, position: 12, name: 'House 12', mtCuadrado: 20,
      commonExpenses: [
        {title: 'Luz', mount: 2463},
        {title: 'Agua', mount: 2349} ],
        propietario: 'Gustavo'
      },
    {checked: false, position: 13, name: 'House 13', mtCuadrado: 17,
      commonExpenses: [
        {title: 'Luz', mount: 2563},
        {title: 'Agua', mount: 2312} ],
        propietario: 'Gustavo'
      },
    {checked: false, position: 14, name: 'House 14', mtCuadrado: 12,
      commonExpenses: [
        {title: 'Luz', mount: 2453},
        {title: 'Agua', mount: 2372} ],
        propietario: 'Gustavo'
      },
    {checked: false, position: 15, name: 'House 15', mtCuadrado: 12,
      commonExpenses: [
        {title: 'Luz', mount: 2783},
        {title: 'Agua', mount: 2382} ],
        propietario: 'Gustavo'
      },
    {checked: false, position: 16, name: 'House 16', mtCuadrado: 32,
      commonExpenses: [
        {title: 'Luz', mount: 2563},
        {title: 'Agua', mount: 2302} ],
        propietario: 'Gustavo'
      },
    {checked: false, position: 17, name: 'House 17', mtCuadrado: 12,
      commonExpenses: [
        {title: 'Luz', mount: 2389},
        {title: 'Agua', mount: 2392} ],
        propietario: 'Gustavo'
      },
    {checked: false, position: 18, name: 'House 18', mtCuadrado: 12,
      commonExpenses: [
        {title: 'Luz', mount: 2334},
        {title: 'Agua', mount: 2342} ],
        propietario: 'Gustavo'
      },
    {checked: false, position: 19, name: 'House 19', mtCuadrado: 14,
      commonExpenses: [
        {title: 'Luz', mount: 2463},
        {title: 'Agua', mount: 2642} ],
        propietario: 'Gustavo'
      },
    {checked: false, position: 20, name: 'House 20', mtCuadrado: 12,
      commonExpenses: [
        {title: 'Luz', mount: 2483},
        {title: 'Agua', mount: 1342} ],
        propietario: 'Gustavo'
      }
  ];