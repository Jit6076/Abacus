import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-student-home-work',
  imports: [MatExpansionModule, MatIconModule, MatButtonModule, CommonModule, MatChipsModule],
  templateUrl: './student-home-work.component.html',
  styleUrl: './student-home-work.component.scss'
})
export class StudentHomeWorkComponent {
  panelArray:any[] = [
    {
      id:1,
      name :'Level 1',
      completed:false,
      data : [
        {
          name:'Reading numbers till 4',
          completed:true,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 9',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 99',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of lower beads',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of upper beads',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of mix beads',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Small Friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 1 with small friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 2 with small friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:' Add 3 with small friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
      ]
    },
    {
      id:2,
      name :'Level 2',
      data : [
        {
          name:'Reading numbers till 4',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 9',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 99',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of lower beads',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of upper beads',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of mix beads',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Small Friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 1 with small friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 2 with small friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:' Add 3 with small friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
      ]
    },
    {
      id:3,
      name :'Level 3',
      data : [
        {
          name:'Reading numbers till 4',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 9',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 99',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of lower beads',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of upper beads',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of mix beads',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Small Friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 1 with small friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 2 with small friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:' Add 3 with small friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
      ]
    },
    {
      id:4,
      name :'Level 4',
      data : [
        {
          name:'Reading numbers till 4',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 9',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 99',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of lower beads',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of upper beads',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of mix beads',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Small Friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 1 with small friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 2 with small friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:' Add 3 with small friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
      ]
    },
    {
      id:5,
      name :'Level 5',
      data : [
        {
          name:'Reading numbers till 4',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 9',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 99',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of lower beads',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of upper beads',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of mix beads',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Small Friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 1 with small friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 2 with small friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:' Add 3 with small friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
      ]
    },
    {
      id:6,
      name :'Level 6',
      data : [
        {
          name:'Reading numbers till 4',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 9',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 99',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of lower beads',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of upper beads',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of mix beads',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Small Friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 1 with small friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 2 with small friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:' Add 3 with small friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
      ]
    },
    {
      id:7,
      name :'Level 7',
      data : [
        {
          name:'Reading numbers till 4',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 9',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 99',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of lower beads',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of upper beads',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of mix beads',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Small Friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 1 with small friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 2 with small friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:' Add 3 with small friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
      ]
    },
    {
      id:8,
      name :'Level 8',
      data : [
        {
          name:'Reading numbers till 4',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 9',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Reading numbers till 99',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of lower beads',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of upper beads',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Movement of mix beads',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Small Friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 1 with small friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 2 with small friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:' Add 3 with small friends',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add using +5',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
      ]
    }
  ]
}
