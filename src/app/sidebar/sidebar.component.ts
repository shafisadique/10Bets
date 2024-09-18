import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommingSoonModalComponent } from '../comming-soon-modal/comming-soon-modal.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  activeItem: string = 'HOME'; 
  
    constructor(private authService:AuthService,private modalService:NgbModal,private route:Router){}
  setActive(item: string) {
    this.activeItem = item;
    if(this.activeItem == 'CASINO'){
      this.modalService.open(CommingSoonModalComponent, {
        windowClass: 'custom-modal-content'
      });
    }
    if(this.activeItem == 'HOME'){
      this.route.navigate(['/']);
    }else if(this.activeItem == 'INPLAY'){
      this.route.navigate(['/in-play']);
    }
    else if(this.activeItem == 'MY LEDGER'){
      this.route.navigate(['/my-ledger']);
    }
    else if(this.activeItem == 'MY PROFILE'){
      this.route.navigate(['/reports/profile']);      
    }
    else if(this.activeItem == 'LOG OUT'){
      this.authService.logOut()
    }
  }
}
