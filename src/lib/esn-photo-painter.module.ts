import { NgModule } from '@angular/core';
import { EsnPhotoPainterComponent } from './esn-photo-painter.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    EsnPhotoPainterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    EsnPhotoPainterComponent
  ]
})
export class EsnPhotoPainterModule { }
