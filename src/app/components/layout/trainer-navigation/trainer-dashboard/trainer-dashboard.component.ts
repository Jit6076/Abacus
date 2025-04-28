import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

interface DashboardData {
  label: string;
  value: string | number;
}

interface NavigationCard {
  icon: string;
  title: string;
  route: string;
}

@Component({
  selector: 'app-trainer-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatCardModule],
  templateUrl: './trainer-dashboard.component.html',
  styleUrls: ['./trainer-dashboard.component.scss']
})
export class TrainerDashboardComponent {
  courseProgress: DashboardData[] = [
    { label: 'Topic Covered', value: '25 of 57' },
    { label: 'Tests Passed', value: '66 of 99' },
    { label: 'Course Completion', value: '67%' }
  ];

  studentStrength: DashboardData[] = [
    { label: 'Active/Paid Admissions (Today)', value: 9 },
    { label: 'Total Admissions (till date)', value: 10 }
  ];

  levelWiseStudents: DashboardData[] = [
    { label: 'Level 1', value: '' },
    { label: 'Level 2', value: '' },
    { label: 'Level 3', value: '' },
    { label: 'Level 4', value: '' },
    { label: 'Level 5', value: '' },
    { label: 'Level 6', value: '' },
    { label: 'Level 7', value: '' },
    { label: 'Level 8', value: '' }
  ];

  studentInquiries: DashboardData[] = [
    { label: 'Total', value: 0 },
    { label: 'Pending', value: 0 },
    { label: 'Converted', value: 0 },
    { label: 'Rejected', value: 0 }
  ];

  franchiseStatus: DashboardData[] = [
    { label: 'Franchise status', value: 'Approved | Certificate' }
  ];

  teachingEfficiency: DashboardData[] = [
    { label: 'My teaching efficiency Status', value: 'View (if you have more than 10 students)' }
  ];

  weeklyProgress: DashboardData[] = [
    { label: 'of students (Level-1)', value: 0 }
  ];

  rootsWallet: DashboardData[] = [
    { label: 'Current Balance', value: '0.00 INR' }
  ];

  otherInfo: DashboardData[] = [
    { label: 'Date of Joining', value: 'Mon, 09 Jan 2023, 11:26:47' },
    { label: 'Course Completion Certificate', value: 'Pending' },
    { label: 'My Contact Number', value: '8873731269' },
    { label: 'Teaching Languages', value: 'English, Hindi (Update)' },
    { label: 'Location', value: 'K-32,403, S.P , Sukhobristi Complex, Shapoorji, Action Area 3, Kolkata, West Bengal, Pin Code 700135, India' }
  ];

  links: DashboardData[] = [
    { label: 'Link to your own web page', value: 'https://abacusclassesonline.com/locations/Kolkata/Abacus-Classes-In-S-P-Sukhobristi-Complex-Shapoorji-Action-Area-3-Kolkata-West-Bengal.php' },
    { label: "Link to Student's Dashboard", value: 'https://abacusclassesonline.com/loginpage.php' },
    { label: "Link to Parents' Dashboard", value: 'https://abacusclassesonline.com/Parent-Login.php' },
    { label: 'Link to Website Homepage', value: 'https://abacusclassesonline.com' },
    { label: "Link to trainer's Login Page", value: 'https://abacusclassesonline.com/abacus_training/abacus_trainer_login.php' },
    { label: 'Virtual Abacus', value: '#' }
  ];

  navigationCards: NavigationCard[] = [
    { icon: 'description', title: 'Syllabus', route: '/syllabus' },
    { icon: 'school', title: 'Training Lessons', route: '/training-lessons' },
    { icon: 'extension', title: 'ExtraPractice', route: '/extra-practice' },
    { icon: 'play_circle', title: 'Training videos', route: '/training-videos' },
    { icon: 'business', title: 'Franchise', route: '/franchise' },
    { icon: 'person_add', title: 'Add Student', route: '/add-student' },
    { icon: 'search', title: 'Student Details', route: '/student-details' },
    { icon: 'check_circle', title: 'WA Attendance', route: '/wa-attendance' },
    { icon: 'flash_on', title: 'Flash Record', route: '/flash-record' },
    { icon: 'assessment', title: 'Student Performance', route: '/student-performance' },
    { icon: 'calendar_today', title: 'Stu. Daily Record', route: '/student-daily-record' },
    { icon: 'account_balance_wallet', title: 'RootsWallet', route: '/roots-wallet' },
    { icon: 'payment', title: 'Pay Student Fees', route: '/pay-student-fees' },
    { icon: 'emoji_events', title: 'Competitions', route: '/competitions' },
    { icon: 'book', title: 'Fees Passbook', route: '/fees-passbook' },
    { icon: 'shopping_cart', title: 'Order Now', route: '/order-now' },
    { icon: 'info', title: 'Wikipedia', route: '/wikipedia' }
  ];
}
