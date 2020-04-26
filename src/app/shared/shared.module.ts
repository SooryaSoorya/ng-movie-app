import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [ ]
})
export class SharedModule { }
