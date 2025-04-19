import { Component, computed, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ResponsiveService } from '../../../services/responsive.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-navigation',
  imports: [MatSidenavModule, MatIconModule,CommonModule, RouterModule],
  templateUrl: './student-navigation.component.html',
  styleUrl: './student-navigation.component.scss'
})
export class StudentNavigationComponent {
  isLearningToolsOpen:boolean = false;
  opened:boolean =true
  responsiveService = inject(ResponsiveService);

  navigationMode = computed(() => {
    if (this.responsiveService.mediumWidth()) {
      this.opened = false;
      return 'over';
    }
    this.opened = true;
    return 'side';
  })
  openCloseNav= computed(() => {
    if (this.responsiveService.mediumWidth()) {
      return false;
    }
    return true;
  })
  constructor(private router: Router) {
  }

  ngOnInit() {
    //this.router.navigate(['layout/studentNavigation/dashboard'], { replaceUrl: true });
  }
  toggleLearningTools(){
    this.isLearningToolsOpen = !this.isLearningToolsOpen;
  }
  @ViewChild('fullscreenElement') fullscreenElement!: ElementRef;
  isFullscreen = false;

  toggleFullscreen() {
    if (!this.isFullscreen) {
      this.enterFullscreen();
    } else {
      this.exitFullscreen();
    }
  }

  enterFullscreen() {
    const element = this.fullscreenElement.nativeElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element['mozRequestFullScreen']) { /* Firefox */
      element['mozRequestFullScreen']();
    } else if (element['webkitRequestFullscreen']) { /* Chrome, Safari and Opera */
      element['webkitRequestFullscreen']();
    } else if (element['msRequestFullscreen']) { /* IE/Edge */
      element['msRequestFullscreen']();
    }
    this.isFullscreen = true;
  }

  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any)['mozCancelFullScreen']) { /* Firefox */
      (document as any)['mozCancelFullScreen']();
    } else if ((document as any)['webkitExitFullscreen']) { /* Chrome, Safari and Opera */
      (document as any)['webkitExitFullscreen']();
    } else if ((document as any)['msExitFullscreen']) { /* IE/Edge */
      (document as any)['msExitFullscreen']();
    }
    this.isFullscreen = false;
  }

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  fullscreenchange() {
    this.isFullscreen = !!document.fullscreenElement || !!(document as any).webkitFullscreenElement || !!(document as any)['mozFullScreenElement'] || !!(document as any)['msFullscreenElement'];
  }

  navigateTo(path: string) {
    this.router.navigate(['layout/studentNavigation/dashboard'], { replaceUrl: true });
  }
}
