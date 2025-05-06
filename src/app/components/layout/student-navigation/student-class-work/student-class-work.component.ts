import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-class-work',
  imports: [
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatChipsModule,
  ],
  templateUrl: './student-class-work.component.html',
  styleUrl: './student-class-work.component.scss',
})
export class StudentClassWorkComponent {
  panelArray: any[] = [
    {
      id: 1,
      name: 'Level 1',
      completed: false,
      data: [
        {
          name: 'Reading numbers till 4',
          completed: true,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Reading numbers till 5',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Reading numbers till 9',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Reading numbers till 99',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Movement of lower beads',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Movement of upper beads',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Movement of mix beads',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Small Friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add using +5',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 1 with small friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 2 with small friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: ' Add 3 with small friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 4 with small friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract using -5',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add & Subtract using 5',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 1 with small friends',
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 2 with small friends',
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 3 with small friends',
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 4 with small friends',
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
      ],
    },
    {
      id: 2,
      name: 'Level 2',
      data: [
        {
          name: 'Big Friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Small & Big Friends (1to4)',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Small & Big Friends (All)',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add Using +10 (1to4)',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add Using +10/+5 (1to4)',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 1 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 2 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 3 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 4 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add Using +10 (1to9)',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: ' Add using +5, -5, +10',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 5 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 6 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 7 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 8 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 9 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 6 with double combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 6 with double & single combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 7 with double combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 7 with double & single combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 8 with double combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 8 with double & single combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 9 with double combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 9 with double & single combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
      ],
    },
    {
      id: 3,
      name: 'Level 3',
      data: [
        {
          name: 'Subtract using -10(1to4)',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract using -10, -5(1to4)',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 1 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 2 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: ' Subtract 3 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: ' Subtract 4 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract using -10 (1to9)',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract using -10, -5, +5',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: ' Add-Subtract using 5, 10',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 5 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 6 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 7 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 8 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 9 with big friends',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 6 with double combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 6 with double & single combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: ' Subtract 7 with double combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 7 with double & single combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 8 with double combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 8 with double & single combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 9 with double combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract 9 with double & single combination',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
      ],
    },
    {
      id: 4,
      name: 'Level 4',
      data: [
        {
          name: 'Add Subtract 2D Numbers when Sum is of 2D',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add to 2D numbers (Skip Columns)',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 2D numbers when sum is of 3D (2R)',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: ' Add 3D and 2D numbers (2R)',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract from 3D numbers (Skip Columns)',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract from 3D numbers (Random)',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add-Subtract Random 2D Number',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'times tables 2-5',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'times tables 6-9',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Multiply 2D & 1D',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
      ],
    },
    {
      id: 5,
      name: 'Level 5',
      data: [
        {
          name: 'Add Subtract 3D Numbers when Sum is of 3D',

          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add to 3D numbers (Skip Columns)',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 3D numbers when sum is of 4D (2R)',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 4D and 3D numbers (2R)',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract from 4D numbers (Skip Columns)',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract from 4D numbers (Random)',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add-Subtract Random 3D Number',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Multiply 3D & 1D',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Multiply 2D & 2D',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 2 with small friends',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: ' Add 3 with small friends',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add using +5',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add using +5',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add using +5',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
      ],
    },
    {
      id: 6,
      name: 'Level 6',
      data: [
        {
          name: 'Add Subtract 4D Numbers when Sum is of 4D',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add to 4D numbers (Skip Columns)',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 4D numbers when sum is of 5D (2R)',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add 5D and 4D numbers (2R)',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract from 5D numbers (Skip Columns)',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Subtract from 5D numbers (Random)',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Add-Subtract Random 4D Number',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Multiply 4D & 1D',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Multiply 3D & 2D',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
      ],
    },
    {
      id: 7,
      name: 'Level 7',
      data: [
        {
          name: 'Divide 2D by 1D',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Divide 3D by 1D',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Divide 4D by 1D',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
      ],
    },
    {
      id: 8,
      name: 'Level 8',
      data: [
        {
          name: 'Divide 2D by 2D',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Divide 3D by 2D',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [],
        },
        {
          name: 'Divide 4D by 2D',

          completePercent: 10.0,
          completed: false,
          tag: "HW: 2/2 'A'",
          worksheets: [
            { title: 'PracticeField', items: this.generateItems() },
            { title: 'BattleField 10Q 2R', items: this.generateItems() },
            { title: 'BattleField 10Q 2R', items: this.generateItems() },
            { title: 'BattleField 10Q 2R', items: this.generateItems() },
            { title: 'BattleField 10Q 2R', items: this.generateItems() },
            { title: 'BattleField 10Q 2R', items: this.generateItems() },
            { title: 'PracticeField', items: this.generateItems() },
            { title: 'BattleField 10Q 2R', items: this.generateItems() },
            { title: 'BattleField 10Q 2R', items: this.generateItems() },
            { title: 'BattleField 10Q 2R', items: this.generateItems() },
            { title: 'BattleField 10Q 2R', items: this.generateItems() },
        ],
        }
      ],
    },
  ];

  generateItems() {
    return [
      { label: 'O', score1: 8.22,  },
      { label: 'A+', score1: 5.12, },
      { label: 'A', score1: 3.42, },
      { label: 'B+', score1: 2.22, },
      { label: 'C+', score1: 1.58,},
    ];
  }
}
