import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-class-work',
  imports:  [MatExpansionModule, MatIconModule, MatButtonModule, CommonModule, MatChipsModule],
  templateUrl: './student-class-work.component.html',
  styleUrl: './student-class-work.component.scss'
})
export class StudentClassWorkComponent {
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
        name:'Add using +5',
        
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
        name:'Add 4 with small friends',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Subtract using -5',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add & Subtract using 5',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Subtract 1 with small friends',
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Subtract 2 with small friends',
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Subtract 3 with small friends',
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Subtract 4 with small friends',
        completed:false,
        tag:"HW: 2/2 'A'"
      }
    ]
  },
  {
    id:2,
    name :'Level 2',
    data : [
      {
        name:'Big Friends',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Small & Big Friends (1to4)',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Small & Big Friends (All)',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add Using +10 (1to4)',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add Using +10/+5 (1to4)',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 1 with big friends',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 2 with big friends',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 3 with big friends',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 4 with big friends',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add Using +10 (1to9)',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:' Add using +5, -5, +10',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 5 with big friends',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 6 with big friends',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 7 with big friends',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 8 with big friends',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 9 with big friends',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 6 with double combination',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 6 with double & single combination',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 7 with double combination',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 7 with double & single combination',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 8 with double combination',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 8 with double & single combination',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 9 with double combination',
        
        completed:false,
        tag:"HW: 2/2 'A'"
      },
      {
        name:'Add 9 with double & single combination',
        
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
