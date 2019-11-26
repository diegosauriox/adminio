import { Component, OnInit, Input} from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogImplementsCommonPlaces } from './DialogImplementsCommonPlaces/dialog-implements-common-places.component';
import { DialogEventsCommonPlaces } from './DialogEventsCommonPlaces/dialog-events-common-places.component';
import { HouseDetails } from '../list-houses/list-houses.component';
import { DialogAddCommonPlaceComponent } from './DialogAddCommonPlace/dialog-add-common-place.component';

@Component({
  selector: 'app-common-places',
  templateUrl: './common-places.component.html',
  styleUrls: ['./common-places.component.scss']
})
export class CommonPlacesComponent implements OnInit {

  public hayCommonPlaces = false;
  public commonPlaces: CommonPlace[] = commonPlaces;

  @Input() myValue: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    const dialogRef = this.dialog.open(DialogAddCommonPlaceComponent, {
      width: '600px',
      height: '500px',
      data: {
        
      }
    })
  }

  openImplements(id: number){
    const dialogRef = this.dialog.open(DialogImplementsCommonPlaces, {
      width: '400px',
      data: {
        name: commonPlaces[id-1].nombre, implements: commonPlaces[id-1].implementos
      }
    })
  }
  openCalendarEvents(id: number) {
    const dialogRef = this.dialog.open(DialogEventsCommonPlaces, {
      width:'700px',
      height: '500px',
      data: {
        events: commonPlaces[id-1].schedules, houses: ELEMENT_DATA
      }
    })
  }

  cambiar(target,indice){
    console.log(target.href)
    target.href = '#controller' + indice;
  }
}




export interface CommonPlace {
   id: number;
  nombre: string;
  imagen: String[];
  capacidadTotal: number;
  descripcion: string;
  implementos: Implemento[];
  schedules: Evento[];
}

export interface Implemento {
  id: number;
  nombre: string;
  cantidad: number;
}

export interface Evento{
  id: number;
  title: string;
  start: Date;
  end: Date;
  description: string;
  encargadoEvento: string;
  cobro: number;
}
const commonPlaces: CommonPlace[] = [
  {id: 1 ,
  nombre: 'Comedor',
  imagen: [
    'http://www.palmarena.com.mx/wp-content/uploads/1970/01/sala-comedor-vista-al-mar-condominio-tre-chic-icon-puerto-vallarta.jpg',
    'http://www.palmarena.com.mx/wp-content/uploads/1970/01/sala-vista-al-mar-condominio-tre-chic-icon-puerto-vallarta.jpg',
    'http://www.palmarena.com.mx/wp-content/uploads/1970/01/sala-comedor-balcon-condominio-tre-chic-icon-puerto-vallarta.jpg'
  ] ,
  capacidadTotal: 20,
  descripcion: 'Comedor muy tranquilo y relajado para disfrutar un almuerzo en familia y amigos',
  implementos: [
    {id: 1 , nombre: 'Sillas', cantidad: 20},
    {id: 2 , nombre: 'Mesas', cantidad: 3}
  ] , schedules: [
    {id: 1,
      title: 'Cumpleaño de cami',
      start: new Date('2019-10-10'),
      end: new Date( '2019-10-10'),
      description: 'El cumpleaño de mi hija, con invitados mi familia y amigos', 
      encargadoEvento: 'Juan Perez',
      cobro: 50000 }
  ] },
  {id: 2, nombre: 'sala de juegos',
  imagen: ['https://www.mobydecmuebles.com/wp-content/uploads/2018/10/sala-de-juegos-1.jpg',
            'https://interioresdecasasmodernas.com/wp-content/uploads/2018/04/1009-consejos-para-decorar-una-sala-de-juegos-para-adultos-en-casa-48867-1.jpg',
          'http://www.elsecretodelosduendes.es/images/favsliders/salajuegos/big_sala_juegos_1.jpg'] ,
  capacidadTotal: 40,
  descripcion: 'Sala de juegos para toda la familia, muy amplio y tranquilo para pasar un dia feliz',
  implementos: [
    {id: 3 , nombre: 'Mesas de ping-pong', cantidad: 10},
    {id: 4, nombre: 'Taca-tacas', cantidad: 5},
  ] , schedules: [
    {
      id: 1,
      title: 'Cumpleaño de cami',
      start: new Date('2019-10-10'),
      end: new Date('2019-10-10'),
      description: 'El cumpleaño de mi hija, con invitados mi familia y amigos',
      encargadoEvento: 'Juan Perez',
      cobro: 60000
    }
  ] }
];
const ELEMENT_DATA: HouseDetails[] = [
  {checked: false, position: 1, name: 'House 1', mtCuadrado: 12,
  commonExpenses: [
    {title: 'Luz', mount: 232},
    {title: 'Agua', mount: 8342} ],
    propietario: 'Gustavo'
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
      propietario: 'Martin'
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
