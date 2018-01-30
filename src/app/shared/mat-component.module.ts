import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
            MatButtonModule, 
            MatCheckboxModule, 
            MatFormFieldModule, 
            MatSelectModule, 
            MatInputModule,
            BrowserAnimationsModule
        ],
  exports: [
            MatButtonModule, 
            MatCheckboxModule, 
            MatFormFieldModule, 
            MatSelectModule, 
            MatInputModule,
            BrowserAnimationsModule
        ],
  declarations: []
})
export class MatComponentModule { }