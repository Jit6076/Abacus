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
      level_1 : [
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
          name:'Reading numbers till 999',
          
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
          name:' Add 4 with small friends',
          
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
        },
      ]
    },
    {
      id:2,
      name :'Level 2',
      level_2 : [
        {
          name:'Big Friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:' Small & Big Friends (1to4)',
          
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
          name:' Add 9 with double & single combination',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
      ]
    },
    {
      id:3,
      name :'Level 3',
      level_3 : [
        {
          name:'Subtract 4 with big friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract using -10 (1to9)',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract using -10, -5, +5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add-Subtract using 5, 10',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract 5 with big friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract 6 with big friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract 7 with big friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract 8 with big friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract 9 with big friends',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract 6 with double combination',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:' Subtract 6 with double & single combination',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract 7 with double combination',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract 7 with double & single combination',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract 8 with double combination',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract 8 with double & single combination',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract 9 with double combination',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract 9 with double & single combination',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
      ]
    },
    {
      id:4,
      name :'Level 4',
      level_4 : [
        {
          name:'Add Subtract 2D Numbers when Sum is of 2D',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add to 2D numbers (Skip Columns)',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 2D numbers when sum is of 3D (2R)',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 3D and 2D numbers (2R)',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract from 3D numbers (Skip Columns)',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract from 3D numbers (Random)',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:' Add-Subtract Random 2D Number',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'times tables 2-5',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'times tables 6-9',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'times tables 2-9',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:' Multiply 2D & 1D',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
      ]
    },
    {
      id:5,
      name :'Level 5',
      level_5 : [
        {
          name:'Add Subtract 3D Numbers when Sum is of 3D',
          
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:' Add to 3D numbers (Skip Columns)',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 3D numbers when sum is of 4D (2R)',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 4D and 3D numbers (2R)',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract from 4D numbers (Skip Columns)',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract from 4D numbers (Random)',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add-Subtract Random 3D Number',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Multiply 3D & 1D',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Multiply 2D & 2D',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
      ]
    },
    {
      id:6,
      name :'Level 6',
      level_6 : [
        {
          name:'Add Subtract 4D Numbers when Sum is of 4D',
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add to 4D numbers (Skip Columns)',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add 4D numbers when sum is of 5D (2R)',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract from 5D numbers (Skip Columns)',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Subtract from 5D numbers (Random)',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Add-Subtract Random 4D Number',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Multiply 4D & 1D',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:' Multiply 3D & 2D',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
      ]
    },
    {
      id:7,
      name :'Level 7',
      level_7 : [
        {
          name:'Divide 2D by 1D',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Divide 3D by 1D',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Divide 4D by 1D',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
      ]
    },
    {
      id:8,
      name :'Level 8',
      level_8 : [
        {
          name:'Divide 2D by 2D',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Divide 3D by 2D',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Divide 4D by 2D',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
        {
          name:'Divide 3D by 3D',
          
          completePercent:10.00,
          completed:false,
          tag:"HW: 2/2 'A'"
        },
      ]
    }
  ]
}
