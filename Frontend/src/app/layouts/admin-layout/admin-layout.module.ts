import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatTableModule,
  MatDialogModule,
  MatCardModule,
  MatCheckboxModule
} from '@angular/material';
import { ListHousesComponent } from '../../list-houses/list-houses.component';
import { CommonPlacesComponent } from '../../common-places/common-places.component';
import { SpeedDialFabComponent } from 'app/speed-dial-fab/speed-dial-fab.component';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule
  ],
  declarations: [
    DashboardComponent,
    ListHousesComponent,
    CommonPlacesComponent,
    SpeedDialFabComponent
  ]
})
export class AdminLayoutModule {}
