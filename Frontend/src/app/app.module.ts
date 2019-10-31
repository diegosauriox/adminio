import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SearchPipe } from './pipes/search.pipe';
import { ListHousesModule } from './list-houses/list-houses.module';
import { CommonPlacesModule } from './common-places/common-places.module';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { MatDialogModule} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    ListHousesModule,
    CommonPlacesModule,
    RouterModule,
    AppRoutingModule,
    MatTooltipModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SearchPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
