import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

interface SyllabusItem {
    level: string;
    topic: string;
    videono: number;
    exerciseNo: string;
}

interface StudentExercise {
    exerciseNo: number;
    level: number;
    topic: string;
    questionType: string;
    rows: number;
    correctSumsGoal: number;
    flashGap: number;
}

interface FriendNumber {
    number: number;
    friend: number;
    makes: number;
}

interface Combination {
    question: string;
    combination: string;
    answer: string;
}

interface NewStudentSyllabus {
    level: number;
    topicId: number;
    lessonName: string;
}

interface DownloadIcon {
    icon: string;
    title: string;
    route: string;
  }

@Component({
    selector: 'app-trainer-syllabus',
    templateUrl: './trainer-syllabus.component.html',
    styleUrls: ['./trainer-syllabus.component.scss'],
    imports: [
        CommonModule, 
        RouterModule, 
        MatTableModule, 
        MatTabsModule, 
        MatPaginatorModule, 
        MatSelectModule, 
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatIconModule
    ],
    standalone: true
})
export class TrainerSyllabusComponent implements OnInit {
    displayedColumns: string[] = ['level', 'topic', 'stage', 'worksheetRange'];
    studentDisplayedColumns: string[] = ['exerciseNo', 'level', 'topic', 'questionType', 'rows', 'correctSumsGoal', 'flashGap'];
    newStudentDisplayedColumns: string[] = ['level', 'topicId', 'lessonName'];
    activeTab: string = 'home'; // Initialize the activeTab property

    pageSize = 10;
    pageIndex = 0;
    pageSizeOptions = [5, 10, 25, 50];

    searchText: string = '';
    filteredStudentExercises: StudentExercise[] = [];

    syllabusData: SyllabusItem[] = [
        { level: 'Level 1', topic: 'Basics and Reading numbers', videono: 1, exerciseNo: '1-2' },
        { level: '', topic: 'Reading numbers above 9', videono: 2, exerciseNo: '3-12' },
        { level: '', topic: 'Addition and subtraction on Abacus (1-4)', videono: 3, exerciseNo: '13-14' },
        { level: '', topic: 'Addition and subtraction on Abacus (1-4, 5)', videono: 4, exerciseNo: '15-18' },
        { level: '', topic: 'Addition and subtraction on Abacus (6, 7, 8, 9)', videono: 5, exerciseNo: '19-24' },
        { level: '', topic: 'Addition and subtraction: Mental', videono: 6, exerciseNo: '25-36' },
        { level: '', topic: 'Combination for adding 1 using Small friend: On Abacus', videono: 7, exerciseNo: '37-39' },
        { level: '', topic: 'Combination for adding 1 using Small friend: Mental', videono: 8, exerciseNo: '40-42' },
        { level: '', topic: 'Combination for adding 2 using Small friend: On Abacus', videono: 9, exerciseNo: '43-45' },
        { level: '', topic: 'Combination for adding 2 using Small friend: Mental', videono: 10, exerciseNo: '46-48' },
        { level: '', topic: 'Combination for adding 3 using Small friend: On Abacus', videono: 11, exerciseNo: '49-51' },
        { level: '', topic: 'Combination for adding 3 using Small friend: Mental', videono: 12, exerciseNo: '52-54' },
        { level: '', topic: 'Combination for adding 4 using Small friend: On Abacus', videono: 13, exerciseNo: '55' },
        { level: 'Level 2', topic: 'Combination for subtracting 1 using Small friend', videono: 14, exerciseNo: '56' },
        { level: '', topic: 'Combination for subtracting 2 using Small friend', videono: 15, exerciseNo: '57' },
        { level: '', topic: 'Combination for subtracting 3 using Small friend', videono: 16, exerciseNo: '58' },
        { level: '', topic: 'Combination for subtracting 4 using Small friend', videono: 17, exerciseNo: '59' },
        { level: '', topic: 'Combination for adding 1 using Big friend', videono: 18, exerciseNo: '60' },
        { level: '', topic: 'Combination for adding 2 using Big friend', videono: 19, exerciseNo: '61' },
        { level: '', topic: 'Combination for adding 3 using Big friend', videono: 20, exerciseNo: '62' },
        { level: '', topic: 'Combination for adding 4 using Big friend', videono: 21, exerciseNo: '63' },
        { level: '', topic: 'Combination for adding 5 using Big friend', videono: 22, exerciseNo: '64' },
        { level: '', topic: 'Combination for adding 6 using Big friend', videono: 23, exerciseNo: '65' },
        { level: '', topic: 'Combination for adding 7 using Big friend', videono: 24, exerciseNo: '66' },
        { level: '', topic: 'Combination for adding 8 using Big friend', videono: 25, exerciseNo: '67' },
        { level: '', topic: 'Combination for adding 9 using Big friend', videono: 26, exerciseNo: '68' },
        { level: '', topic: 'Double Combinations for adding 6', videono: 27, exerciseNo: '69' },
        { level: '', topic: 'Double Combinations for adding 7', videono: 28, exerciseNo: '70' },
        { level: '', topic: 'Double Combinations for adding 8', videono: 29, exerciseNo: '71' },
        { level: '', topic: 'Double Combinations for adding 9', videono: 30, exerciseNo: '72' },
        { level: 'Level 3', topic: 'Combination for subtracting 1 using Big friend', videono: 31, exerciseNo: '73' },
        { level: '', topic: 'Combination for subtracting 2 using Big friend', videono: 32, exerciseNo: '74' },
        { level: '', topic: 'Combination for subtracting 3 using Big friend', videono: 33, exerciseNo: '75' },
        { level: '', topic: 'Combination for subtracting 4 using Big friend', videono: 34, exerciseNo: '76' },
        { level: '', topic: 'Combination for subtracting 5 using Big friend', videono: 35, exerciseNo: '77' },
        { level: '', topic: 'Combination for subtracting 6 using Big friend', videono: 36, exerciseNo: '78' },
        { level: '', topic: 'Combination for subtracting 7 using Big friend', videono: 37, exerciseNo: '79' },
        { level: '', topic: 'Combination for subtracting 8 using Big friend', videono: 38, exerciseNo: '80' },
        { level: '', topic: 'Combination for subtracting 9 using Big friend', videono: 39, exerciseNo: '81' },
        { level: '', topic: 'Double Combinations for subtracting 6', videono: 40, exerciseNo: '82' },
        { level: '', topic: 'Double Combinations for subtracting 7', videono: 41, exerciseNo: '83' },
        { level: '', topic: 'Double Combinations for subtracting 8', videono: 42, exerciseNo: '84' },
        { level: '', topic: 'Double Combinations for subtracting 9', videono: 43, exerciseNo: '85' },
        { level: 'Level 4', topic: 'Addition and Subtraction of 2, 3 digit numbers', videono: 44, exerciseNo: '86' },
        { level: 'Level 5', topic: 'Addition and Subtraction of 4 digit numbers', videono: 45, exerciseNo: '87' },
        { level: '', topic: 'Multiplication: Between 2 and 1 digit numbers', videono: 46, exerciseNo: '88' },
        { level: '', topic: 'Multiplication: Between 3 and 1 digit numbers', videono: 47, exerciseNo: '89' },
        { level: '', topic: 'Multiplication: Between 2 and 2 digit numbers', videono: 48, exerciseNo: '90' },
        { level: 'Level 6', topic: 'Multiplication: Between 4 and 1 digit numbers', videono: 49, exerciseNo: '91' },
        { level: '', topic: 'Multiplication: Between 3 and 2 digit numbers', videono: 50, exerciseNo: '92' },
        { level: 'Level 7', topic: 'Division : 2 digit by 1 digit number', videono: 51, exerciseNo: '93' },
        { level: '', topic: 'Division : 3 digit by 1 digit number', videono: 52, exerciseNo: '94' },
        { level: '', topic: 'Division : 4 digit by 1 digit number', videono: 53, exerciseNo: '95' },
        { level: 'Level 8', topic: 'Division : 5 digit by 1 digit number', videono: 54, exerciseNo: '96' },
        { level: '', topic: 'Division : 2 digit by 2 digit number', videono: 55, exerciseNo: '97' },
        { level: '', topic: 'Division : 3 digit by 2 digit number', videono: 56, exerciseNo: '98' },
        { level: '', topic: 'Division : 4 digit by 2 digit number', videono: 57, exerciseNo: '99' },
        { level: '', topic: 'xxxx', videono: 58, exerciseNo: '100' }
    ];

    studentExercises: StudentExercise[] = [
        { exerciseNo: 1, level: 1, topic: 'Read Numbers (Till 4)', questionType: 'Type the number displayed in the picture', rows: 1, correctSumsGoal: 10, flashGap: 4 },
        { exerciseNo: 2, level: 1, topic: 'Read Numbers (Till 4)', questionType: 'Type the number displayed in the picture', rows: 1, correctSumsGoal: 15, flashGap: 3 },
        { exerciseNo: 3, level: 1, topic: 'Read Numbers (Till 5)', questionType: 'Type the number displayed in the picture', rows: 1, correctSumsGoal: 10, flashGap: 3 },
        { exerciseNo: 4, level: 1, topic: 'Read Numbers (Till 5)', questionType: 'Type the number displayed in the picture', rows: 1, correctSumsGoal: 15, flashGap: 3 },
        { exerciseNo: 5, level: 1, topic: 'Read Numbers (Till 9)', questionType: 'Type the number displayed in the picture', rows: 1, correctSumsGoal: 10, flashGap: 3 },
        { exerciseNo: 6, level: 1, topic: 'Read Numbers (Till 9)', questionType: 'Type the number displayed in the picture', rows: 1, correctSumsGoal: 15, flashGap: 3 },
        { exerciseNo: 7, level: 1, topic: 'Read Numbers (Till 99)', questionType: 'Type the number displayed in the picture', rows: 1, correctSumsGoal: 10, flashGap: 3 },
        { exerciseNo: 8, level: 1, topic: 'Read Numbers (Till 99)', questionType: 'Type the number displayed in the picture', rows: 1, correctSumsGoal: 15, flashGap: 3 },
        { exerciseNo: 9, level: 1, topic: 'Read Numbers (Till 99)', questionType: 'Type the number displayed in the picture', rows: 1, correctSumsGoal: 15, flashGap: 3 },
        { exerciseNo: 10, level: 1, topic: 'Read Numbers (Till 99)', questionType: 'Type the number displayed in the picture', rows: 1, correctSumsGoal: 15, flashGap: 3 }
    ];

    newStudentSyllabus: NewStudentSyllabus[] = [
        { level: 1, topicId: 1, lessonName: 'Reading numbers till 4' },
        { level: 1, topicId: 2, lessonName: 'Reading numbers till 5' },
        { level: 1, topicId: 3, lessonName: 'Reading numbers till 9' },
        { level: 1, topicId: 4, lessonName: 'Reading numbers till 99' },
        { level: 1, topicId: 5, lessonName: 'Reading numbers till 999' },
        { level: 1, topicId: 6, lessonName: 'Movement of lower beads' },
        { level: 1, topicId: 7, lessonName: 'Movement of upper beads' },
        { level: 1, topicId: 8, lessonName: 'Movement of mix beads' },
        { level: 1, topicId: 9, lessonName: 'Small Friends' },
        { level: 1, topicId: 10, lessonName: 'Add using +5' }
    ];

    littleFriends: FriendNumber[] = [
        { number: 1, friend: 4, makes: 5 },
        { number: 2, friend: 3, makes: 5 },
        { number: 3, friend: 2, makes: 5 },
        { number: 4, friend: 1, makes: 5 }
    ];

    bigFriends: FriendNumber[] = [
        { number: 1, friend: 9, makes: 10 },
        { number: 2, friend: 8, makes: 10 },
        { number: 3, friend: 7, makes: 10 },
        { number: 4, friend: 6, makes: 10 },
        { number: 5, friend: 5, makes: 10 },
        { number: 6, friend: 4, makes: 10 },
        { number: 7, friend: 3, makes: 10 },
        { number: 8, friend: 2, makes: 10 },
        { number: 9, friend: 1, makes: 10 }
    ];

    combinations: Combination[] = [
        { question: '4 +1', combination: '5-3', answer: '6' },
        { question: '4 +2', combination: '5-3', answer: '6' },
        { question: '4 +3', combination: '5-2', answer: '7' },
        { question: '4 +4', combination: '5-1', answer: '8' },
        { question: '5 -1', combination: '5+4', answer: '4' },
        { question: '5 -2', combination: '5+3', answer: '3' },
        { question: '5 -3', combination: '5+2', answer: '2' },
        { question: '5 -4', combination: '5+1', answer: '1' },
        { question: '9 +1', combination: '10-9', answer: '10' },
        { question: '9 +2', combination: '10-8', answer: '11' },
        { question: '9 +3', combination: '10-7', answer: '12' },
        { question: '9 +4', combination: '10-6', answer: '13' },
        { question: '9 +5', combination: '10-5', answer: '14' },
        { question: '9 +6', combination: '10-4', answer: '15' },
        { question: '9 +7', combination: '10-3', answer: '16' },
        { question: '9 +8', combination: '10-2', answer: '17' },
        { question: '9 +9', combination: '10-1', answer: '18' },
        { question: '5 +6', combination: '10-5+1', answer: '11' },
        { question: '5 +7', combination: '10-5+2', answer: '12' },
        { question: '5 +8', combination: '10-5+3', answer: '13' },
        { question: '10 -1', combination: '10+9', answer: '9' },
        { question: '10 -2', combination: '10+8', answer: '8' },
        { question: '10 -3', combination: '10+7', answer: '7' },
        { question: '10 -4', combination: '10+6', answer: '6' },
        { question: '10 -5', combination: '10+5', answer: '5' },
        { question: '10 -6', combination: '10+4', answer: '4' },
        { question: '10 -7', combination: '10+3', answer: '3' },
        { question: '10 -8', combination: '10+2', answer: '2' },
        { question: '10 -9', combination: '10+1', answer: '1' },
        { question: '14 -6', combination: '10+5+1', answer: '8' },
        { question: '14 -7', combination: '10+5+2', answer: '7' },
        { question: '14 -8', combination: '10+5+3', answer: '6' },
        { question: '14 -9', combination: '10+5+4', answer: '5' }
    ];

    navigationCards: DownloadIcon[] = [
        { icon: 'download', title: 'Download', route: '/download' },
        
      ];
    

    rangeStart: number = 1;
    rangeEnd: number = 10;
    totalEntries: number = 0;

    filteredNewStudentSyllabus: NewStudentSyllabus[] = [];
    newStudentSearchText: string = '';
    newStudentRangeStart: number = 1;
    newStudentRangeEnd: number = 10;
    newStudentTotalEntries: number = 0;

    setActiveTab(tab: string): void {
        this.activeTab = tab; // Method to update the activeTab property
    }

    isLevelStart(item: SyllabusItem): boolean {
        return item.level !== '';
    }

    onPageChange(event: PageEvent) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.updateRange();
    }

    onPageSizeChange(event: any) {
        this.pageSize = event.value;
        this.pageIndex = 0; // Reset to first page when changing page size
        this.updateRange();
    }

    onNewStudentPageChange(event: PageEvent) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.updateNewStudentRange();
    }

    onNewStudentPageSizeChange(event: any) {
        this.pageSize = event.value;
        this.pageIndex = 0;
        this.updateNewStudentRange();
    }

    ngOnInit() {
        this.filteredStudentExercises = [...this.studentExercises];
        this.totalEntries = this.studentExercises.length;
        this.updateRange();

        this.filteredNewStudentSyllabus = [...this.newStudentSyllabus];
        this.newStudentTotalEntries = this.newStudentSyllabus.length;
        this.updateNewStudentRange();
    }

    onSearch(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.searchText = filterValue.trim().toLowerCase();
        this.filteredStudentExercises = this.studentExercises.filter(exercise =>
            exercise.topic.toLowerCase().includes(this.searchText) ||
            exercise.exerciseNo.toString().includes(this.searchText) ||
            exercise.level.toString().includes(this.searchText) ||
            exercise.questionType.toLowerCase().includes(this.searchText)
        );
        this.totalEntries = this.filteredStudentExercises.length;
        this.pageIndex = 0; // Reset to first page when searching
        this.updateRange();
    }

    onNewStudentSearch(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.newStudentSearchText = filterValue.trim().toLowerCase();
        this.filteredNewStudentSyllabus = this.newStudentSyllabus.filter(item =>
            item.lessonName.toLowerCase().includes(this.newStudentSearchText) ||
            item.level.toString().includes(this.newStudentSearchText) ||
            item.topicId.toString().includes(this.newStudentSearchText)
        );
        this.newStudentTotalEntries = this.filteredNewStudentSyllabus.length;
        this.pageIndex = 0;
        this.updateNewStudentRange();
    }

    private updateRange() {
        this.rangeStart = this.pageIndex * this.pageSize + 1;
        this.rangeEnd = Math.min((this.pageIndex + 1) * this.pageSize, this.totalEntries);
    }

    private updateNewStudentRange() {
        this.newStudentRangeStart = this.pageIndex * this.pageSize + 1;
        this.newStudentRangeEnd = Math.min((this.pageIndex + 1) * this.pageSize, this.newStudentTotalEntries);
    }
}