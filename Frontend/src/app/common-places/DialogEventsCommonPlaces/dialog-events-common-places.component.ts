import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { AddEventDialog } from './AddEventComponent/add-event.component';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
@Component({
  selector: 'app-dialog-events-common-places',
  styleUrls: ['dialog-events-common-places.scss'],
  templateUrl: 'dialog-events-common-places.html'
})
export class DialogEventsCommonPlaces {

  options: OptionsInput;
  eventsModel: any;
  @ViewChild('fullcalendar', {
    static: true
  }) fullcalendar: FullCalendarComponent;



  selectedDate: any;

  constructor(
    public dialogRef: MatDialogRef<DialogEventsCommonPlaces>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.options = {
      editable: true,
      header: {
        left: 'prev',
        center: 'title',
        right: 'next'
      }, footer: {
        left: 'dayGridMonth',
        center: 'today',
        right: 'timeGridWeek,listWeek'
      },
      buttonIcons: {
        prev: 'fa-chevron-left',
        next: 'fa-chevron-right'
      },
      plugins: [dayGridPlugin, interactionPlugin, bootstrapPlugin, timeGridPlugin, listPlugin],
      themeSystem: 'bootstrap',
      defaultView: 'dayGridMonth',
      events: 'https://fullcalendar.io/demo-events.json'
    };
  }
  eventClick(model) {
    console.log('eventClick')
    console.log(model);
  }
  eventDragStop(model) {
    console.log('eventDragStop')
    console.log(model);
  }
  dateClick(model) {
    const arrFecha = model.dateStr.split('-');
    const dialogRef = this.dialog.open(AddEventDialog, {
      width:'600px',
      height: '500px',
      data: {
        dateMonth: arrFecha[1], dateDay: arrFecha[2], dateYear: arrFecha[0] , houses: this.data.houses
      }
    })
  }

  updateEvents() {
    this.eventsModel = [{
      title: 'Comer Event',
      start: this.yearMonth ,
      end: this.yearMonth
    }];
  }

  addEvent(){
    const date = new Date();
    const dialogRef = this.dialog.open(AddEventDialog, {
      width:'600px',
      height: '500px',
      data: {
        dateMonth: date.getUTCMonth() , dateDay: date.getUTCDay(), dateYear: date.getUTCFullYear(), houses: this.data.houses
      }
    });
  }
  get yearMonth(): string {
    const dateObj = new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }

}
