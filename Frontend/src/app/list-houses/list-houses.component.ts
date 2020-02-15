import { Component, OnInit, ViewChild, Inject, Input, OnChanges } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {MatDialog} from '@angular/material/dialog';
import { DialogOverviewHouseDetails } from './DialogOverviewHouseDetails/dialog-overview-house-details.component';
import { DialogHouseCommonExpenses } from './DialogHouseCommonExpenses/dialog-house-common-expenses.component';
import { DialogAddHouseComponent } from './DialogAddHouse/dialog-add-house.component';
import { DialogSeeHomeOwnerComponent } from './DialogSeeHomeowner/dialog-seehomeowner.component';
@Component({
  selector: 'app-list-houses',
  templateUrl: './list-houses.component.html',
  styleUrls: ['./list-houses.component.scss']
})
export class ListHousesComponent implements OnInit, OnChanges {

  displayedColumns: string[] = ['position', 'name', 'action1'];
  dataSource = new MatTableDataSource<HouseDetails>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  fabButtons: any;
  @Input() myValue: string;
  visibleDelete: boolean = false;
  masterChecked = false;
  checkedSelect = false;
  deletesHouses: HouseDetails[] = [];
  indeterCheckbox1 = false;
  constructor(public dialog: MatDialog){

  }
  ngOnInit() {
    this.fabButtons = [
      {
        name: 'Add House',
        icon: 'add',
        action: function(dialog: MatDialog): any {
          const dialogRef = dialog.open(DialogAddHouseComponent, {
            width: '600px',
            height: '445px',
            data: { title: 'Add House', subtitle: 'Formulario de ingreso', titleButton: 'Add', owners: ELEMENT_DATA}
          });
          dialogRef.afterClosed().subscribe(result =>{
            console.log('Ha cerrado Dialog Add House')
          });
        }
      },
      {
        name: 'Eliminar Houses',
        icon: 'delete',
        action: function(visibleDelete: boolean) {
          switch (visibleDelete) {
            case true:
              return false;
            case false:
              return true;
            default:
              return undefined;
          }
        }
      }
    ];
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: HouseDetails, filter: string) => { return data.name.indexOf(filter) != -1; };
  }

  ngOnChanges() {
  }


  cancelDelete(algo,masterChecked){
    this.allCheckboxPage(masterChecked);
  }

  deleteHouses(){
    let newELEMENT_DATA = [];
    for (let i = 0;  i < ELEMENT_DATA.length; i++) {
        for (let j = 0; j  < this.deletesHouses.length; j++) {
          if(ELEMENT_DATA[i].position === this.deletesHouses[j].position ){
            return;
          }else if(ELEMENT_DATA[i].position !== this.deletesHouses[j].position && j === ELEMENT_DATA.length ) {
            newELEMENT_DATA.push(ELEMENT_DATA[i])
          }
        }
    }
    console.log(newELEMENT_DATA);
    this.dataSource = new MatTableDataSource<HouseDetails>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: HouseDetails, filter: string) => { return data.name.indexOf(filter) != -1; };
  }

  allCheckboxPage(checked){
    if(!this.indeterCheckbox1) {
      for (let house of ELEMENT_DATA) {
        house.checked = checked;
      }
      if (checked) {
        this.deletesHouses = ELEMENT_DATA;
      } else {
        this.deletesHouses = [];
      }
      console.log(this.deletesHouses);
      this.dataSource = new MatTableDataSource<HouseDetails>(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data: HouseDetails, filter: string) => { return data.name.indexOf(filter) != -1; };
    }else {
      this.indeterCheckbox1 = false;
    }
  }

  addHouseDelete(){
    if(!this.indeterCheckbox1){
      this.indeterCheckbox1 = true;
    }
    this.deletesHouses = [];
    for (let house of ELEMENT_DATA) {
      if (house.checked) {
        this.deletesHouses.push(house);
      }
    }
    console.log(this.deletesHouses);
  }

  applyFilter(myValue){
    myValue = myValue.trim();
    //myValue = myValue.toLowerCase();
    this.dataSource.filter = myValue;
  }

  clickShowDetailsHouse(position: number){
    const dialogRef = this.dialog.open(DialogOverviewHouseDetails, {
      width: '250px',
      data: {position: ELEMENT_DATA[position-1].position, name:  ELEMENT_DATA[position-1].name, mtCuadrado:  ELEMENT_DATA[position-1].mtCuadrado}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    console.log(position);
  }

  clickShowCommonExpensesHouse(position: number){
    const dialogRef = this.dialog.open(DialogHouseCommonExpenses, {
      width: '600px',
      data: {name: ELEMENT_DATA[position-1].name,commonExpenses: ELEMENT_DATA[position-1].commonExpenses}
    });
  }
  clickShowHomeOwner(propietario){
    if (propietario) {
      const dialogRef = this.dialog.open(DialogSeeHomeOwnerComponent, {
        data: {}
      })
    } else {
      console.error('No hay propietario');
    }
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
  };

}


export interface HouseDetails {
  checked?: boolean;
  position: number;
  name: string;
  mtCuadrado: number;
  commonExpenses: CommonExpenses[];
  propietario ?: string;
}

export interface CommonExpenses {
  title: string;
  mount: number;
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

