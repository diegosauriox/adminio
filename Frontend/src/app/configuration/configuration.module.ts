import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatIconModule } from '@angular/material';
import { AddOwnerComponent } from './add-owner/add-owner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule
  ],declarations:[
    AddOwnerComponent
  ], exports: [
    AddOwnerComponent
  ], entryComponents:[
    AddOwnerComponent
  ]
})
export class ConfigurationModule { }
