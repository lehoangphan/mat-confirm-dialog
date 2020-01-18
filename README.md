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
    }).afterClosed().subscribe(res => {
      if (res.result === MatConfirmDialogResult.YES)
        //
        // do your code here 
        //
       else 
       })
```   
     
   * MatConfirmDialogWithForm
    <p> use this when popup dialog with a form for user input (new Book, new infomation input) .... <P>
  
  ```
  this.openDialog(MatConfirmDialogWithFormComponent, {
      title: 'thêm mới',
      content: 'bạn có muốn lưu?',
      no_button: 'không',
      yes_button: 'lưu',
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
    }).afterClosed().subscribe(res => {
      console.log(res.result)
      console.log(res.data)
      // if (res.result === MatConfirmDialogResult.YES) 
      //   console.log(res.data)
      //   // this.createEmitter.emit()
      // else 
      // console.log("do nothing")

    })
```
  
    
