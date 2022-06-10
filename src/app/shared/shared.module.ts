import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// User Modules
import { ModalComponent } from '@shared/modal/modal.component';



@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports: [
    ModalComponent,
    AngularSvgIconModule,
  ]
})
export class SharedModule { }
