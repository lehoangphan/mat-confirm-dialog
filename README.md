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
   <P> use this when you need popup dialog with 2 option (YES / NO) (DELETE, CANCEL) (ACCEPT, DECLINE) .... <P>
  
   ```
    readonly dialog = this.injector.get(MatDialog);
    
    this.dialog.open(dialog, {
      width: '250px',
      data: {
        title: 'DELETE',
        content: 'ARE YOU SURE TO DELETE THIS FILE ?',
        no_button: 'CANCEL',
        yes_button: 'ACCEPT'
        },
      disableClose: true
    }).afterClosed().subscribe(res => {
      if (res.result === MatConfirmDialogResult.YES)
        //
        // do your code here, if user clicks yes 
        //
      else
        //
        //do your code here, if user clicks no
        //
    });
   
   ```
  
 
 

  


