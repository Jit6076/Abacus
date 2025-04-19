import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-student-dashboard',
  imports: [MatIconModule,CommonModule, MatCardModule, MatProgressBarModule, MatChipsModule],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent {
  cards: any[] = [
    {
      name:'1',
      grade:'A',
      completePercent:10.00
    },
    {
      name:'2',
      grade:'',
      completePercent:0.00
    },
    {
      name:'3',
      grade:'',
      completePercent:0.00
    },
    {
      name:'4',
      grade:'',
      completePercent:0.00
    },
    {
      name:'5',
      grade:'',
      completePercent:0.00
    },
    {
      name:'6',
      grade:'',
      completePercent:0.00
    },
    {
      name:'7',
      grade:'',
      completePercent:0.00
    },
    {
      name:'8',
      grade:'',
      completePercent:0.00
    },
]
}
