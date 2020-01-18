import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { MatConfirmDialogWithFormComponent } from './mat-confirm-dialog-with-form/mat-confirm-dialog-with-form.component';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [MatConfirmDialogComponent, MatConfirmDialogWithFormComponent],
  imports: [
    CommonModule,
    FormlyMaterialModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
  ]
})
export class MatConfirmModule { }
