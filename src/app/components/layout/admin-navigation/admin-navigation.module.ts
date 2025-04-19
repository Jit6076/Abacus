import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminNavigationRoutingModule } from './admin-navigation-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../../services/user.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminNavigationRoutingModule,
    HttpClientModule
  ]
})
export class AdminNavigationModule { }
