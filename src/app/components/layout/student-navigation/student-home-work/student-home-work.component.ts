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
  // Track current level and question
  currentLevel: number = 1;
  currentQuestionIndex: number = 0; // This means student is on question 5 (0-based index)

  panelArray: any[] = [
    {
      id: 1,
      name: 'Level 1',
      complete: true,
      questions: ['Reading numbers till 4', 'Reading numbers till 5', 'Reading numbers till 9', 
        'Reading numbers till 99', 'Reading numbers till 999', 'Movement of lower beads', 
        'Movement of upper beads', 'Movement of mix beads', 'Small Friends', 'Add using +5',
        'Add 1 with small friends', 'Add 2 with small friends', 'Add 3 with small friends',
        'Add 4 with small friends', 'Subtract using -5', 'Add & Subtract using 5',
        'Subtract 1 with small friends', 'Subtract 2 with small friends', 'Subtract 3 with small friends',
        'Subtract 4 with small friends'],
      completed: [false, false, false, false, false, false, false, false, false, false, false, 
                 false, false, false, false, false, false, false, false, false],
      tags: ["HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", 
             "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'",
             "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'",
             "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'"]
    },
    {
      id: 2,
      name: 'Level 2',
      questions: ['Big Friends', 'Small & Big Friends (1to4)', 'Small & Big Friends (All)',
        'Add Using +10 (1to4)', 'Add Using +10/+5 (1to4)', 'Add 1 with big friends',
        'Add 2 with big friends', 'Add 3 with big friends', 'Add 4 with big friends',
        'Add Using +10 (1to9)', 'Add using +5, -5, +10', 'Add 5 with big friends',
        'Add 6 with big friends', 'Add 7 with big friends', 'Add 8 with big friends',
        'Add 9 with big friends', 'Add 6 with double combination', 
        'Add 6 with double & single combination', 'Add 7 with double combination',
        'Add 7 with double & single combination', 'Add 8 with double combination',
        'Add 8 with double & single combination', 'Add 9 with double combination',
        'Add 9 with double & single combination'],
      completed: [false, false, false, false, false, false, false, false, false, false, false,
                 false, false, false, false, false, false, false, false, false, false, false, 
                 false, false],
      tags: ["HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", 
             "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'",
             "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'",
             "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'",
             "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'"]
    },
    {
      id: 3,
      name: 'Level 3',
      questions: ['Subtract 4 with big friends', 'Subtract using -10 (1to9)',
        'Subtract using -10, -5, +5', 'Add-Subtract using 5, 10', 'Subtract 5 with big friends',
        'Subtract 6 with big friends', 'Subtract 7 with big friends', 'Subtract 8 with big friends',
        'Subtract 9 with big friends', 'Subtract 6 with double combination',
        'Subtract 6 with double & single combination', 'Subtract 7 with double combination',
        'Subtract 7 with double & single combination', 'Subtract 8 with double combination',
        'Subtract 8 with double & single combination', 'Subtract 9 with double combination',
        'Subtract 9 with double & single combination'],
      completed: [false, false, false, false, false, false, false, false, false, false,
                 false, false, false, false, false, false, false],
      tags: ["HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'",
             "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'",
             "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'",
             "HW: 2/2 'A'", "HW: 2/2 'A'"]
    },
    {
      id: 4,
      name: 'Level 4',
      questions: ['Add Subtract 2D Numbers when Sum is of 2D', 'Add to 2D numbers (Skip Columns)',
        'Add 2D numbers when sum is of 3D (2R)', 'Add 3D and 2D numbers (2R)',
        'Subtract from 3D numbers (Skip Columns)', 'Subtract from 3D numbers (Random)',
        'Add-Subtract Random 2D Number', 'times tables 2-5', 'times tables 6-9',
        'times tables 2-9', 'Multiply 2D & 1D'],
      completed: [false, false, false, false, false, false, false, false, false, false, false],
      tags: ["HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'",
             "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'",
             "HW: 2/2 'A'"]
    },
    {
      id: 5,
      name: 'Level 5',
      questions: ['Add Subtract 3D Numbers when Sum is of 3D', 'Add to 3D numbers (Skip Columns)',
        'Add 3D numbers when sum is of 4D (2R)', 'Add 4D and 3D numbers (2R)',
        'Subtract from 4D numbers (Skip Columns)', 'Subtract from 4D numbers (Random)',
        'Add-Subtract Random 3D Number', 'Multiply 3D & 1D', 'Multiply 2D & 2D'],
      completed: [false, false, false, false, false, false, false, false, false],
      tags: ["HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'",
             "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'"]
    },
    {
      id: 6,
      name: 'Level 6',
      questions: ['Add Subtract 4D Numbers when Sum is of 4D', 'Add to 4D numbers (Skip Columns)',
        'Add 4D numbers when sum is of 5D (2R)', 'Subtract from 5D numbers (Skip Columns)',
        'Subtract from 5D numbers (Random)', 'Add-Subtract Random 4D Number',
        'Multiply 4D & 1D', 'Multiply 3D & 2D'],
      completed: [false, false, false, false, false, false, false, false],
      tags: ["HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'",
             "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'"]
    },
    {
      id: 7,
      name: 'Level 7',
      questions: ['Divide 2D by 1D', 'Divide 3D by 1D', 'Divide 4D by 1D'],
      completed: [false, false, false],
      tags: ["HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'"]
    },
    {
      id: 8,
      name: 'Level 8',
      questions: ['Divide 2D by 2D', 'Divide 3D by 2D', 'Divide 4D by 2D', 'Divide 3D by 3D'],
      completed: [false, false, false, false],
      tags: ["HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'", "HW: 2/2 'A'"]
    }
  ];

  // Helper method to check if a question should show flag
  isCurrentQuestion(levelId: number, questionIndex: number): boolean {
    return levelId === this.currentLevel && questionIndex === this.currentQuestionIndex;
  }

  // Helper method to check if a level should show flag
  isCurrentLevel(levelId: number): boolean {
    return levelId === this.currentLevel;
  }

  // Method to complete current question and move flag to next question
  completeQuestion() {
    const currentLevel = this.panelArray.find(level => level.id === this.currentLevel);
    if (currentLevel) {
      // Mark current question as completed
      currentLevel.completed[this.currentQuestionIndex] = true;      // Find next incomplete question in current level
      const nextQuestionIndex = currentLevel.completed.findIndex((completed: boolean, index: number) => 
        index > this.currentQuestionIndex && !completed
      );

      if (nextQuestionIndex !== -1) {
        // Move to next question in same level
        this.currentQuestionIndex = nextQuestionIndex;
      } else {
        // Move to first incomplete question of next level
        const nextLevel = this.panelArray.find(level => 
          level.id > this.currentLevel && level.completed.includes(false)
        );
        
        if (nextLevel) {
          this.currentLevel = nextLevel.id;
          this.currentQuestionIndex = nextLevel.completed.findIndex((completed: boolean) => !completed);
        }
      }
    }
  }
}
