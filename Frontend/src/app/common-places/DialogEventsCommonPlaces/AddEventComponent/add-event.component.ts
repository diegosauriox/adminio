import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, NgForm } from '@angular/forms';
import { Evento } from '../../../common-places/common-places.component';
import { OwlDateTimeComponent } from 'ng-pick-datetime';
import { Moment } from 'moment';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-add-event',
  templateUrl: 'add-event.component.html'
})
export class AddEventDialog {
  public newEvent: Evento = {
    title: '',
    start: new Date(),
    end: new Date(), 
    description: null,
    encargadoEvento: null
  } as Evento;
  @ViewChild('form', { static: true }) form: NgForm;
  @ViewChild('date_range_component', { static: true }) date_range_component: OwlDateTimeComponent<AddEventDialog>;
  public selectedMoments: Moment[] = [
    moment('2019-03-11T08:00:00+11:00').tz('Australia/Sydney'),
    moment('2019-03-11T15:00:00+11:00').tz('Australia/Sydney')
  ];
  constructor(
    public dialogRef: MatDialogRef<AddEventDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log(
      this.data.dateMonth + '/' + this.data.dateDay + '/' + this.data.dateYear
    );
  }
  addEvent() {}
}
