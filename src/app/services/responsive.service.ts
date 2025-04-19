import { computed, inject, Inject, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  // private readonly small = '(max-width: 600px)';
  private readonly medium = '(max-width: 1000px)';
  private readonly large = '(min-width: 1001px)';
breakpointObserver = inject(BreakpointObserver);

// screenWidth$ = this.breakpointObserver.observe([
//   this.small,this.medium, this.large
// ])
 screenWidth = toSignal(this.breakpointObserver.observe([
  this.medium, this.large
]))
 //smallWidth = computed(() => this.screenWidth()?.breakpoints[this.small]);
 mediumWidth = computed(() => this.screenWidth()?.breakpoints[this.medium]);
 largeWidth = computed(() => this.screenWidth()?.breakpoints[this.large]);
}
