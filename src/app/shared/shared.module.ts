import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Third Party Modules
import { AngularSvgIconModule } from 'angular-svg-icon';

// User Components
import { ModalComponent } from '@shared/modal/modal.component';



const components = [
  ModalComponent,
];

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  CommonModule,
  FormsModule,
  HttpClientModule,

  AngularSvgIconModule,
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules,
  ]
})
export class SharedModule { }
