import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavigationComponent } from './admin-navigation.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TrainerManagementComponent } from './trainer-management/trainer-management.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { StudentAddEditComponent } from './student-management/student-add-edit/student-add-edit.component';
import { TrainerAddEditComponent } from './trainer-management/trainer-add-edit/trainer-add-edit.component';

const routes: Routes = [
   // {
                    // path:'',
                    // component: AdminNavigationComponent,
                    // children: [
                        {
                            path:'adminDashboard',
                            component: AdminDashboardComponent,
                        },
                        {
                            path:'trainerManagement',
                            component: TrainerManagementComponent,
                        },
                        {
                            path:'studentManagement',
                            component: StudentManagementComponent,
                        },
                        {
                            path:'addStudent',
                            component: StudentAddEditComponent,
                        },
                        {
                            path:'addTrainer',
                            component: TrainerAddEditComponent,
                        }
                    ]
//                 },
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminNavigationRoutingModule { }
