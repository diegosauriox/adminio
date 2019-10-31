import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddEventDialog } from './DialogEventsCommonPlaces/AddEventComponent/add-event.component';
import { DialogEventsCommonPlaces } from './DialogEventsCommonPlaces/dialog-events-common-places.component';
import { DialogImplementsCommonPlaces } from './DialogImplementsCommonPlaces/dialog-implements-common-places.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    OwlDateTimeModule,
    BrowserAnimationsModule, 
    OwlNativeDateTimeModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: [
    DialogImplementsCommonPlaces,
    DialogEventsCommonPlaces,
    AddEventDialog
  ],
  exports: [
    DialogImplementsCommonPlaces,
    DialogEventsCommonPlaces,
    AddEventDialog
  ],
  entryComponents: [
    DialogImplementsCommonPlaces,
    DialogEventsCommonPlaces,
    AddEventDialog
  ]
})
export class CommonPlacesModule {}
