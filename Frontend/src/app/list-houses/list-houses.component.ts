import { Component, OnInit, ViewChild, Inject, Input, OnChanges } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewHouseDetails } from './DialogOverviewHouseDetails/dialog-overview-house-details.component';
import { DialogHouseCommonExpenses } from './DialogHouseCommonExpenses/dialog-house-common-expenses.component';
import { DialogAddHouseComponent } from './DialogAddHouse/dialog-add-house.component';
@Component({
  selector: 'app-list-houses',
  templateUrl: './list-houses.component.html',
  styleUrls: ['./list-houses.component.scss']
})
export class ListHousesComponent implements OnInit, OnChanges {

  displayedColumns: string[] = ['position', 'name', 'action1', 'action2'];
  dataSource = new MatTableDataSource<HouseDetails>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  fabButtons: any;
  @Input() myValue: string;
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
            data: {}
          });
          return 'hola se puede retornar';
        }
      },
      {
        name: 'View HeadLine',
        icon: 'view_headline',
        action: function() {
          console.log('view_headline');
        },
        class: 'btn-warning'
      },
      {
        name: 'Room',
        icon: 'room',
        action: function() {
          console.log('room');
        },
        class: 'btn-success'
      },
      {
        name: 'Outline',
        icon: 'lightbulb_outline',
        action: function() {
          console.log('lightbulb_outline');
        },
        class: 'btn-default'
      },
      {
        name: 'Lock',
        icon: 'lock',
        action: function() {
          console.log('lock');
        },
        class: 'btn-info'
      }
    ];
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: HouseDetails, filter: string) => { return data.name.indexOf(filter) != -1; };
  }

  ngOnChanges() {
  }

  clickAddHouse() {
  }

  applyFilter(myValue){
    myValue = myValue.trim();
    //myValue = myValue.toLowerCase();
    this.dataSource.filter = myValue;
  }

  clickShowDetailsHouse(position: number){
    const dialogRef = this.dialog.open(DialogOverviewHouseDetails, {
      width:'250px',
      data: {position: ELEMENT_DATA[position-1].position, name:  ELEMENT_DATA[position-1].name, mtCuadrado:  ELEMENT_DATA[position-1].mtCuadrado}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    console.log(position);
  }

  clickShowCommonExpensesHouse(position: number){
    const dialogRef = this.dialog.open(DialogHouseCommonExpenses, {
      width: '300px',
      data: {name: ELEMENT_DATA[position-1].name,commonExpenses: ELEMENT_DATA[position-1].commonExpenses}
    });
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
  };

}


export interface HouseDetails {
  position: number;
  name: string;
  mtCuadrado: number;
  commonExpenses: CommonExpenses[];
}

export interface CommonExpenses {
  title: string;
  mount: number;
}

const ELEMENT_DATA: HouseDetails[] = [
  {position: 1, name: 'House 1', mtCuadrado: 12, commonExpenses: [{title: 'Luz', mount: 232},{title: 'Agua', mount: 8342} ]},
  {position: 2, name: 'House 2', mtCuadrado: 22, commonExpenses: [{title: 'Luz', mount: 234},{title: 'Agua', mount: 6342} ]},
  {position: 3, name: 'House 3', mtCuadrado: 12, commonExpenses: [{title: 'Luz', mount: 2343},{title: 'Agua', mount: 5342} ]},
  {position: 4, name: 'House 4', mtCuadrado: 12, commonExpenses: [{title: 'Luz', mount: 2343},{title: 'Agua', mount: 5342} ]},
  {position: 5, name: 'House 5', mtCuadrado: 23, commonExpenses: [{title: 'Luz', mount: 22343},{title: 'Agua', mount: 6742} ]},
  {position: 6, name: 'House 6', mtCuadrado: 12, commonExpenses: [{title: 'Luz', mount: 2334},{title: 'Agua', mount: 2742} ]},
  {position: 7, name: 'House 7', mtCuadrado: 14, commonExpenses: [{title: 'Luz', mount: 234},{title: 'Agua', mount: 2942} ]},
  {position: 8, name: 'House 8', mtCuadrado: 12, commonExpenses: [{title: 'Luz', mount: 2343},{title: 'Agua', mount: 2340} ]},
  {position: 9, name: 'House 9' , mtCuadrado: 17, commonExpenses: [{title: 'Luz', mount: 2343},{title: 'Agua', mount: 2042} ]},
  {position: 10, name: 'House 10', mtCuadrado: 18, commonExpenses: [{title: 'Luz', mount: 2343},{title: 'Agua', mount: 2342} ]},
  {position: 11, name: 'House 11', mtCuadrado: 19, commonExpenses: [{title: 'Luz', mount: 2233},{title: 'Agua', mount: 1352} ]},
  {position: 12, name: 'House 12', mtCuadrado: 20, commonExpenses: [{title: 'Luz', mount: 2463},{title: 'Agua', mount: 2349} ]},
  {position: 13, name: 'House 13', mtCuadrado: 17, commonExpenses: [{title: 'Luz', mount: 2563},{title: 'Agua', mount: 2312} ]},
  {position: 14, name: 'House 14', mtCuadrado: 12, commonExpenses: [{title: 'Luz', mount: 2453},{title: 'Agua', mount: 2372} ]},
  {position: 15, name: 'House 15', mtCuadrado: 12, commonExpenses: [{title: 'Luz', mount: 2783},{title: 'Agua', mount: 2382} ]},
  {position: 16, name: 'House 16', mtCuadrado: 32, commonExpenses: [{title: 'Luz', mount: 2563},{title: 'Agua', mount: 2302} ]},
  {position: 17, name: 'House 17', mtCuadrado: 12, commonExpenses: [{title: 'Luz', mount: 2389},{title: 'Agua', mount: 2392} ]},
  {position: 18, name: 'House 18', mtCuadrado: 12, commonExpenses: [{title: 'Luz', mount: 2334},{title: 'Agua', mount: 2342} ]},
  {position: 19, name: 'House 19', mtCuadrado: 14, commonExpenses: [{title: 'Luz', mount: 2463},{title: 'Agua', mount: 2642} ]},
  {position: 20, name: 'House 20', mtCuadrado: 12, commonExpenses: [{title: 'Luz', mount: 2483},{title: 'Agua', mount: 1342} ]}
];
 
