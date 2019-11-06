import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DialogOverviewHouseDetails } from './DialogOverviewHouseDetails/dialog-overview-house-details.component';
import { DialogHouseCommonExpenses } from './DialogHouseCommonExpenses/dialog-house-common-expenses.component';
import { MatButtonModule,
         MatSelectModule,
         MatCardModule,
         MatInputModule,
         MatDialogModule,
         MatIconModule,
         MatChipsModule } from '@angular/material';
import { DialogAddHouseComponent } from './DialogAddHouse/dialog-add-house.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DialogAddHomeOwnerComponent } from './DialogAddHomeOwner/dialog-add-homeowner.component';
import { DialogSeeHomeOwnerComponent } from './DialogSeeHomeowner/dialog-seehomeowner.component';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatDialogModule,
      MatIconModule,
      FormsModule,
      MatCheckboxModule,
      MatSelectModule,
      ReactiveFormsModule,
      MatChipsModule
    ],
    declarations: [
        DialogOverviewHouseDetails,
        DialogHouseCommonExpenses,
        DialogAddHouseComponent,
        DialogAddHomeOwnerComponent,
        DialogSeeHomeOwnerComponent
    ],
    exports: [
        DialogOverviewHouseDetails,
        DialogHouseCommonExpenses,
        DialogAddHouseComponent,
        DialogAddHomeOwnerComponent,
        DialogSeeHomeOwnerComponent
    ],
    entryComponents: [
        DialogOverviewHouseDetails,
        DialogHouseCommonExpenses,
        DialogAddHouseComponent,
        DialogAddHomeOwnerComponent,
        DialogSeeHomeOwnerComponent
    ]
  })

  export class ListHousesModule {

  }