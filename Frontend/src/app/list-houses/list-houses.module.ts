import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DialogOverviewHouseDetails } from './DialogOverviewHouseDetails/dialog-overview-house-details.component';
import { DialogHouseCommonExpenses } from './DialogHouseCommonExpenses/dialog-house-common-expenses.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatIconModule } from '@angular/material';
import { DialogAddHouseComponent } from './DialogAddHouse/dialog-add-house.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatDialogModule,
      MatIconModule,
      FormsModule
    ],
    declarations: [
        DialogOverviewHouseDetails,
        DialogHouseCommonExpenses,
        DialogAddHouseComponent
    ],
    exports: [
        DialogOverviewHouseDetails,
        DialogHouseCommonExpenses,
        DialogAddHouseComponent
    ],
    entryComponents: [
        DialogOverviewHouseDetails,
        DialogHouseCommonExpenses,
        DialogAddHouseComponent
    ]
  })

  export class ListHousesModule {

  }