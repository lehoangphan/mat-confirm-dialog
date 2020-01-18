import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatConfirmDialogResult } from '../MatConfirmDialogResult';
@Component({
  selector: 'app-mat-confirm-dialog-with-form',
  templateUrl: './mat-confirm-dialog-with-form.component.html',
})
export class MatConfirmDialogWithFormComponent {
  readonly title = this.data.title;
  readonly content = this.data.content;
  readonly no_button = this.data.no_button;
  readonly yes_button = this.data.yes_button;

  private form = new FormGroup({});
  readonly model: any = this.data.form.model;
  readonly fields: FormlyFieldConfig[] = this.data.form.fields;

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title?: string;
      content?: string;
      no_button?: string;
      yes_button?: string;
      form?: {
        model?: any;
        fields?: FormlyFieldConfig[];
      };
    }) { };

  confirm(result: MatConfirmDialogResult) {
    this.dialogRef.close({
      result: result,
      data: this.form.value
    })
  }
}
