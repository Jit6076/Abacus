import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-abacus-tool',
  imports: [MatCardModule, CommonModule, MatIconModule, MatInputModule],
  templateUrl: './abacus-tool.component.html',
  styleUrl: './abacus-tool.component.scss'
})
export class AbacusToolComponent {
  disabled:boolean = true;
  ngOnInit() {
    this.setAbacusValue(22); // Initialize with 0 or any default value
  }

  goBack(){

  }
  // disabled: boolean = false;
  // @Output() valueChange = new EventEmitter<number>();
  // abacusValue: number = 0;

  // // Each column: 1 upper bead, 4 lower beads
  // // 5 columns
  // columns = Array.from({ length: 5 }, () => ({
  //   upper: false,
  //   lower: [false, false, false, false]
  // }));

  // toggleUpper(columnIndex: number) {
  //   if (this.disabled) return;
  //   const col = this.columns[columnIndex];
  //   col.upper = !col.upper;
  //   this.emitValue();
  // }

  // toggleLower(columnIndex: number, beadIndex: number) {
  //   if (this.disabled) return;
  //   const col = this.columns[columnIndex];
  //   col.lower[beadIndex] = !col.lower[beadIndex];
  //   this.emitValue();
  // }

  // getColumnValue(col: { upper: boolean; lower: boolean[] }): number {
  //   const upper = col.upper ? 5 : 0;
  //   const lower = col.lower.filter(b => b).length;
  //   return upper + lower;
  // }

  // getTotalValue(): number {
  //   return this.columns.reduce((sum, col) => sum + this.getColumnValue(col), 0);
  // }

  // private emitValue() {
  //   this.valueChange.emit(this.getTotalValue());
  // }
  // onAbacusValueChanged(value: number) {
  //   this.abacusValue = value;
  // }
  rodsCount = 3;
  rods = Array(this.rodsCount);
  upperBeads: number[][] = [];
  lowerBeads: number[][] = [];
  totalValue: number = 0;

  dragging = false;
  draggedRodIndex: number | null = null;
  draggedBeadIndex: number | null = null;

  constructor() {
    this.initializeBeads();
  }

  initializeBeads() {
    for (let i = 0; i < this.rodsCount; i++) {
      this.upperBeads[i] = [0]; // 1 upper bead (value 5)
      this.lowerBeads[i] = [0, 0, 0, 0]; // 4 lower beads (each value 1)
    }
  }

  toggleUpperBead(rodIndex: number) {
    if(this.disabled) return;
    this.upperBeads[rodIndex][0] = this.upperBeads[rodIndex][0] ? 0 : 1;
    this.calculateTotal();
  }

  toggleLowerBead(rodIndex: number, beadIndex: number) {
    if(this.disabled) return;
    this.lowerBeads[rodIndex][beadIndex] = this.lowerBeads[rodIndex][beadIndex] ? 0 : 1;
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalValue = 0;
    for (let i = 0; i < this.rodsCount; i++) {
      const placeValue = Math.pow(10, this.rodsCount - i - 1);
      const upper = this.upperBeads[i][0] * 5;
      const lower = this.lowerBeads[i].reduce((a, b) => a + b, 0);
      this.totalValue += (upper + lower) * placeValue;
    }
  }

  activeRods: boolean[] = [];
  setAbacusValue(value: number) {
    this.initializeBeads(); // Reset all
    this.activeRods = new Array(this.rodsCount).fill(false); // Reset rods
  
    let strValue = value.toString().padStart(this.rodsCount, '0');
  
    for (let i = 0; i < this.rodsCount; i++) {
      const digit = parseInt(strValue[i]);
  
      if (digit !== 0) {
        this.activeRods[i] = true; // This rod has value
      }
  
      // Upper bead logic
      if (digit >= 5) {
        this.upperBeads[i][0] = 1; // Only one upper bead needed
      }
  
      // Lower beads logic
      let lowerBeadCount = digit >= 5 ? digit - 5 : digit;
      for (let j = 0; j < 4; j++) { // Assuming max 4 lower beads
        this.lowerBeads[i][j] = j < lowerBeadCount ? 1 : 0;
      }
    }
  
    this.calculateTotal();
  }
}
