import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ConfigurationComponent} from '../../configuration/configuration.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatTableModule,
  MatDialogModule,
  MatCardModule
} from '@angular/material';
import { ListHousesComponent } from '../../list-houses/list-houses.component';
import { CommonPlacesComponent } from '../../common-places/common-places.component';
import { SpeedDialFabComponent } from 'app/speed-dial-fab/speed-dial-fab.component';
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
    MatCardModule
  ],
  declarations: [
    DashboardComponent,
    ListHousesComponent,
    ConfigurationComponent,
    CommonPlacesComponent,
    SpeedDialFabComponent
  ]
})
export class AdminLayoutModule {}
