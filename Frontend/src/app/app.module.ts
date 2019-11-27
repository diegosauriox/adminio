import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgxStripeModule } from 'ngx-stripe';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SearchPipe } from './pipes/search.pipe';
import { ListHousesModule } from './list-houses/list-houses.module';
import { CommonPlacesModule } from './common-places/common-places.module';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { MatDialogModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';
import { ConfigurationModule } from './configuration/configuration.module';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';

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
    MatDialogModule,
    ConfigurationModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxStripeModule.forRoot('pk_test_s9A1yhHPvrYKVsYQbhZo8RKv00UnssNpUx')
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SearchPipe,
    LoginComponent,
    PaymentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
