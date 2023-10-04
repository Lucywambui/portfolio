import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProjectCardComponent } from './project-card/project-card.component';




@NgModule({
  declarations: [

    ProjectCardComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ProjectCardComponent
  ]
})
export class ElementsModule { }
