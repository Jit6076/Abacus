import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentNavigationRoutingModule } from '../student-navigation/student-navigation-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentNavigationRoutingModule,
    HttpClientModule
  ]
})
export class StudentnavigationModule { }
