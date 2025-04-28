import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TrainerDashboardComponent } from "./trainer-dashboard/trainer-dashboard.component";
import { TrainerSyllabusComponent } from "./trainer-syllabus/trainer-syllabus.component";

const routes: Routes = [
    {
        path: "trainer-dashboard",
        component: TrainerDashboardComponent,
    },
    {
        path: "trainer-syllabus",
        component: TrainerSyllabusComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainerNavigationRoutingModule { }