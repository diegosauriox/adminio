import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ListHousesComponent } from 'app/list-houses/list-houses.component';
import { CommonPlacesComponent } from 'app/common-places/common-places.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    {path:'list-houses', component: ListHousesComponent},
    {path: 'common-places',component: CommonPlacesComponent}
];
