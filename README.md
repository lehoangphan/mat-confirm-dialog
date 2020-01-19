##### mat-confirm-dialog
  Simple dialog control for Angular, extended from @AngularMaterial/MatDialog;
##### Dependencies
 @Formly/Core, @Formly/Material, @Angular/Material; 
## Install
  * NPM
  > updating
  * Manual Clone Source 
  > STEP: 
  > 1. clone this source
  > 2. Copy to your Project 
## Control Types 
  * MatConfirmDialog 
  * MatConfirmDialogWithForm
## Usages
  * install dependencies: 
  ```
   npm i @ngx-formly/core --save 
   npm i @ngx-formly/material --save
   npm i @angular/material
  ```
  * add MatDialogModule, MatConfirmModule, MatConfirmDialogComponent, MatConfirmDialogWithFormComponent to your @ngModule 
  ```
  @NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatConfirmModule
  ],
  entryComponents: [
    MatConfirmDialogComponent, 
    MatConfirmDialogWithFormComponent
  ] 
  })
  ```
  
   * First, customize your method for opening dialog 
   ```
   private openDialog(dialog, data) {
    return this.dialog.open(dialog, {
      width: '250px',
      data: data,
      disableClose: true })}
   ```
  
   * MatConfirmDialog 
   <P> use this when popup dialog with 2 option (YES / NO) (DELETE, CANCEL) (ACCEPT, DECLINE) .... <P>
  
   ```
   readonly dialog = this.injector.get(MatDialog);
    this.openDialog(MatConfirmDialogComponent, {
      title: 'DELETE',
      content: 'ARE YOU SURE TO DELETE THIS ?',
      no_button: 'DECLINE',
      yes_button: 'ACCEPT'
    }).afterClosed().subscribe({ result, data } => {
      if (result === MatConfirmDialogResult.YES)
        //
        // do your code here 
        //
       else
        // do your code here
       console.log(data) 
        //dialog still return the data, but was null
       
       })
```   
     
   * MatConfirmDialogWithForm
    <p> use this when popup dialog with a form for user input (new Book, new infomation input) .... <P>
  
  ```
  this.openDialog(MatConfirmDialogWithFormComponent, {
      title: 'ADD NEW',
      content: 'ARE YOU SURE TO SAVE?',
      no_button: 'NO',
      yes_button: 'YES',
      form: {
        model: { email: 'email@gmail.com' },
        fields: [{
          key: 'email',
          type: 'input',
          templateOptions: {
            label: 'Email address',
            placeholder: 'Enter email',
            required: true,
          }
        }]
      }
    }).afterClosed().subscribe({ result, data } => {
      if (result === MatConfirmDialogResult.YES)
      //
      //   do your code here 
      // 
      else 
      //the form's data will be returned 
      console.log(data)  
      //
      //
    })
```
## returned result 
<p> dialog alway returns the click option (MatConfirmDialog.YES, MatconfirmDialog.NO) and data (null or form data) <p>
  
    
