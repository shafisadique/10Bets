import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { CommingSoonModalComponent } from '../../comming-soon-modal/comming-soon-modal.component';
import { AuthService } from '../../shared/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [GamesComponent,CommonModule],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.css'
})
export class BottomNavComponent {
  activeItem: string = 'HOME'; // Default active item is "Home"

  constructor(
    private authService: AuthService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  setActive(item: string) {
    this.activeItem = item;

    if (this.activeItem === 'CASINO') {
      this.modalService.open(CommingSoonModalComponent, {
        windowClass: 'custom-modal-content'
      });
    } else if (this.activeItem === 'INPLAY') {
      this.router.navigate(['/in-play']);
    } else if (this.activeItem === 'HOME') {
      this.router.navigate(['/']);
    } else if (this.activeItem === 'MY LEDGER') {
      this.router.navigate(['/my-ledger']);
    } else if (this.activeItem === 'PROFILE') {
      this.router.navigate(['/profile']);
    } else if (this.activeItem === 'LOG OUT') {
      this.authService.logOut();
    }
  }
}
