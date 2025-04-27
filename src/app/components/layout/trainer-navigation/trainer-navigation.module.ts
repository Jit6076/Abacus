import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { TrainerNavigationRoutingModule } from "./trainer-navigation-routing.module";
import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        TrainerNavigationRoutingModule,
        RouterModule,
        TrainerDashboardComponent
    ],
    exports: []
})
export class TrainerNavigationModule { }