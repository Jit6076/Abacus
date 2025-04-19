import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-student-level-test',
  imports: [MatTableModule, CommonModule],
  templateUrl: './student-level-test.component.html',
  styleUrl: './student-level-test.component.scss'
})
export class StudentLevelTestComponent {
  displayedColumns: string[] = ['name', 'totalQue', 'flashingInterval'];
  dataSource = [
    {  name: 'Test [Level 1]', totalQue: '5', flashingInterval: '2.50' },
    {  name: 'Test [Level 2]', totalQue: '5', flashingInterval: '2.50' },
    {  name: 'Test [Level 3]', totalQue: '5', flashingInterval: '2.50' },    
    {  name: 'Test [Level 4]', totalQue: '5', flashingInterval: '2.50' },
    {  name: 'Test [Level 5]', totalQue: '10', flashingInterval: '2.50' }
  ]
  startLevelTest(level:any){
    console.log(level);

  }
}
