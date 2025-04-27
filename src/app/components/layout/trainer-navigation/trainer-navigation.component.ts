import { Component, computed, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ResponsiveService } from '../../../services/responsive.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-trainer-navigation',
  imports: [MatSidenavModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './trainer-navigation.component.html',
  styleUrl: './trainer-navigation.component.scss'
})
export class TrainerNavigationComponent {
  isLearningToolsOpen: boolean = false;
  opened: boolean = true;
  responsiveService = inject(ResponsiveService);

  navigationMode = computed(() => {
    if (this.responsiveService.mediumWidth()) {
      this.opened = false;
      return 'over';
    }
    this.opened = true;
    return 'side';
  });

  openCloseNav = computed(() => {
    if (this.responsiveService.mediumWidth()) {
      return false;
    }
    return true;
  });

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['trainer/trainer-dashboard'], { replaceUrl: true });
  }

  toggleLearningTools() {
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
    } else if (element['mozRequestFullScreen']) {
      element['mozRequestFullScreen']();
    } else if (element['webkitRequestFullscreen']) {
      element['webkitRequestFullscreen']();
    } else if (element['msRequestFullscreen']) {
      element['msRequestFullscreen']();
    }
    this.isFullscreen = true;
  }

  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any)['mozCancelFullScreen']) {
      (document as any)['mozCancelFullScreen']();
    } else if ((document as any)['webkitExitFullscreen']) {
      (document as any)['webkitExitFullscreen']();
    } else if ((document as any)['msExitFullscreen']) {
      (document as any)['msExitFullscreen']();
    }
    this.isFullscreen = false;
  }

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  fullscreenchange() {
    this.isFullscreen =
      !!document.fullscreenElement ||
      !!(document as any).webkitFullscreenElement ||
      !!(document as any)['mozFullScreenElement'] ||
      !!(document as any)['msFullscreenElement'];
  }
}