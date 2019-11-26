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
  MatDialogModule,
  MatTooltipModule,
  MatCardModule
} from '@angular/material';
import { ImageUploadModule } from "angular2-image-upload";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogAddCommonPlaceComponent } from './DialogAddCommonPlace/dialog-add-common-place.component';
import { HttpClientModule } from '@angular/common/http';
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
    MatDialogModule,
    MatTooltipModule,
    MatCardModule,
    ImageUploadModule.forRoot(),
    HttpClientModule
  ],
  declarations: [
    DialogImplementsCommonPlaces,
    DialogEventsCommonPlaces,
    AddEventDialog,
    DialogAddCommonPlaceComponent
  ],
  exports: [
    DialogImplementsCommonPlaces,
    DialogEventsCommonPlaces,
    AddEventDialog,
    DialogAddCommonPlaceComponent
  ],
  entryComponents: [
    DialogImplementsCommonPlaces,
    DialogEventsCommonPlaces,
    AddEventDialog,
    DialogAddCommonPlaceComponent
  ]
})
export class CommonPlacesModule {}
