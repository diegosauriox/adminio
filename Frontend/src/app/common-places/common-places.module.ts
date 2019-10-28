import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AddEventDialog } from "./DialogEventsCommonPlaces/AddEventComponent/add-event.component";
import { DialogEventsCommonPlaces } from "./DialogEventsCommonPlaces/dialog-events-common-places.component";
import { DialogImplementsCommonPlaces } from "./DialogImplementsCommonPlaces/dialog-implements-common-places.component";
import { FullCalendarModule } from "@fullcalendar/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatFormFieldModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatIconModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule
} from "@angular/material";
import { NgbTimepickerModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    NgbTimepickerModule,
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
