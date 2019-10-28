import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, NgForm } from '@angular/forms';
import { Evento } from '../../../common-places/common-places.component';

@Component({
  selector: 'app-add-event',
  templateUrl: 'add-event.component.html'
})
export class AddEventDialog {
  newEvent: Evento = {
    title: '',
    start: new Date(),
    end: new Date(),
    description: null,
    encargadoEvento: null
  } as Evento;
  @ViewChild('form', { static: true }) form: NgForm;

  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;
    if (!value) {
      return null;
    }
    if (value.hour < 9) {
      return { tooEarly: true };
    }
    if (value.hour > 20) {
      return { tooLate: true };
    }
    return null;
  });
  ctrl2: FormControl;
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
    this.ctrl2 = new FormControl('', (control2: FormControl) => {
      const value = control2.value;
      if (!value) {
        return null;
      }
      if (value.hour < 9) {
        return { tooLate: true };
      }
      if (value.hour > 23) {
        return { tooLate: true };
      }
      return null;
    });
  }
  addEvent() {}
}
