import { Routes } from '@angular/router';
// import { LayoutComponent } from './pages/layout/layout.component';
 import { LoginComponent } from './components/login/login.component';
 import { LayoutComponent } from './components/layout/layout.component';
 import { StudentNavigationComponent } from './components/layout/student-navigation/student-navigation.component';
 import { TrainerNavigationComponent } from './components/layout/trainer-navigation/trainer-navigation.component';
 import { AdminNavigationComponent } from './components/layout/admin-navigation/admin-navigation.component';
import { StudentDashboardComponent } from './components/layout/student-navigation/student-dashboard/student-dashboard.component';
import { StudentClassWorkComponent } from './components/layout/student-navigation/student-class-work/student-class-work.component';
import { AdminDashboardComponent } from './components/layout/admin-navigation/admin-dashboard/admin-dashboard.component';
import { TrainerManagementComponent } from './components/layout/admin-navigation/trainer-management/trainer-management.component';
import { StudentManagementComponent } from './components/layout/admin-navigation/student-management/student-management.component';
import { StudentAddEditComponent } from './components/layout/admin-navigation/student-management/student-add-edit/student-add-edit.component';
import { AbacusToolComponent } from './components/layout/abacus-tool/abacus-tool.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { VehiclesComponent } from './pages/vehicles/vehicles.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    // {
    //     path:'',
    //     component: LayoutComponent,
    //     children: [
            {
                path: '',
                component: StudentNavigationComponent,
                loadChildren: () => import('./components/layout/student-navigation/student-navigation.module').then(m => m.StudentnavigationModule),
            },
            
            {
                path: 'trainer',
                loadChildren: () => import('./components/layout/trainer-navigation/trainer-navigation.module').then(m => m.TrainerNavigationModule),
                component: TrainerNavigationComponent,
            },
            {
                path:'',
                component: AdminNavigationComponent,
                loadChildren: () => import('./components/layout/admin-navigation/admin-navigation.module').then(m => m.AdminNavigationModule),
            },
            {
                path:'abacusTool',
                component: AbacusToolComponent
            }
            
        ]
//     },
    
// ];
