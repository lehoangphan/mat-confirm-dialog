import { Component, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatConfirmDialogResult } from '../MatConfirmDialogResult';
import { resolve } from 'url';

@Component({
  selector: 'app-mat-confirm',
  templateUrl: './mat-confirm-dialog.component.html'
})
export class MatConfirmDialogComponent {

  readonly title = this.data.title;
  readonly content = this.data.content;
  readonly no_button = this.data.no_button;
  readonly yes_button = this.data.yes_button;

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title?: string;
      content?: string;
      no_button?: string;
      yes_button?: string;
    }) { };

  private confirm(result: MatConfirmDialogResult) {
    this.dialogRef.close({
      result: result,
      data: null
    });
  };
  
}
