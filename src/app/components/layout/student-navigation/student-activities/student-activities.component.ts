import { Component, inject, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';

export interface PeriodicElement {
  date: string;
  topic: string;
  topicId: string;
  exerciseType: string;
  rank: string;
  totalQuest: string;
  avgSpeed: string;
  result: string;
  timeTaken: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {date: '2025-04-17 12:09:45', topic: 'Reading numbers till 99', topicId: '4/1', exerciseType: 'cw / practice', rank: 'B', totalQuest: '1/1', avgSpeed: '0 sec', result: 'Fail', timeTaken: '00:00:35'},
  {date: '2025-04-17 12:09:45', topic: 'Reading numbers till 99', topicId: '4/1', exerciseType: 'cw / practice', rank: 'B', totalQuest: '1/1', avgSpeed: '0 sec', result: 'Fail', timeTaken: '00:00:35'},
  {date: '2025-04-17 12:09:45', topic: 'Reading numbers till 99', topicId: '4/1', exerciseType: 'cw / practice', rank: 'B', totalQuest: '1/1', avgSpeed: '0 sec', result: 'Fail', timeTaken: '00:00:35'},
  {date: '2025-04-17 12:09:45', topic: 'Reading numbers till 99', topicId: '4/1', exerciseType: 'cw / practice', rank: 'B', totalQuest: '1/1', avgSpeed: '0 sec', result: 'Fail', timeTaken: '00:00:35'},
  {date: '2025-04-17 12:09:45', topic: 'Reading numbers till 99', topicId: '4/1', exerciseType: 'cw / practice', rank: 'B', totalQuest: '1/1', avgSpeed: '0 sec', result: 'Fail', timeTaken: '00:00:35'},
  {date: '2025-04-17 12:09:45', topic: 'Reading numbers till 99', topicId: '4/1', exerciseType: 'cw / practice', rank: 'B', totalQuest: '1/1', avgSpeed: '0 sec', result: 'Fail', timeTaken: '00:00:35'}
];
@Component({
  selector: 'app-student-activities',
  imports: [MatTableModule, CommonModule,MatSortModule],
  templateUrl: './student-activities.component.html',
  styleUrl: './student-activities.component.scss'
})
export class StudentActivitiesComponent {
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = ['date', 'topic', 'topicId', 'exerciseType','rank','totalQuest','avgSpeed','result','timeTaken'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
