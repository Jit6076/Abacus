import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentClassWorkComponent } from './student-class-work/student-class-work.component';
import { StudentAchievementsComponent } from './student-achievements/student-achievements.component';
import { StudentActivitiesComponent } from './student-activities/student-activities.component';
import { StudentLearningToolComponent } from './student-learning-tool/student-learning-tool.component';
import { StudentShopComponent } from './student-shop/student-shop.component';
import { StudentLevelTestComponent } from './student-level-test/student-level-test.component';
import { StudentHomeWorkComponent } from './student-home-work/student-home-work.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: StudentDashboardComponent,
  },
  {
    path: 'studentClassWork',
    component: StudentClassWorkComponent,
  },
  {
    path: 'studentHomeWork',
    component: StudentHomeWorkComponent,
  },
  {
    path: 'studentLevelTest',
    component: StudentLevelTestComponent,
  },
  {
    path: 'studentShop',
    component: StudentShopComponent,
  },
  {
    path: 'studentLearnTool',
    component: StudentLearningToolComponent,
  },
  {
    path: 'studentActivities',
    component: StudentActivitiesComponent,
  },
  {
    path: 'studentAchievements',
    component: StudentAchievementsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentNavigationRoutingModule { }
