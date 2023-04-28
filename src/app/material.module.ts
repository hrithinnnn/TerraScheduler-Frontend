import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';


const matModules = [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatNativeDateModule
]

@NgModule({
  imports: matModules,
  exports: matModules  
})
export class MaterialModule {

}